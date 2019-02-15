var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function(cols, values, cb) {
        orm.insertOne("burgers", cols, values, function (res) {
            cb(res);
        })
    },
    update: function (value, id, cb) {
        orm.updateOne("burgers", value, id, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;