"use strict";
const plrequest = require("../axiosInstance");
/**
 * 获取作品的详细信息，物实第一次遇到作品会读取本接口
 *
 * @param {Object} id - 查询的作品序列号
 * @param {Object} type - Discussion 或 Experiment
 * @returns {Promise<Object>}
 */
module.exports = async function getDerivatives(id, type) {
    const response = await plrequest.post("/Contents/GetDerivatives", {
        ContentID: id,
        Category: type,
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
