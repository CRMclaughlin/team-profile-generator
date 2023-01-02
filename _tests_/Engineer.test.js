const Engineer = require('../lib/Engineer')

const name = 'Chris';
const id = '34252432';
const email = 'chris@test.com';
const github = 'https://github.com/test'

const engineer = new Engineer(name, id, email, github);

describe('Creates an Engineer object', () => {

    it('Should get an Engineer name', () => {
        expect(engineer.name).toEqual(name)
    })

    it('Should get an Engineer ID', () => {
        expect(engineer.id).toEqual(id)
    })

    it('Should get an Engineer email', () => {
        expect(engineer.email).toEqual(email)
    })

    it('Should have the correct github', () => {
        expect(engineer.github).toEqual(github)
    })
    
    it('Should have the correct role', () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })
})