import {getPageListWithParent} from '../post-list/page-list-with-parent'
import {WpApiWrapper} from './mock/wpapi'

function execute() {
  let expect = chai.expect

  describe('post-list general', function() {

    let mockWpApi
    before(function() {
      mockWpApi = new WpApiWrapper()
    })

    it('calling getPageListWithParent() with id property', function(done) {
      let zero = 0;
      let s = document.createElement('script')
      s.setAttribute('parentId', 'happy')
      getPageListWithParent(mockWpApi, s).then((data) => {
        expect(data.length).to.be.above(1)
        expect(data[0]).to.have.property('id')
        done() 
      })
    })

    it('calling getPageListWithParent() with slug property', function(done) {
      let zero = 0;
      let s = document.createElement('script')
      s.setAttribute('slug', 'happy')
      getPageListWithParent(mockWpApi, s).then((data) => {
        expect(data.length).to.be.above(0)
        expect(data[0]).to.have.property('id')
        done() 
      }).catch((e) => {done(e)})
    })

    it('calling getPageListWithParent() with name property', function(done) {
      let zero = 0;
      let s = document.createElement('script')
      s.setAttribute('name', 'hello')
      getPageListWithParent(mockWpApi, s).then((data) => {
        expect(data.length).to.be.above(0)
        expect(data[0]).to.have.property('id')
        expect(data[0].title).to.have.property('rendered')
        expect(data[0].title.rendered).to.have.equal('hello')
        done() 
      }).catch((e) => {done(e)})
    })
  })

  describe('my 2nd mocha test', function() {

    it('2nd test (1)', function(done) {
      let zero = 0;
      expect(zero + 1).to.be.equal(1);
      done()
    })

    it('2nd test (2)', function(done) {
      let zero = 1;
      expect(zero + 2).to.be.equal(3);
      done()
    })
  })
}

export const test1 = { 
  execute: execute,
}
