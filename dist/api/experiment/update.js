"use strict";
const plrequest = require("../axiosInstance");
/**
 * 更新作品
 *
 * @param {Object} s - 更新后的summary，可使用getSummary获取
 * @param {Object} w - workSpace
 * @returns {Promise<Object>}
 */
module.exports = async function update(s, w) {
    const response = await plrequest.post("/Contents/SubmitExperiment", {
        Summary: s,
        Workspace: w,
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "zh-CN",
            // @ts-ignore
            "x-API-Token": this.token,
            // @ts-ignore
            "x-API-AuthCode": this.authCode,
        },
    });
    return response.data;
};
