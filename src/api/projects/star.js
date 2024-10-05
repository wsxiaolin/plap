const plrequest = require("../axiosInstance");
/**
 * 收藏作品
 *
 * @param {Object} id - 作品序列号
 * @param {Object} type - Discussion 或 Experiment
 * @param {boolean} status - true为收藏，false为取消
 * @returns {Promise<Object>}
 */
module.exports = async function star(id, type, status) {
  const response = await plrequest.post(
    "/Contents/StarContent",
    {
      ContentID: id,
      Status: status,
      Category: type,
      type: 0,
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
};
