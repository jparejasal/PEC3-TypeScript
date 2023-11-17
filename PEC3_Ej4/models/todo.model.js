var Todo = /** @class */ (function () {
    function Todo(_a) {
        var text = _a.text, _b = _a.complete, complete = _b === void 0 ? false : _b;
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    Todo.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return Todo;
}());
export { Todo };
