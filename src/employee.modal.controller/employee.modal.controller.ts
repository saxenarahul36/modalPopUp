export class EmployeeModalController {
    constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
         private $scope: IEmployeeModalControllerScope, private id: number
        
        ) {
        $scope.submit = this.submit;
        $scope.cancel = this.cancel;
    }

    submit = (form: angular.IFormController) => {
        if (form.$valid) {
           
           
            this.$uibModalInstance.close(this.$scope.name);
            form.$setPristine();
            this.$scope.name = "";
            $('.fadeInRight').removeClass('fadeInRight animated').addClass("flipOutY animated ");
        }
    }

    cancel = () => {
        $('.fadeInRight').removeClass('fadeInRight animated').addClass("bounceOutRight animated ");
        this.$uibModalInstance.dismiss("cancel");
    }
}