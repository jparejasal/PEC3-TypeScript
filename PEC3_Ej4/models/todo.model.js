/**
 * @class Model
 *
 * Manages the data of the application.
 */
var Todo = /** @class */ (function () {
    function Todo(_a) {
        var _b = _a === void 0 ? { complete: false } : _a, text = _b.text, complete = _b.complete;
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    Todo.prototype.uuidv4 = function () {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
        });
    };
    return Todo;
}());
