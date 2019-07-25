import { isEqual } from './utils';

// Array.prototype.append = [].push;

Array.prototype.clear = function () {
    // this = [];
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

Array.prototype.pop = function (index = this.length - 1) {
    const rt = this[index];
    this.splice(index, 1);
    return rt;
}

Array.prototype.remove = function (obj) {
    const idx = this.findIndex(el => isEqual(el, obj));
    this.splice(idx, 1);
}

//to do: sort
