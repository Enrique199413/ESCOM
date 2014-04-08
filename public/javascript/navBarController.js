var navBarApp  = angular.module( 'navbarApp', [] );
navBarApp.controller( 'navbarController', navBarController );
navBarController.$inject = [ '$scope', '$http' ];
function navBarController( scope, http ){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  var agentFaction;
  scope.init = function (){
    var currentUser = Parse.User.current();
    if (currentUser) {
        var Agent = Parse.Object.extend("Agent");
        var query = new Parse.Query(Agent);
        query.equalTo('name',currentUser.attributes.username)
        query.find({
          success: function(results) {
            results.forEach(function(a,e){
              agentFaction= a.get('faction');
              if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                scope.$apply(function(){
                  scope.faction = agentFaction;
                });
              }
            });
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
        console.log('FACTION',agentFaction);
        
        scope.currentuser = currentUser.attributes.username;
    } else {
        //window.location = ('/fisica');//REMPLACE WITH MIDELWARE
    }
  }
  scope.logOut = function (){
    Parse.User.logOut();
    window.location = ('/fisica');
  }
}