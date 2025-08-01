// Task 1.1 – Union of string literals
type ProjectStatus = "Not Started" | "In Progress" | "Completed" | "On Hold";


// Task 1.2 – Employee interface with tuple and readonly
interface Employee {
    readonly id: number;
    name: string;
    role: string;
    skills: string[];
    availabilityInHours: [number, number];
}


// Task 1.3 – Project interface with optional and index signature
interface Project {
    projectId: number;
    projectName: string;
    assignedEmployees: Employee[];
    status: ProjectStatus;
    deadline?: Date;
    [key: string]: any;
}

const exampleProject: Project = {
    projectId: 1,
    projectName: "Project Chapin",
    assignedEmployees: [],
    status: "In Progress",
    budget: 50000,
};
console.log("Example Project:", exampleProject);


// Task 1.4 – Tuple and destructuring
type Department = [string, string];
const engineeringDept: Department = ["Engineering", "Priya Shah"];
const [departmentName, headOfDepartmentName] = engineeringDept;
console.log(`Department: ${departmentName}, Head: ${headOfDepartmentName}`);


// Task 1.5 – Readonly array
const coreTechStacks: readonly string[] = ["TypeScript", "React", "Node.js"];
console.log("Core Tech Stacks:", coreTechStacks);
// coreTechStacks.push("GraphQL"); // This would cause a TypeScript error: Property 'push' does not exist on type 'readonly string[]'.
console.log("Error message from attempted push is Property 'push' does not exist on type 'readonly string[]'.");

// Task 2.1 – Function with filtering logic
function filterAvailableEmployees(employees: Employee[]): Employee[] {
    return employees.filter(
        (employee) =>
            employee.skills.indexOf("Frontend") !== -1 && employee.availabilityInHours[1] >= 30
    );
}

// Task 2.2 – Assign employee with destructuring
function assignEmployeeToProject(project: Project, employee: Employee) {
    const existingEmployee = project.assignedEmployees.filter((e) => e.id === employee.id)[0];
    if (!existingEmployee) {
        project.assignedEmployees.push(employee);
        const { name, role } = employee;
        const { projectName } = project;
        console.log(`Assigning ${name} (${role}) to project ${projectName}...`);
    }
}

// Task 2.3 – Function to calculate total max hours
function calculateProjectLoad(project: Project): number {
    return project.assignedEmployees.reduce((total, emp) => total + emp.availabilityInHours[1], 0);
}

// Task 2.4 – Log employee info using keyof
function logEmployeeInfo(employee: Employee) {
    console.log(`\n--- Employee Details (ID: ${employee.id}) ---`);
    for (const key in employee) {
        const typedKey = key as keyof Employee;
        console.log(`${typedKey}: ${employee[typedKey]}`);
    }
}


// Task 3.1 – Generic function
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const employeeNames = ["Alice", "Bob", "Charlie"];
const projectIds = [101, 102, 103];
console.log("First Employee Name:", getFirstElement(employeeNames));
console.log("First Project ID:", getFirstElement(projectIds));


// Task 3.2 – TeamManager class
class TeamManager {
    private teamMembers: Employee[] = [];

    addMember(employee: Employee): void {
        this.teamMembers.push(employee);
        console.log(`\n${employee.name} added to the team.`);
    }

    removeMemberById(id: number): void {
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
        } else {
            console.log(`\nEmployee with ID ${id} not found.`);
        }
    }

    listMembers(): void {
        console.log("\n--- Team Members ---");
        this.teamMembers.forEach((emp) => console.log(`${emp.name} (${emp.role})`));
    }
}


// Task 3.3 – ProjectTracker class
class ProjectTracker {
    constructor(public project: Project) {}

    updateStatus(newStatus: ProjectStatus): void {
        this.project.status = newStatus;
        console.log(`\nProject "${this.project.projectName}" status updated to: ${newStatus}`);
    }

    extendDeadline(days: number): void {
        if (!this.project.deadline) {
            this.project.deadline = new Date();
        }
        this.project.deadline.setDate(this.project.deadline.getDate() + days);
        console.log(
            `Project "${this.project.projectName}" deadline extended to: ${this.project.deadline.toDateString()}`
        );
    }
}


// Sample usage with example
console.log("\n--- Testing Project Tracker ---");
const projectTracker = new ProjectTracker(exampleProject);

projectTracker.updateStatus("Completed");
projectTracker.extendDeadline(14);

console.log("\nUpdated Project Details:", projectTracker.project);
