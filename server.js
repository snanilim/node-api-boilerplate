var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.fullNames = function (name) {
        return this._fullName;
    };
    return Employee;
}());
var employee = new Employee();
// employee.fullNames = "Bob Smith";
if (employee.fullNames) {
    console.log(employee.fullNames);
}
