window.len = function (obj) {
    if (![Array, String].includes((obj).constructor)) {
        throw TypeError('Parameter has to be Array Type!');
    }
    return obj.length;
}

window.max = function (obj) {
    if (![Array, String].includes((obj).constructor)) {
        throw TypeError('Parameter has to be Array Type!');
    } else if ((obj).constructor == Array) {
        return Math.max.apply(null, obj);
    } else if ((obj).constructor == String) {
        const arr = [...obj].sort((a, b) => a.charCodeAt() - b.charCodeAt());
        return arr.pop();
    }
}

window.min = function (obj) {
    if (![Array, String].includes((obj).constructor)) {
        throw TypeError('Parameter has to be Array Type!');
    } else if ((obj).constructor == Array) {
        return Math.min.apply(null, obj);
    } else if ((obj).constructor == String) {
        const arr = [...obj].sort((a, b) => a.charCodeAt() - b.charCodeAt());
        return arr.shift();
    }
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