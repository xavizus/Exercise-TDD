const chai = require('chai');
const {encrypt, decrypt} = require('../robber_language');
const should = require('chai').should();

describe('Rövarspråket', () => {
    it('should encrypt to robber language', ()=> {

        let string = 'Bob is cool';

        const shouldBe = 'BoBobob isos cocoolol';

        encrypt(string).should.be.equal(shouldBe);

        encrypt('#Priat').should.be.equal('#PoProriatot');

        encrypt('129128390123!213123').should.be.equal('129128390123!213123');
    });
    it('should decrypt to normal language', ()=>{
        let string = 'Bobobob isos cocoolol';

        const shouldBe = 'Bob is cool';

        decrypt(string).should.be.equal(shouldBe);
        decrypt('129128390123!213123').should.be.equal('129128390123!213123');
    })
});