"use strict";
class HomeController {
    constructor(departmentService, $scope, $location) {
        this.departmentService = departmentService;
        this.$scope = $scope;
        this.$location = $location;
        this.navigateToDepartment = (id) => {
            this.$location.path(`/department/${id}`);
        };
        $scope.departments = departmentService.getDepartments();
        $scope.navigateToDepartment = this.navigateToDepartment;
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map