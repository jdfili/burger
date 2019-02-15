var connection = require("./connection")

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, values, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, values], function(err, result) {
            if (err) throw err;
            cb(result);
        })
     },
    updateOne: function (tableInput, value, where, cb) { 
        var queryString = "UPDATE ?? SET devoured =? WHERE id =?";
        connection.query(queryString, [tableInput, value, where], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
}

module.exports = orm;