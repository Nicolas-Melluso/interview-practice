"use strict";
// 10. *Implement a Linked List*;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListIterator = exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head) {
            this.head = head;
            this.tail = head;
            this.length = 1;
        }
    }
    LinkedList.prototype.push = function (value) {
        var newNode = { value: value };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.filter = function (callback) {
        var filteredList = new LinkedList();
        var current = this.head;
        while (current) {
            if (callback(current.value)) {
                filteredList.push(current.value);
            }
            current = current.next;
        }
        return filteredList;
    };
    LinkedList.prototype.visit = function (callback) {
        var current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    };
    LinkedList.prototype.remove = function (value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        var current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (!current.next) {
                    this.tail = current;
                }
                this.length--;
                return;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.merge = function (otherList) {
        if (!otherList.head)
            return;
        if (!this.head) {
            this.head = otherList.head;
            this.tail = otherList.tail;
        }
        else {
            this.tail.next = otherList.head;
            this.tail = otherList.tail;
        }
        this.length += otherList.length;
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    // extra
    LinkedList.prototype.find = function (value) {
        var current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return undefined;
    };
    LinkedList.prototype.get = function (index) {
        var current = this.head;
        var count = 0;
        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }
        return undefined;
    };
    LinkedList.prototype.iterator = function () {
        return new LinkedListIterator(this.head);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList();
var LinkedListIterator = /** @class */ (function () {
    function LinkedListIterator(head) {
        this.current = head;
    }
    LinkedListIterator.prototype.next = function () {
        if (this.current) {
            var value = this.current.value;
            this.current = this.current.next;
            return { value: value, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    };
    return LinkedListIterator;
}());
exports.LinkedListIterator = LinkedListIterator;
