var navBarApp  = angular.module( 'navbarApp', [] );
navBarApp.controller( 'navbarController', navBarController );
navBarController.$inject = [ '$scope', '$http', '$log' ];
function navBarController( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.init = function (){
    console.log('PARSE', Parse);
    var currentUser = Parse.User.current();
    if (currentUser) {
        scope.currentuser = currentUser.attributes.username;
    } else {
        //window.location = ('/fisica');
    }
  }
  scope.logOut = function (){
    Parse.User.logOut();
    window.location = ('/fisica');
  }
}