const Alist = function () {
    this.array = [];
}

Alist.prototype = Object.create(ProtoList.prototype);
Alist.prototype.constructor = Alist;

//----------init-----------------
Alist.prototype.init = function(arr) {

    if ( arr === null || arr === undefined) {
        console.log ("Invalid initialization!");
        return
    } else {
        arr.forEach((item, i, arr) => this.array[i] = item);
    }

    return this.array;
}

//---------getSize---------------
Alist.prototype.getSize = function() {

    let i=0;
    this.array.forEach(() => i++);

    return i;
}

//---------toString--------------
Alist.prototype.toString = function() {

    let response = '"[';

    this.array.forEach(item => response += `${item}, `);

    response = this.getSize() ? response.slice(0, -2) : response;

    return response += ']"';
}

//--------push-------------------
Alist.prototype.push = function(el) {

    this.array[this.getSize()] = el;
    console.log('array =', this.array);

    return this.getSize();
}

//--------pop--------------------
Alist.prototype.pop = function() {

    if(this.array === undefined || this.array === null) {
        return;
    }

    let lastEl = !this.getSize() ? undefined : this.array[this.getSize()-1];

    if (this.getSize()) {
        this.array.length = this.getSize() - 1;
    }
    console.log('array =', this.array);

    return lastEl;
}

//---------shift------------------
Alist.prototype.shift = function() {

    if(this.array === undefined || this.array === null) {
        return;
    }

    let firstEl = !this.getSize() ? undefined : this.array[0];

    for (let i = 0; i < this.getSize()-1; i++) {
        if (this.getSize() && i === this.getSize() - 1) {
            break;
        }
        this.array[i] = this.array[i + 1];
    }
    if(this.getSize()) {
        this.array.length = this.getSize()-1;
    }
    console.log('array =', this.array);

    return firstEl;
}

//------------unshift-------------
Alist.prototype.unshift = function(el) {

    if(this.array === undefined || this.array === null) {
        return;
    }

    let n = this.getSize();

    for (let i = 0; i < n; i++) {
        this.array[n - i] = this.array[n - i - 1];
    }
    this.array[0] = el;

    return this.getSize();
}

//-----------slice----------------
Alist.prototype.slice = function(...args) {

    let n = this.getSize();
    let argLength = args.length;
    let start, end;
    let k = 0;
    let resultArr = [];

    if (argLength === 0 || argLength === 1 && args[0] === 0) {
        return this.array;
    } else if (argLength === 1 && args[0] <= n -1) {
        start = args[0];
        end = n - 1;
    } else if (args[1] >= n - 1) {
        start = args[0];
        end = n - 1;
    } else if (args[0] > args[1] || n === 0 || args[0] > n - 1) {
        return [];
    } else {
        start = args[0];
        end = args[1] - 1;
    };

    for (let i = start; i <= end; i++) {
        resultArr[k] = this.array[i];
        k++;
    };

    return resultArr;
}

//----------splice----------------
Alist.prototype.splice = function(...args) {

    let n = this.getSize();
    let argLength = args.length;
    let start = args[0];
    let delta = args[1];
    let elem = args[2];
    let end = start + delta - 1;
    let k = 0;
    let resultArr = [];

    if (argLength === 0) {
        return [];
    } else if (args[0] > n - 1 ||n === 0) {
        return [];
    } else if (argLength === 1 && args[0] === 0) {
        return this.array;
    } else if (argLength === 1 && args[0] <= n -1) {
        start = args[0];
        end = n - 1;
    } else if (argLength === 2 &&
        args[0] <= n -1 &&
        args[0] + args[1] - 1 < n - 1) {
        start = args[0];
        end = args[0] + args[1] - 1;
    } else if (argLength === 2 &&
        args[0] <= n -1 &&
        args[0] + args[1] - 1 >= n - 1) {
        start = args[0];
        end = n - 1;
    }

    for (let i = start; i <= end; i++) {
        resultArr[k] = this.array[i];
        this.array[i] = this.array[i + args[1]];
        k++;
    }

    // array.length = args[1] ? n - args[1] : args[0];

    if (argLength >=3 && args[0] < n - 1) {

        for (let i = start; i <= end; i++) {
            this.array[n - i] = this.array[n - i - 1];
        }

        this.array[start] = elem;
    }

    return resultArr;
}

//-------------- get------------------------
Alist.prototype.get = function(index) {

    let n = this.getSize();
    let resEl;

    if (index === undefined || index === null || !n | index > n - 1 || index < 0) {
        return;
    }

    this.array.forEach((item, i) => {
        if (i === index) {
            resEl = item;
        }
    });

    return resEl;
};

//-------------- set------------------------
Alist.prototype.set = function(index, elem) {

    let n = this.getSize();

    if (index === undefined || index === null || !n | index > n - 1 || index < 0) {
        return;
    }

    this.array.forEach((item, i) => {
        if (i === index) {
            this.array[i] = elem;
        }
    });

    return this.array;
};


const testArray = [15, 1, 2, 34];

const alist = new Alist();

//console.log('init =', alist.init(testArray));

//console.log('toString =', alist.toString());
//console.log('getSize =', alist.getSize());
// console.log('push =', alist.push(10));
// console.log('push =', alist.push(12));
//
// console.log('pop =', alist.pop());
// console.log('shift =', alist.shift());
// console.log('unshift =', alist.unshift(undefined));

// console.log('slice =', alist.slice(1,3));
// console.log('slice =', alist.slice(1,4,5));
// console.log('slice =', alist.slice(2));
// console.log('slice =', alist.slice(0));
// console.log('slice =', alist.slice(10,4));
// console.log('slice =', alist.slice(1,0));
// console.log('slice =', alist.slice(11,12));
// console.log('slice =', alist.slice(11,1));

//console.log('------------------------------');

// console.log('splice =', alist.splice(0));
// console.log('splice =', alist.splice());
// console.log('splice =', alist.splice(10));
// console.log('splice =', alist.splice(2));
// console.log('splice =', alist.splice(1,3,777));
// console.log('splice =', alist.splice(2,5, 888));
// console.log('splice =', alist.splice(4, 9, 999));
// console.log('splice =', alist.splice(0, 23, 1000));

//console.log('------------------------------');

// console.log('get =', alist.get(2));
// console.log('set =', alist.set(3, 777));
