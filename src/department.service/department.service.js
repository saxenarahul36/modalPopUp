"use strict";
class DepartmentService {
    constructor() {
        this._departments = [
            {
                id: 1,
                name: "Sales"
            },
            {
                id: 2,
                name: "IT"
            }
        ];
    }
    getDepartments() {
        return this._departments;
    }
    getDepartment(id) {
        return this._departments.find(v => v.id == id);
    }
}
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map