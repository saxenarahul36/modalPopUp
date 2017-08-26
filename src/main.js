"use strict";
const angular = require("angular");
require("ngSanitize");
require("ngRoute");
require("ngStorage");
require("ngAnimate");
require("ngTouch");
require("angular-ui-bootstrap");
const home_controller_1 = require("./home.controller/home.controller");
const department_controller_1 = require("./department.controller/department.controller");
const department_service_1 = require("./department.service/department.service");
const employee_modal_controller_1 = require("./employee.modal.controller/employee.modal.controller");
const routes_1 = require("./routes");
var app;
(function (app_1) {
    "use strict";
    var app = angular.module("app", ["ngSanitize", "ngRoute", "ngStorage", "ngAnimate", "ngTouch", "ui.bootstrap"])
        .controller("homeController", home_controller_1.HomeController)
        .controller("departmentController", department_controller_1.DepartmentController)
        .controller("employeeModalController", employee_modal_controller_1.EmployeeModalController)
        .factory("departmentService", [department_service_1.DepartmentService]);
    routes_1.registerRoutesFor(app);
    app_1.angularModule = app;
})(app = exports.app || (exports.app = {}));
//# sourceMappingURL=main.js.map