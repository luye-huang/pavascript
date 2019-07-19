import { isEqual } from './utils';

Array.prototype.append = [].push;

Array.prototype.clear = function () {
    this = [];
}

Array.prototype.clear = function () {
    return [...this];
}

Array.prototype.count = function (obj) {
    let ret = 0, index = 0;
    while (index < this.length) {
        if (isEqual(this[index], obj)) {
            ret++;
        }
        index++;
    }
    return ret;
}

Array.prototype.extend = [].push;

Array.prototype.index = [].indexOf;

Array.prototype.insert = function (index, obj) {
    this.splice(index, 0, obj);
}

Array.prototype.remove = function (obj) {
    const idx = this.findIndex(el => isEqual(el, obj));
    this.splice(idx, 1);
}

//to do: sort

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