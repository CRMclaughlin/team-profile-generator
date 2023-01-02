const Manager = require('../lib/Manager')

const name = 'Elizabeth';
const id = 7262394;
const email = 'liz@test.com';
const officeNumber = 8891;

const manager = new Manager(name, id, email, officeNumber);

describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(manager.name).toEqual(name)
    })

    it('Should get an manager ID', () => {
        expect(manager.id).toEqual(id)
    })

    it('Should get an manager email', () => {
        expect(manager.email).toEqual(email)
    })

    it('Should have the correct office number', () => {
        expect(manager.officeNumber).toEqual(officeNumber)
    })

    it('Should have the correct role', () => {
        expect(manager.getRole()).toEqual("Manager")
    })
})

