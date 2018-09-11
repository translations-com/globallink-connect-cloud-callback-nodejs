var fs = require('fs');

module.exports = {

    testCallback: {
        handler: function (request, reply) {

            var writeJson={
                hit_time:new Date().getTime(),
                data:retriveData(request.payload)
            }
            fs.appendFile('callback.json',
                JSON.stringify(writeJson) + "\n", function (err) {
                    if (err) throw err;
                    console.log(JSON.stringify(retriveData(request.payload)));

                });
            reply(request.payload);
        }
    }

};

retriveData = function (payload) {
    var data = {};
    if (typeof payload == "string") {
        data = JSON.parse(payload);
    } else if (typeof payload == "object") {
        data = JSON.parse(JSON.stringify(payload));
    } else {
        data = null;
    }
    return data;
};