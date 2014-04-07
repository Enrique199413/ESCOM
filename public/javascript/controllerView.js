var viewApp  = angular.module( 'viewControlApp', [] );
viewApp.controller( 'controllerAppview', viewControl );
viewControl.$inject = [ '$scope', '$http', '$log' ];
function viewControl( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.agent = [];
  scope.init = function ( username ){
    var Agent = Parse.Object.extend("Agent");
    var query = new Parse.Query(Agent);
    var hola = [];
    query.equalTo('name',username)
    query.find({
      success: function(results) {
        results.forEach(function(a,e){
          var agentq = {
            name:a.get('name'),
            level:a.get('level'),
            AP:a.get('AP')
          }
          console.log(a.get('name'));
          agent.push(agentq);
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    
  };
}