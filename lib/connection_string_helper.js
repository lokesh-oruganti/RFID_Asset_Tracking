'use strict';
var dictionary_1 = require('./dictionary helper');
var errors_1 = require('./error handler');
var ConnectionString = (function () {
    function ConnectionString() {
    }
    ConnectionString.parse = function (source, requiredFields) {
        var connectionString = dictionary_1.createDictionary(source, ';');
        var err = 'The connection string is missing the property: ';
        requiredFields = requiredFields || [];
        requiredFields.forEach(function (key) {
            if (!(key in connectionString))
                throw new errors_1.ArgumentError(err + key);
        });
        return connectionString;
    };
    return ConnectionString;
}());
exports.ConnectionString = ConnectionString;
