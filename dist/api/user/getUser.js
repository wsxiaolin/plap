"use strict";
const plrequest = require("../axiosInstance");
/**
 * 获取用户信息（非当前登录用户）
 *
 * @param {Object} id - 用户序列号
 * @returns {Promise<Object>}
 */
module.exports = async function getUser(id) {
    const response = await plrequest.post("/Users/GetUser", {
        ID: id,
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
