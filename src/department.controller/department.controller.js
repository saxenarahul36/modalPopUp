"use strict";
var config = require("../app.config.json!");
class DepartmentController {
    constructor($scope, $routeParams, $localStorage, departmentService, $uibModal) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$localStorage = $localStorage;
        this.departmentService = departmentService;
        this.$uibModal = $uibModal;
        this.removeEmployee = (employee) => {
            // Remove employee from $scope
            var scopeIndex = this.$scope.employees.findIndex(v => v == employee);
            this.$scope.employees.splice(scopeIndex, 1);
            // Remove employee from $localStorage
            var storageIndex = this.$localStorage.employees.findIndex(v => v == employee);
            this.$localStorage.employees.splice(storageIndex, 1);
        };
        this.addNew = () => {
            this.$uibModalInstance = this.$uibModal.open({
                animation: config.client.modal.animation,
                size: "",
                scope: this.$scope,
                templateUrl: config.client.modal.templateUrl,
                controller: config.client.modal.controller,
                controllerAs: config.client.modal.controllerAs,
                windowClass: 'fadeInRight animated ',
                resolve: {
                    id: () => {
                        return this.$routeParams.id;
                    }
                }
            });
            this.$uibModalInstance.result.then((name) => {
                if (name) {
                    let employee = { name: name, departmentId: this.$routeParams.id };
                    if (this.$scope.maxAllowedEmployeesForDepartment > this.$scope.employees.length) {
                        this.$scope.employees.push(employee);
                        this.$localStorage.employees.push(employee);
                    }
                }
            });
        };
        this.resetEmployees = () => {
            // Remove all employees from $scope
            this.$scope.employees.splice(0, this.$scope.employees.length);
            // Get all employees from the other departments
            var rest = this.$localStorage.employees.filter(v => {
                return v.departmentId != this.$routeParams.id;
            });
            // $localStorage.employees contains now only employees from the other departments
            this.$localStorage.employees = rest;
        };
        let employees = [];
        if (this.$localStorage.employees) {
            employees = this.$localStorage.employees.filter((v) => v.departmentId === $routeParams.id);
        }
        else {
            this.$localStorage.employees = [];
        }
        $scope.employees = employees;
        $scope.addNew = this.addNew;
        $scope.removeEmployee = this.removeEmployee;
        $scope.resetEmployees = this.resetEmployees;
        let currentDepartment = departmentService.getDepartment($routeParams.id);
        $scope.departmentName = currentDepartment.name;
        $scope.maxAllowedEmployeesForDepartment = config.client.departments.find(v => v.name === currentDepartment.name.toLowerCase()).maxAllowedEmployees;
    }
}
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map