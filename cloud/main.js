require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("fisica", function(request, response) {
  console.log('*************', request);
  console.log('*************', req);
  response.success('OK');
});
