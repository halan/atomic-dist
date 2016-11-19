const expect = require('chai').expect;
const distribution = require('../distribution');


describe('Distribution', () =>
         it('should order electrons', () =>
            expect(distribution(
              [
                ['1s2'],
                ['2s2', '2p6'],
                ['3s2', '3p6', '3d10'],
                ['4s2', '4p6', '4d10', '4f14'],
                ['5s2', '5p6', '5d10', '5f14'],
                ['6s2', '6p6', '6d10'],
                ['7s2', '7p6']
              ]
            )).to.be.deep.equal(
              ["1s2","2s2","2p6","3s2","3p6","4s2","3d10","4p6","5s2","4d10",
               "5p6","6s2","4f14","5d10","6p6","7s2","5f14","6d10","7p6"]
            )
           )
        )
