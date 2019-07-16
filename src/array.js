Array.prototype.append = [].push;

Array.prototype.count = function (obj) {
    let ret = 0, index = 0;
    while (index < this.length) {
        if (JSON.stringify(obj) == JSON.stringify(this[index])) {
            ret++;
        }
        index++;
    }
    return ret;
}

Array.prototype.index = [].indexOf;

window.len = function (arr) {
    if ((arr).constructor !== Array) {
        throw TypeError('Parameter has to be Array Type!');
    }
    return arr.length;
}

window.max = function (arr) {
    if ((arr).constructor !== Array) {
        throw TypeError('Parameter has to be Array Type!');
    }
    return Math.max.apply(null, arr);
}

window.min = function (arr) {
    if ((arr).constructor !== Array) {
        throw TypeError('Parameter has to be Array Type!');
    }
    return Math.min.apply(null, arr);
}

window.list = function (arr) {
    let ret = [];
    try {
        ret = Array.from(arr);
    } catch (err) {
        this.console.warn('Can not be changed to Array');
    }
    return ret;
}