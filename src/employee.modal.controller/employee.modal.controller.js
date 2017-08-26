"use strict";
class EmployeeModalController {
    constructor($uibModalInstance, $scope, id) {
        this.$uibModalInstance = $uibModalInstance;
        this.$scope = $scope;
        this.id = id;
        this.submit = (form) => {
            if (form.$valid) {
                this.$uibModalInstance.close(this.$scope.name);
                form.$setPristine();
                this.$scope.name = "";
                $('.fadeInRight').removeClass('fadeInRight animated').addClass("flipOutY animated ");
            }
        };
        this.cancel = () => {
            $('.fadeInRight').removeClass('fadeInRight animated').addClass("bounceOutRight animated ");
            this.$uibModalInstance.dismiss("cancel");
        };
        $scope.submit = this.submit;
        $scope.cancel = this.cancel;
    }
}
exports.EmployeeModalController = EmployeeModalController;
//# sourceMappingURL=employee.modal.controller.js.map