var should = require('should');

var user = {
  name: 'chaos'
};

describe('demo', function () {
  it('demo', function () {
    user.should.have.property('name');
  });
});