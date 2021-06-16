var theresult = null;

function searchObj(obj, query) {
    for (var key in obj) {
        if (key === query) {
            theresult = obj[key];
            break;
        }
        var value = obj[key];
        if (typeof value === 'object'){
            searchObj(value, query);
        }
        if (typeof key === 'object'){
            searchObj(key, query);
        } 
    }
    return theresult;
}

module.exports = searchObj;



