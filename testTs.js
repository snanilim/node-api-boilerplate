/* let hello: string;
let newNum: boolean;

hello = 'asde';
newNum = '124';

console.log(hello); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("hello " + this.name);
    }
    User.prototype.register = function (boi) {
        console.log(this.name + " your new boi is " + boi);
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " please pay bill");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
// const nilim = new User('nilim', 'email', 12);
// nilim.register('mughol');
var nilim = new Member(123, 'nilim', 'email', 12);
nilim.payInvoice();
