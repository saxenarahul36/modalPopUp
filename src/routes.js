"use strict";
var config = require("./app.config.json!");
require("angular");
function registerRoutesFor(app) {
    "use strict";
    app.config(($routeProvider, $locationProvider) => {
        $locationProvider.html5Mode(config.client.html5Mode);
        let home = config.client.routes.find(v => v.controller === "homeController");
        let department = config.client.routes.find(v => v.controller === "departmentController");
        $routeProvider
            .when(home.path, {
            templateUrl: home.templateUrl,
            controller: home.controller
        })
            .when(department.path, {
            templateUrl: department.templateUrl,
            controller: department.controller
        })
            .otherwise({
            redirectTo: config.client.basePath
        });
    });
}
exports.registerRoutesFor = registerRoutesFor;
//# sourceMappingURL=routes.js.map