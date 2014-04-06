var principalApp  = angular.module( 'AppControl', [] );
principalApp.controller( 'controllerApp', appController );
appController.$inject = [ '$scope', '$http', '$log' ];
function appController( scope, http ,log){
  

  scope.login = function (){
    /*var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });*/
    

    //NEW USERS    
    // other fields can be set just like with Parse.Object
    //user.set("phone", "650-555-0000");
    var user = new Parse.User();
    user.signUp(scope.user,scope.password, {
      success: function(user) {
        window.location.href = ('/user');
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}