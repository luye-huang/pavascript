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
    let rt = 0,
        str = this.slice(start, end),
        lenSub = sub.length;
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

// to do: bytes.decode expandtabs(tabsize=8)

// encode


String.prototype.endsWith = function (sub, start = 0, end = this.length) {
    const str = this.slice(start, end);
    return str.lastIndexOf(sub) == str.length - sub.length;
}

String.prototype.find = function (sub, start = 0, end = this.length) {
    return this.slice(start, end).indexOf(sub);
}

String.prototype.index = function (sub, start = 0, end = this.length) {
    const idx = this.slice(start, end).indexOf(sub);
    if (idx < 0) {
        throw new Error('No such element');
    }
    return idx;
}

String.prototype.isalnum = function () {
    for (let ch of [...this]) {
        if (!/[A-Za-z0-9]/.test(ch)) {
            return false;
        }
    }
    return Boolean(this.length);
}

String.prototype.isalpha = function () {
    for (let ch of [...this]) {
        if (!/[A-Za-z]/.test(ch)) {
            return false;
        }
    }
    return Boolean(this.length);
}

String.prototype.islower = function () {
    for (let ch of [...this]) {
        if (!/[a-z]/.test(ch)) {
            return false;
        }
    }
    return Boolean(this.length);
}

String.prototype.isnumeric = function () {
    if (!Number.isNaN(parseFloat(this)) && String(parseFloat(this)).length == this.length) {
        return true;
    } else {
        return false;
    }
}

String.prototype.isspace = function () {
    return this.includes(' ');
}

//to do
String.prototype.istitle = function () {

}

String.prototype.issuper = function () {
    for (let ch of [...this]) {
        if (!/[A-Z]/.test(ch)) {
            return false;
        }
    }
    return Boolean(this.length);
}

String.prototype.join = function (arr) {
    return arr.join(this);
}

String.prototype.ljust = ''.padEnd;

String.prototype.lower = ''.toLocaleLowerCase;

String.prototype.lstrip = function (str) {
    let idx = 0, idxStr = 0;
    while (idx < this.length) {
        if (this.charAt(idx) == ' ') {
            idx++;
        } else if (this.charAt(idx) == str.charAt(idxStr)) {
            idx++;
            if (idxStr == str.length - 1) {
                idxStr = 0;
            } else {
                idxStr++;
            }
        } else {
            return this.slice(idx - idxStr);
        }
    }
    return this.slice(idx - idxStr);
}

String.prototype.maketrans = function (str1, str2) {
    const dict = {};
    let idx = 0;
    while (idx < str1.length && idx < str2.length) {
        dict[str1.charAt(idx)] = str2.charAt(idx++);
    }
    let rt = '';
    idx = 0;
    while (idx < this.length) {
        const char1 = this.charAt(idx++), char2 = dict[char1];
        if (char2 == undefined) {
            rt += char1;
        } else {
            rt += char2;
        }
    }
    return rt;
}
// String.prototype._replace = String.prototype.replace;
String.prototype.replace = function (str1, str2, max = Infinity) {
    const arr = this.split(str1);
    while (arr.length > 1 && max) {
        arr[0] = arr[0] + str2 + arr[1];
        arr.splice(1, 1);
        max--;
    }
    return arr.length == 1 ? arr[0] : arr.join(str1);
}

String.prototype.rfind = function (str, l = 0, r = this.length) {
    return this.slice(l, r).lastIndexOf(str);
}

String.prototype.rindex = function (str, l = 0, r = this.length) {
    const idx = this.slice(start, end).lastIndexOf(sub);
    if (idx < 0) {
        throw new Error('No such element');
    }
    return idx;
}

String.prototype.rjust = ''.padStart;

String.prototype.rstrip = function (str) {
    let idx = this.length - 1, idxStr = str.length - 1;
    while (idx >= 0) {
        if (this.charAt(idx) == ' ') {
            idx--;
        } else if (this.charAt(idx) == str.charAt(idxStr)) {
            idx--;
            if (idxStr == 0) {
                idxStr = str.length - 1;
            } else {
                idxStr--;
            }
        } else {
            idxStr = str.length - 1 - idxStr;
            return this.slice(0, idx + idxStr + 1);
        }
    }
    idxStr = str.length - 1 - idxStr;
    return this.slice(0, idx + idxStr + 1);
}

const _split = String.prototype.split;
String.prototype.split = function (str, len = this.length) {
    let strTmp = this, idx = strTmp.indexOf(str), strLen = str.length, rt = [];
    while (idx > -1 && len > 0) {
        rt.push(strTmp.slice(0, idx));
        strTmp = strTmp.slice(idx + strLen);
        idx = strTmp.indexOf(str);
        len--;
    }
    rt.push(strTmp);
    return rt;
}

// todo :splitlines



String.prototype.upper = ''.toUpperCase;