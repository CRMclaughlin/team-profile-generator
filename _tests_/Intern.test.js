const Intern = require('../lib/Intern');

const name = 'Gizmo';
const id = 3453088;
const email = 'legiz@test.com';
const school = 'Test University';

const intern = new Intern(name, id, email, school);

describe('Creates an Itern object', () => {

    it('Should get an Itern name', () => {
        expect(intern.name).toEqual(name)
    })

    it('Should get an Itern ID', () => {
        expect(intern.id).toEqual(id)
    })

    it('Should get an Itern email', () => {
        expect(intern.email).toEqual(email)
    })

    it('Should have the correct school', () => {
        expect(intern.school).toEqual(school)
    })

    it('Should have the correct role', () => {
        expect(intern.getRole()).toEqual("Intern")
    })
})
