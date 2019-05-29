'use strict';
function createDictionary(source, separator) {
    var dict = {};
    var elems = String(source).split(String(separator));
    elems.forEach(function (elem) {
        var pos = elem.indexOf('=');
        if (pos < 0)
            return;
        var name = elem.substring(0, pos);
        var value = elem.substring(pos + 1);
        if (name && value) {
            dict[name] = value;
        }
    });
    return dict;
}
exports.createDictionary = createDictionary;