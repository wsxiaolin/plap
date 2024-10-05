const cover = require("./experiment/conver");
const getExperiment = require("./experiment/getExperiment");
const updateExperiment = require("./experiment/update");

const getMessage = require("./messages/get");
const sendMessages = require("./messages/send");

const getDerivatives = require("./projects/getDerivatives");
const getSummary = require("./projects/getSummary");
const getSupporters = require("./projects/getSupporters");
const query = require("./projects/query");
const star = require("./projects/star");

const getUser = require("./user/getUser");
const getUserByComments = require("./user/getUserByCmmentID");
const login = require("./user/login");

/**
 * User 类用于创建用户实例，管理用户名、密码及相关操作。
 *
 * 构造函数接受用户名和密码作为参数，支持从环境变量中获取默认值。
 * 提供多个功能模块，包括消息处理、用户操作、项目管理及实验相关操作。
 *
 * @class User
 * @constructor
 * @param {string|null} username - 用户名，若为null则初始化为null，若未提供则尝试从环境变量获取。
 * @param {string|null} password - 密码，若为null则初始化为null，若未提供则尝试从环境变量获取。
 *
 * @property {Object} messages - 消息相关操作，包括获取用户评论、发送消息及获取消息。
 * @property {Object} user - 用户相关操作，包括登录及获取用户信息。
 * @property {Object} projects - 项目管理操作，包括查询、获取总结、获取详细信息、收藏项目及获取支持者。
 * @property {Object} experiment - 实验管理操作，包括更新实验、获取封面及获取实验。
 */

class User {
  /**
   * 创建一个物实用户实例
   * @param {String} username
   * @param {String} password
   * @memberof User
   */
  constructor(username, password) {
    if (username === null) {
      this.username = null;
      this.password = null;
    } else {
      this.username = username || process?.env?.USERNAME || null;
      this.password = password || process?.env?.PASSWORD || null;
    }

    this.messages = {
      get: getMessage.bind(this),
      comment: sendMessages.bind(this),
    };
    this.user = {
      login: login.bind(this),
      getUser: getUser.bind(this),
      getUserByComments: getUserByComments.bind(this),
    };
    this.projects = {
      query: query.bind(this),
      getSummary: getSummary.bind(this),
      getDerivatives: getDerivatives.bind(this),
      star: star.bind(this),
      getSupporters: getSupporters.bind(this),
    };
    this.experiment = {
      update: updateExperiment.bind(this),
      cover: cover.bind(this),
      get: getExperiment.bind(this),
    };
  }
}

module.exports = User;
