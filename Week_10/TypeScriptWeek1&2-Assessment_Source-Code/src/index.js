var exampleProject = {
    projectId: 1,
    projectName: "Project Chapin",
    assignedEmployees: [],
    status: "In Progress",
    budget: 50000,
};
console.log("Example Project:", exampleProject);
var engineeringDept = ["Engineering", "Priya Shah"];
var departmentName = engineeringDept[0], headOfDepartmentName = engineeringDept[1];
console.log("Department: ".concat(departmentName, ", Head: ").concat(headOfDepartmentName));
// Task 1.5 – Readonly array
var coreTechStacks = ["TypeScript", "React", "Node.js"];
console.log("Core Tech Stacks:", coreTechStacks);
// coreTechStacks.push("GraphQL"); // This would cause a TypeScript error: Property 'push' does not exist on type 'readonly string[]'.
console.log("Error message from attempted push is Property 'push' does not exist on type 'readonly string[]'.");
// Task 2.1 – Function with filtering logic
function filterAvailableEmployees(employees) {
    return employees.filter(function (employee) {
        return employee.skills.indexOf("Frontend") !== -1 && employee.availabilityInHours[1] >= 30;
    });
}
// Task 2.2 – Assign employee with destructuring
function assignEmployeeToProject(project, employee) {
    var existingEmployee = project.assignedEmployees.filter(function (e) { return e.id === employee.id; })[0];
    if (!existingEmployee) {
        project.assignedEmployees.push(employee);
        var name_1 = employee.name, role = employee.role;
        var projectName = project.projectName;
        console.log("Assigning ".concat(name_1, " (").concat(role, ") to project ").concat(projectName, "..."));
    }
}
// Task 2.3 – Function to calculate total max hours
function calculateProjectLoad(project) {
    return project.assignedEmployees.reduce(function (total, emp) { return total + emp.availabilityInHours[1]; }, 0);
}
// Task 2.4 – Log employee info using keyof
function logEmployeeInfo(employee) {
    console.log("\n--- Employee Details (ID: ".concat(employee.id, ") ---"));
    for (var key in employee) {
        var typedKey = key;
        console.log("".concat(typedKey, ": ").concat(employee[typedKey]));
    }
}
// Task 3.1 – Generic function
function getFirstElement(arr) {
    return arr[0];
}
var employeeNames = ["Alice", "Bob", "Charlie"];
var projectIds = [101, 102, 103];
console.log("First Employee Name:", getFirstElement(employeeNames));
console.log("First Project ID:", getFirstElement(projectIds));
// Task 3.2 – TeamManager class
var TeamManager = /** @class */ (function () {
    function TeamManager() {
        this.teamMembers = [];
    }
    TeamManager.prototype.addMember = function (employee) {
        this.teamMembers.push(employee);
        console.log("\n".concat(employee.name, " added to the team."));
    };
    TeamManager.prototype.removeMemberById = function (id) {
        var index = -1;
        for (var i = 0; i < this.teamMembers.length; i++) {
            if (this.teamMembers[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var removed = this.teamMembers.splice(index, 1);
            console.log("\n".concat(removed[0].name, " removed from the team."));
        }
        else {
            console.log("\nEmployee with ID ".concat(id, " not found."));
        }
    };
    TeamManager.prototype.listMembers = function () {
        console.log("\n--- Team Members ---");
        this.teamMembers.forEach(function (emp) { return console.log("".concat(emp.name, " (").concat(emp.role, ")")); });
    };
    return TeamManager;
}());
// Task 3.3 – ProjectTracker class
var ProjectTracker = /** @class */ (function () {
    function ProjectTracker(project) {
        this.project = project;
    }
    ProjectTracker.prototype.updateStatus = function (newStatus) {
        this.project.status = newStatus;
        console.log("\nProject \"".concat(this.project.projectName, "\" status updated to: ").concat(newStatus));
    };
    ProjectTracker.prototype.extendDeadline = function (days) {
        if (!this.project.deadline) {
            this.project.deadline = new Date();
        }
        this.project.deadline.setDate(this.project.deadline.getDate() + days);
        console.log("Project \"".concat(this.project.projectName, "\" deadline extended to: ").concat(this.project.deadline.toDateString()));
    };
    return ProjectTracker;
}());
// Sample usage with example
console.log("\n--- Testing Project Tracker ---");
var projectTracker = new ProjectTracker(exampleProject);
projectTracker.updateStatus("Completed");
projectTracker.extendDeadline(14);
console.log("\nUpdated Project Details:", projectTracker.project);
