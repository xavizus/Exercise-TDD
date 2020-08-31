const chai = require('chai');
const {encrypt, decrypt} = require('../robber_language');
const should = require('chai').should();

describe('Rövarspråket', () => {
    it('should encrypt to robber language', ()=> {

        let string = 'bob is cool';

        const shouldBe = 'bobobob isos cocoolol';

        encrypt(string).should.be.equal(shouldBe);
    });
    it('should decrypt to normal language', ()=>{
        let string = 'bobobob isos cocoolol';

        const shouldBe = 'bob is cool';

        decrypt(string).should.be.equal(shouldBe);
    })
});