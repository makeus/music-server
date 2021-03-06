
module.exports = {
    getMetadataFromFilename: function(filename) {
        var fs = require('fs');
        var Promise = require("bluebird");
        var mm = Promise.promisify(require('musicmetadata'));

        return Promise.try(function() {
          return mm(fs.createReadStream(filename))
        });
    }
};
