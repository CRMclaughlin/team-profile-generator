import Employee from '../lib/Employee';

const name = 'Gizmo';
const id = 666292;
const email = 'legiz@giz.omc'

const employee = new Employee(name, id, email)

it('Should get an employee name', () => {
    expect(employee.getName()).toEqual(name)
})

it('Should get an employee ID', () => {
    expect(employee.id).toEqual(id)
})

it('Should get an employee email', () => {
    expect(employee.email).toEqual(email)
})

it('Should have the correct role', () => {
    expect(employee.getRole()).toEqual("Employee")
})



