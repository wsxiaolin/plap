const plrequest = require("../../api/axiosInstance");

/**
 ** 发送消息
 *
 * @param {String} TargetID - 相关type的序列号，例如667c0e11d46f35b9aaddb8dd
 * @param {string} TargetType - 类型，Discussion、Experiment、User
 * @param {number} Content - 内容，如有回复需包含回复@
 * @param {string} ReplyID - 被回复的人的ID（如有）
* @returns {Promise<Object>}
 */
module.exports = async function sendMessages(
  TargetID,
  TargetType = "Discussion",
  Content,
  ReplyID = ""
) {
  try {
    const response = await plrequest.post(
      "/Messages/PostComment",
      {
        TargetID,
        TargetType,
        Language: "Chinese",
        ReplyID,
        Content,
        Special: null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "zh-CN",
          // @ts-ignore
          "x-API-Token": this.token,
          // @ts-ignore
          "x-API-AuthCode": this.authCode,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw "发送消息出错";
  }
};
