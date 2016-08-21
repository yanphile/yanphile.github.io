module.exports = function(grunt) {
  //1 加载模块
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat"); 
  grunt.loadNpmTasks("grunt-contrib-cssmin"); 
  //2 配置任务
  grunt.initConfig({
    concat:{
      concatJs:{
        src : "src/**/*.js",//**无线递归所有目录
        dest: "dest/all.js"
      },
      concatCss:{
        src : "src/**/*.css",//**无线递归所有目录
        dest: "dest/all.css"
      } 
    },
    cssmin:{
      minCss:{
        src : "dest/all.css",//**无线递归所有目录
        dest: "dest/all.min.css"
      } 
    },
    uglify:{
      uglifyjs:{
        src : "dest/all.js",//**无线递归所有目录
        dest: "dest/all.min.js"
      } 
    }
      
  });
  //3 注册任务
  grunt.registerTask("default",["concat","cssmin","uglify"]);
  
};
