
function execute() {
  let expect = chai.expect

  describe('my 3rd mocha test', function() {

    it('3 test (1)', function(done) {
      let zero = 0;
      expect(zero + 1).to.be.equal(1);
      done()
    })
  })
}

export const test2 = { 
  execute: execute,
}
