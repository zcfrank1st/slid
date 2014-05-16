var yaml = require('js-yaml');
var mu = require('mu2');
var fs = require('fs');
var colors = require('colors');

var slid = module.exports;

slid.generateConfigFile = function generateConfigFile(slideNum) {
  var data = '';
  for (var i = 1; i <= slideNum; i++) {
    data = data + 'slide' + i + ':\n';
  }
  fs.writeFileSync(process.cwd() + '/slides.yml', data);
  console.log('config file has generated successfully in the current path, please fill the content in' .green);
};

slid.renderTemplate = function renderTemplateAndGenerateFile(slideNum) {
  var fileName = 'slide_' + slideNum + '.html';
  var content = yaml.safeLoad(fs.readFileSync(process.cwd() + '/slides.yml', 'utf8'));
  if (fs.existsSync(__dirname + '/target/slide.html')) {
    this.del();
  }
  
  var part = 0;
  mu.root = __dirname + '/template';
  mu.compileAndRender(fileName, content)
    .on('data', function (data) {
      var stream = data.toString();
      
      //console.log(stream);
      
      if (!fs.existsSync(__dirname + '/target/')) {
        fs.mkdirSync(__dirname + '/target/');
      }
      fs.writeFileSync(__dirname + '/target/slide.html', stream, {
        flag: 'a'
      });
      console.log('file part ' + part + ' rendered successfully!' .green);
      part = part + 1;
    }); 
};

slid.start = function start() {
  var cc = require('child_process');
  var fileName = 'slide.html';

  if ('darwin' === process.platform) {
    cc.exec("open " + __dirname + "/target/" + fileName);
    console.log('running successfully' .green);
  } else {
    console.log('sorry,not support your os now!' .red);
  }
};

slid.del = function del() {
  var fileName = 'slide.html';
  fs.unlink(__dirname + '/target/' + fileName, function (err) {
    if (err) throw err;
  });
};