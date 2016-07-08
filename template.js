// Grunt template logic

var version = '1.0.0';

var description = exports.description = '一个全新的JavaScript开发流程';

exports.note = '本项目: 1.使用Rollup构建打包模块; 2.使用Uglify生成最终产品代码; 3.使用Qunit测试代码; 4.使用JShint进行代码质量验证';

exports.template = function(grunt, init, done) {
  init.process({}, [

    init.prompt('name', 'rollup_startkit'),
    init.prompt('author', '大神'),
    {
      name: 'MODULENAME',
      message: '你的代码库最终的全局命名空间是(比如jQuery的$)?',
      default: '$/n'
    },
  ], function(err, props) {

    // processing section
    props.MODULENAME = props.MODULENAME.split('/')[0];

    var files = init.filesToCopy(props);

	props.devDependencies =  {
	  "babel-preset-es2015-rollup": "^1.1.1",
	  "qunitjs": "^2.0.0",
    "rollup-watch": "^2.4.0",
    "rollup-plugin-babel": "^2.6.1",
    "rollup-plugin-json": "^2.0.1",
	  "rollup-plugin-uglify": "^1.0.1",
	  "uglify-js": "^2.7.0",
	}

    // package.json meta data
    props.version = version;
    props.description = description;
    props.scripts =  {
      "jshint": "jshint --verbose build/bundle.js --config jshintrc.config.json",
      "build": "rollup -c --watch",
      "start": "live-server --port=52233 --ignore=\"build, node_modules\""
    };

    init.copyAndProcess(files, props); 
    
    // 生成package.json文件
    init.writePackageJSON('package.json', props);

    done();
  });

};
