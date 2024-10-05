const getSummary = require("../projects/getSummary");
const plrequest = require("../axiosInstance");
/**
 * 获取实验存档
 *
 * @param {String} id - 作品序列号
 * @param {String} type - Discussion 或 Experiment
 * @returns {Promise<Object>}
 */
module.exports = async function getExperiment(id, type) {
  this._getSummary = getSummary.bind(this);
  const Summary = await this._getSummary(id, type);
  // @ts-ignore
  const ContentID = Summary.Data.ContentID;
  const response = await plrequest.post(
    "/Contents/GetExperiment",
    {
      ContentID,
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
