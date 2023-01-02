const Employee= require('../lib/Employee') ;

const name = 'Scottie';
const id = 666292;
const email = 'scottie@test.com'

const employee = new Employee(name, id, email)

describe('Creates an employee object', () => {

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
})




