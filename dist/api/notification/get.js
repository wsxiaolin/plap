"use strict";
const plrequest = require("../axiosInstance");
/**
 * 获取通知分区的消息
 *
 * @param {number} category_id 消息类型: 0: 全部, 1: 系统邮件, 2: 关注和粉丝, 3:评论和回复 , 4: 作品通知, 5: 管理记录
 * @returns {Promise<Object>}
 */
module.exports = async function getSummary(category_id, take = 20, skip = 0, no_templates = true) {
    const response = await plrequest.post("/Messages/GetMessages", {
        CategoryID: category_id,
        Take: take,
        Skip: skip,
        NoTemplates: no_templates,
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
