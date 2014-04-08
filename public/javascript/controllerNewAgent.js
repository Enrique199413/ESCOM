var newAgentApp  = angular.module( 'agentnewControl', [] );
newAgentApp.controller( 'controllerNewAgent', agentNewControl );
agentNewControl.$inject = [ '$scope', '$http', '$log' ];
function agentNewControl( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.addAgent = function (){
    
    var user = new Parse.User();
    user.set("username", scope.agent.name);
    user.set("password", scope.tmp.passone);
    user.set("email", scope.agent.email);
     
    // other fields can be set just like with Parse.Object
    user.set("phone", scope.agent.phone);
     
    user.save(null, {
      success: function(user) {
        var Agent = Parse.Object.extend("Agent");
        var agent = new Agent();
        agent.set('user',user)
        agent.save(scope.agent).then(function(object) {
          alert("El agente esta en el sistema");
          console.log(scope.agent);
        });
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
    Parse.User.logOut();
  }
}