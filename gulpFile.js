const {series, parallel} = require('gulp');
function defaultTask(cb) {
    // place code for your default task here
    console.log("series", series, "parallel", parallel);
    cb();
  }
  
  exports.default = defaultTask