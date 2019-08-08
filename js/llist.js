const Node = function (value) {
    this.value = value;
    this.next = null;
}

const Llist = function () {
    this._root = null;
    this._size = 0;
}

Llist.prototype = Object.create(ProtoList.prototype);
Llist.prototype.constructor = Llist;

//---------push---------------------
Llist.prototype.push = function(value) {

    const node = new Node(value);

    if (this._root === null) {
        this._root = node;
    } else {
        let tempNode = this._root;

        while (tempNode.next) {
            tempNode = tempNode.next;
        }

        tempNode.next = node;
    }
    this._size++;

    // console.log('rootAfterPush = ', this._root);
    // console.log('size = ', this._size);

    return this._size;

}
//----------init-----------------
Llist.prototype.init = function(arr) {

    this.root = null;

    if ( arr === null || arr === undefined || arr.length === 0) {
        console.log('Invalid initialization!');
        return this._root;
    }

    for (let i = 0; i < arr.length; i++) {
        this.push(arr[i]);
    };

    return this._root;
}

//---------getSize---------------
Llist.prototype.getSize = function() {

    return this._size;
};

//---------toString--------------
Llist.prototype.toString = function() {

    let tempList = this._root;
    let response = '"Node {';

    if (this._size === 0) {
        return;
    } else if(this._size === 1) {
        return `"Node {value: ${tempList.value}, next: ${tempList.next}}"`;
    }

    while (tempList.next) {
        response += `value: ${tempList.value}, `
        tempList = tempList.next;

        response += tempList.next ?
            `next: {` :
            `next: {value: ${tempList.value}, next: ${tempList.next}}`;
    }

    for (let i = 1; i < this._size - 1; i++) {
        response += `}`;
    }

    return response + '}"';
}

//-------------------------------

const llist = new Llist();

let array = [1, -3, 5, -7, 9];
//let array = undefined;
//console.log('init = ', llist.init(array));
//console.log('push = ',llist.push(77));
// console.log('size = ',llist.getSize());
//console.log('toString = ',llist.toString());

