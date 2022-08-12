const { Employee, Manager, Engineer, Intern } = require('../utils/teamhandler');
const { generateManagers, generateEngineers, generateInterns } = require('../utils/generateHTML');

describe('Employee Class Tests', () => {
    it('Has getName() as entered name.', () => {
        const Mark = new Employee('Mark', 'Mark@email.com', '1', 'Employee');
        expect(Mark.getName()).toBe('Mark')
    })
    it('Has getEmail() as entered email.', () => {
        const Mark = new Employee('Mark', 'Mark@email.com', '1', 'Employee');
        expect(Mark.getEmail()).toBe('Mark@email.com')
    })
    it('Has getId() as entered Employee ID.', () => {
        const Mark = new Employee('Mark', 'Mark@email.com', '1', 'Employee');
        expect(Mark.getId()).toBe('1')
    })
    it('Has a getRole() as Employee.', () => {
        const Mark = new Employee('Mark', 'Mark@email.com', '1', 'Employee');
        expect(Mark.getRole()).toBe('Employee')
    })

})

describe('Manager Class Tests', () => {
    it('Has a getRole() as Manager.', () => {
    const Mark = new Manager('Mark', 'Mark@email.com', '1', 'Manager', 1);
    expect(Mark.getRole()).toBe('Manager')
    })
    it('Has getOfficeNum() as entered office number.', () => {
        const Mark = new Manager('Mark', 'Mark@email.com', '1', 'Manager', 1);
        expect(Mark.getOfficeNum()).toBe(1)
    })
})

describe('Engineer Class Tests', () => {
    it('Has a getRole() as Engineer.', () => {
        const Mark = new Engineer('Mark', 'Mark@email.com', '1', 'Engineer', 'Mark431');
        expect(Mark.getRole()).toBe('Engineer')
    })
    it('Has getGithub() as entered github.', () => {
        const Mark = new Engineer('Mark', 'Mark@email.com', '1', 'Engineer', 'Mark431');
        expect(Mark.getGithub()).toBe('Mark431')
    })
})

describe('Intern Class Tests', () => {
    it('Has a getRole() as Intern.', () => {
        const Mark = new Intern('Mark', 'Mark@email.com', '1', 'Intern', 'UCF');
        expect(Mark.getRole()).toBe('Intern')
    })
    it('Has getSchool() as entered school.', () => {
        const Mark = new Intern('Mark', 'Mark@email.com', '1', 'Intern', 'UCF');
        expect(Mark.getSchool()).toBe('UCF')
    })
})

describe('Manager HTML Test', () => {
    it('Properly write properties of a Manager.', () => {
    const manager1 = ({name: 'Mark', email: 'Mark@email.com', id: '1', role: 'Manager', officeNum: 1});
    expect(generateManagers(manager1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Manager</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Mark</li><li class="list-group-item">Email: <a href="mailto:Mark@email.com">Mark@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Office Number: 1</li></ul></div><br />`)
    })
})

describe('Engineer HTML Test', () => {
    it('Properly write properties of an Engineer.', () => {
    const engineer1 = ({name: 'Mark', email: 'Mark@email.com', id: '1', role: 'Engineer', github: 'Mark431'});
    expect(generateEngineers(engineer1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Engineer</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Mark</li><li class="list-group-item">Email: <a href="mailto:Mark@email.com">Mark@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Github: <a href="https://github.com/Mark431" target="_blank" rel="noopener noreferrer">Mark's GitHub Profile</a></li></ul></div><br />`)
    })
})

describe('Intern HTML Test', () => {
    it('Properly write properties of an Intern.', () => {
    const intern1 = ({name: 'Mark', email: 'Mark@email.com', id: '1', role: 'Intern', school: 'UCF'});
    expect(generateInterns(intern1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Intern</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Mark</li><li class="list-group-item">Email: <a href="mailto:Mark@email.com">Mark@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">School: UCF</li></ul></div><br />`)
    })
})