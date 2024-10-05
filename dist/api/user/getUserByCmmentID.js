"use strict";
const plrequest = require("../axiosInstance");
/**
 * 根据留言/评论 ID获取评论者详细信息
 *
 * @param {String} ID - 从getComents获取到的Data.Commnets[i].ID例如66aeddf8b833e126e377a5f5
 * @returns {Promise<Object>}
 */
module.exports = async function getMessages(ID) {
    const response = await plrequest.post("Messages/GetMessage", {
        MessageID: ID,
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
