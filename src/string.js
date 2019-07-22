String.prototype.capitalize = function () {
    const arr = [...this];
    let rt = arr.shift().toUpperCase();
    arr.forEach(a => {
        rt += a.toLowerCase();
    })
    return rt;
}

String.prototype.center = function (width, fillChar) {
    if (this.length >= width) {
        return this;
    }
    let len = Math.floor((width - this.length) / 2);
    let str = '';
    while (str.length < len) {
        str += fillChar;
    }
    str = str.slice(0, len) + this;
    while (str.length < width) {
        str += fillChar;
    }
    return str.slice(0, width);
}

String.prototype.count = function (sub, start = 0, end = this.length) {
    let rt = 0, str = this.slice(start, end), lenSub = sub.length;
    while (true) {
        const idx = str.indexOf(sub);
        if (idx == -1) {
            break;
        }
        rt++;
        str = str.slice(idx + lenSub);
    }
    return rt;
}

// to do: bytes.decode 

// encode


String.prototype.endsWith = function (sub, start = 0, end = this.length) {
    const str = this.slice(start, end);
    return str.lastIndexOf(sub) == str.length - sub.length;
}

String.prototype.find = function () {

}

String.prototype.isnumeric = function () {

}



