const Node1 = function(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

const Llist1 = function () {
    this._start = null;
    this._end = null;
    this._size = 0;
}

Llist1.prototype = Object.create(ProtoList.prototype);
Llist1.prototype.constructor = Llist1;

//-----------getSize---------------------
Llist1.prototype.getSize = function () {
    return this._size;
};

//-----------push------------------------
Llist1.prototype.push = function (value) {
    const node1 = new Node1(value);

    if (this._start === null) {
        this._start = node1;
    } else {
        let tempNode = this._start;

        while (tempNode.next) {
            tempNode = tempNode.next;
        }

        tempNode.next = node1;
        node1.prev = tempNode;
    }
    this._size++;

    return this._size;

};

//-----------init------------------------
Llist1.prototype.init = function (arr) {
    this.root = null;

    if ( arr === null || arr === undefined || arr.length === 0) {
        console.log('Invalid initialization!');
        return this._root;
    }

    for (let i = 0; i < arr.length; i++) {
        this.push(arr[i]);
    };

    return this._start;
};

//-----------toString------------------------
Llist1.prototype.toString = function () {

    let response = '"Node {';
    let tempList = this._start;
    let prevList = this._start;

    if (this._size === 0) {
        return;
    } else if(this._size === 1) {
        return `"Node {value: ${tempList.value}, prev: ${tempList.prev}, next: ${tempList.next}}"`;
    }

    while (tempList) {
        response += `value: ${tempList.value}, prev: ${prevList.value}, `
        prevList = tempList;
        tempList = tempList.next;

        response += tempList ?
            `next: {` :
            `next: {value: ${prevList.next}, prev: ${prevList.value}, next: null`;
    }

    for (let i = 1; i < this._size; i++) {
        response += `}`;
    }

    return response + '}"';
};

//----------toArray--------------------
Llist1.prototype.toArray = function () {
    let toArray = [];
    let tempNode = this._start ? this._start : undefined;

    for (let i = 0; i < this._size; i++) {
        toArray[i] = tempNode.value;
        tempNode = tempNode.next;
    }

    return toArray;
};

//------------------------------

const llist1 = new Llist1();
let ar = [111, 555, 999];

//console.log('-----llist1--------');

// console.log('init = ', llist1.init(ar));
// console.log('push = ', llist1.push(777).toString());
// console.log('string = ', llist1.toString());
// console.log('array = ', llist1.toArray());
