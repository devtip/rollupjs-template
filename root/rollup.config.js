// 导入模块
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
  entry: 'src/main.js',
  dest: 'build/bundle.js', // 等同于--output
  format: 'iife',
  moduleName: '{%= MODULENAME %}', // 模块最终暴露的名字
  plugins: [ 
    json()
    ,babel()
    // ,uglify({}, minify) // 开发阶段可将这行代码注释掉
  ],
  globals: {
      jquery : 'jQuery',
      underscore : '_',
      backbone : 'Backbone'
  }
};
