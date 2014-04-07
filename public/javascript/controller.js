var principalApp  = angular.module( 'AppControl', [] );
principalApp.controller( 'controllerApp', appController );
appController.$inject = [ '$scope', '$http', '$log' ];
function appController( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.init = function(){
    var currentUser = Parse.User.current();
    if (currentUser) {
      window.location = ('/allAgents');
    }
  }
  scope.login = function (){
    console.log('Hola');
    var user = new Parse.User();
    Parse.User.logIn(scope.user.user,scope.user.password, {
      success: function(user) {
        console.log('USUSARIO LOGEADO',user);
        window.location = ('/allAgents');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}