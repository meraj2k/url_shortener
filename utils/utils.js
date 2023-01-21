const constants = require("./constant.js")

class Utils {
    static generateResponse(res, statusCode, success, message, fields, errors) {
        let response = {
            success: false,
            message: constants.messages.SMTHG_WRNG,
        };
        if (success) response.success = success;
        if (message) response.message = message;
        if (fields) {
            response["data"] = fields;
        }
        if (errors) {
            response["errors"] = errors;
        }

        return res.status(statusCode ? statusCode : 500).send(response);
    }

    static generateId() {
        let dTime = new Date().getTime();
        let genaratedId;
        let rNum = Math.floor(Math.random() * (9 - 1)) + 1;
        genaratedId = "" + rNum + "" + dTime;
        //console.log(rNum);
        return genaratedId;
    }
}

module.exports = Utils;