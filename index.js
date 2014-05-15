var yaml = require('js-yaml');
var mu = require('mu2');
var fs = require('fs');

var slid = module.exports;

slid.generateConfigFile = function generateConfigFile(slideNum) {
  var data = '';
  for (var i = 1; i <= slideNum; i++) {
    data = data + 'slide' + i + ':\n';
  }
  fs.writeFileSync('./slides.yml', data);
};

slid.renderTemplate = function renderTemplateAndGenerateFile(slideNum) {
  var fileName = 'slide_' + slideNum + '.html';
  var content = yaml.safeLoad(fs.readFileSync('./slides.yml', 'utf8'));
  this.del();
  mu.root = __dirname + '/template';
  mu.compileAndRender(fileName, content)
    .on('data', function (data) {
      var stream = data.toString();
      console.log(stream);
      fs.writeFileSync(__dirname + '/target/slide.html', stream, {
        flag: 'a'
      });
    });
};

slid.start = function start() {
  var cc = require('child_process');
  var fileName = 'slide.html';

  if ('darwin' === process.platform) {
    cc.exec("open " + __dirname + "/target/" + fileName);
  } else if ('win32' === process.platform) {
    cc.exec("start " + __dirname + "/target/" + fileName);
  } else {
    console.log('sorry,not support your os now!');
  }
};

slid.del = function del() {
  var fileName = 'slide.html';
  fs.unlink(__dirname + '/target/' + fileName, function (err) {
    if (err) throw err;
    console.log('successfully deleted ' + fileName);
  });
};