var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct meesage object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });

});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {

    var url = generateLocationMessage('me', 1, 1);
    var expected = 'https://www.google.com/maps?q=1,1';

    expect(url.createdAt).toBeA('number');
    expect(url).toInclude({url: expected});

  });
});
