// @ts-nocheck

const User = require("../api/index");

const defaltReplyConfig = {
  ignoreReplyToOters: true,
  readHistory: true,
  replyRequired: true,
};

/**
 * 物实脚本机器人，主要内置了回复、读取信息、过滤消息、异步处理、任务队列几个小宫女
 *
 * @class Bot
 * @extends {User}
 */
class Bot extends User {
  /**
   * 配置基本信息
   * @param {*} username
   * @param {*} password
   * @param {Function} processFn 会被传入评论对象和 Bot 实例，返回值会被作为**回复用户**的内容，无需包含“回复@”等。参数：msg信息对象, botInstance
   * @param {Function} catched 捕获内容后的回调函数
   * @param {Function} replyed 成功回复后的回调函数Function
   * @param {Function} finnished 回复任务队列清空后的回调函数
   */
  constructor(username, password, processFn, catched, replyed, finnished) {
    super(username, password);
    this.processFn = processFn;
    this.catched = catched;
    this.replyed = replyed;
    this.pending = new Set();
    this.finnish = new Set();
    this.finnished = finnished;
  }
  /**
   * 初始化并且登录
   *
   * @param {*} ID - 回复的ID（作品/用户ID）
   * @param {*} type － 类型（Discussion,Experiment,User)
   * @param {*} [replyConfig={ ignoreReplyToOters: true, readHistory: true, replyRequired: true}]
   * @memberof Bot
   */
  async init(ID, type, replyConfig = {}) {
    const login = await this.user.login();
    this.botID = login.Data.User.ID;
    this.targetID = ID;
    this.targetType = type;
    this.replyConfig = { ...defaltReplyConfig, ...replyConfig };
    // 判断开始获取的位置
    const data = await this.messages.get(this.targetID, this.targetType, 20);
    if (this.replyConfig.readHistory == true) {
      let index = "";
      const msglist = data.Data.Comments.reverse();
      for (let comment of msglist) {
        if (comment.UserID == this.botID) {
          index = comment.ID;
        }
      }
      this.startIndex = index;
    } else {
      this.startIndex =
        data.Data.Comments.length >= 1 ? data.Data.Comments[0].ID : "";
    }
  }

  async run() {
    const re = await this.messages.get(this.targetID, this.targetType, 20);
    const that = this;
    for (let comment of re.Data.Comments) {
      if (comment.ID == this.startIndex) break;
      if (comment.UserID == this.botID) continue;
      if (this.pending.has(comment.ID)) continue;
      if (this.finnish.has(comment.ID)) continue;
      if (
        comment.Content.includes("回复<") &&
        this.replyConfig.ignoreReplyToOters == true &&
        comment.Content.includes(this.botID) == false
      )
        continue;
      if (
        comment.Content.includes(this.botID) == false &&
        this.replyConfig.replyRequired
      )
        continue;
      await this.catched(comment);
      this.pending.add(comment.ID);
      const reply = await this.processFn(comment, this);
      if (reply == "") continue;
      const msg = `回复@${comment.Nickname}: ${reply}`;
      this.messages
        .comment(this.targetID, this.targetType, msg, comment.UserID)
        .then(() => {
          that.finnish.add(comment.ID);
          that.pending.delete(comment.ID);
          if (this.pending.size == 0) {
            this.finnished(this.finnish);
          }
          this.replyed({ msg: msg, ...comment });
        });
    }
  }
}
module.exports = Bot;
