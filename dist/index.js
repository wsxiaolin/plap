"use strict";
const User = require("./api/index");
const Bot = require("./bot/index.js");
const computation = require("./computation/index.js");
const { setConfig, getConfig } = require("./api/config.js");
module.exports = {
    User,
    Bot,
    computation,
    // @ts-ignore
    setConfig: function (newConfig) {
        setConfig(newConfig);
    },
    getConfig: function () {
        return getConfig();
    }
};
