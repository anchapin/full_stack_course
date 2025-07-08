"use strict";
const exampleProject = {
    projectId: 1,
    projectName: "Project Chapin",
    assignedEmployees: [],
    status: "In Progress",
    budget: 50000,
};
console.log("Example Project:", exampleProject);
const engineeringDept = ["Engineering", "Priya Shah"];
const [departmentName, headOfDepartmentName] = engineeringDept;
console.log(`Department: ${departmentName}, Head: ${headOfDepartmentName}`);
// Task 1.5 – Readonly array
const coreTechStacks = ["TypeScript", "React", "Node.js"];
console.log("Core Tech Stacks:", coreTechStacks);
// coreTechStacks.push("GraphQL"); // This would cause a TypeScript error: Property 'push' does not exist on type 'readonly string[]'.
console.log("Error message from attempted push is Property 'push' does not exist on type 'readonly string[]'.");
// Task 2.1 – Function with filtering logic
function filterAvailableEmployees(employees) {
    return employees.filter((employee) => employee.skills.indexOf("Frontend") !== -1 && employee.availabilityInHours[1] >= 30);
}
// Task 2.2 – Assign employee with destructuring
function assignEmployeeToProject(project, employee) {
    const existingEmployee = project.assignedEmployees.filter((e) => e.id === employee.id)[0];
    if (!existingEmployee) {
        project.assignedEmployees.push(employee);
        const { name, role } = employee;
        const { projectName } = project;
        console.log(`Assigning ${name} (${role}) to project ${projectName}...`);
    }
}
// Task 2.3 – Function to calculate total max hours
function calculateProjectLoad(project) {
    return project.assignedEmployees.reduce((total, emp) => total + emp.availabilityInHours[1], 0);
}
// Task 2.4 – Log employee info using keyof
function logEmployeeInfo(employee) {
    console.log(`\n--- Employee Details (ID: ${employee.id}) ---`);
    for (const key in employee) {
        const typedKey = key;
        console.log(`${typedKey}: ${employee[typedKey]}`);
    }
}
// Task 3.1 – Generic function
function getFirstElement(arr) {
    return arr[0];
}
const employeeNames = ["Alice", "Bob", "Charlie"];
const projectIds = [101, 102, 103];
console.log("First Employee Name:", getFirstElement(employeeNames));
console.log("First Project ID:", getFirstElement(projectIds));
// Task 3.2 – TeamManager class
class TeamManager {
    constructor() {
        this.teamMembers = [];
    }
    addMember(employee) {
        this.teamMembers.push(employee);
        console.log(`\n${employee.name} added to the team.`);
    }
    removeMemberById(id) {
        let index = -1;
        for (let i = 0; i < this.teamMembers.length; i++) {
            if (this.teamMembers[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const removed = this.teamMembers.splice(index, 1);
            console.log(`\n${removed[0].name} removed from the team.`);
        }
        else {
            console.log(`\nEmployee with ID ${id} not found.`);
        }
    }
    listMembers() {
        console.log("\n--- Team Members ---");
        this.teamMembers.forEach((emp) => console.log(`${emp.name} (${emp.role})`));
    }
}
// Task 3.3 – ProjectTracker class
class ProjectTracker {
    constructor(project) {
        this.project = project;
    }
    updateStatus(newStatus) {
        this.project.status = newStatus;
        console.log(`\nProject "${this.project.projectName}" status updated to: ${newStatus}`);
    }
    extendDeadline(days) {
        if (!this.project.deadline) {
            this.project.deadline = new Date();
        }
        this.project.deadline.setDate(this.project.deadline.getDate() + days);
        console.log(`Project "${this.project.projectName}" deadline extended to: ${this.project.deadline.toDateString()}`);
    }
}
// Sample usage with example
console.log("\n--- Testing Project Tracker ---");
const projectTracker = new ProjectTracker(exampleProject);
projectTracker.updateStatus("Completed");
projectTracker.extendDeadline(14);
console.log("\nUpdated Project Details:", projectTracker.project);
