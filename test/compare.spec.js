var esformatter = require('esformatter');
var fs          = require('fs');
var plugin      = require('../');
var expect      = require('chai').expect;

describe('compare input/output', function() {

  describe('limit-linebreaks', function() {

    it('should limit linebreaks', function() {
      esformatter.register(plugin);
      var output = esformatter.format(getFile('1.in'), {
        LimitLineBreaks: 3
      });
      expect(output).to.be.eql(getFile('1.out'));
    });
  });
});

function getFile(name) {
  return fs.readFileSync('test/compare/' + name).toString();
}
