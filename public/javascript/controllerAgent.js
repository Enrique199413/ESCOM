var agentApp  = angular.module( 'agentControl', [] );
agentApp.controller( 'controllerAppAgent', agentControl );
agentControl.$inject = [ '$scope', '$http', '$log' ];
function agentControl( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.agents = [];
  scope.agent = {
    name:'',
    email:'',
    level:0,
    zonas:[],
    cell:[],
    phone:''
  }
  scope.ini = function (){
    var Agent = Parse.Object.extend("Agent");
    var query = new Parse.Query(Agent);
    var hola = [];
    query.select("name", "level");
    query.find().then(function(results) {
      results.forEach(function(a,e){
        var agent = {
          name:a.get('name'),
          level:a.get('level')
        }
        console.log(a.get('name'));
        hola.push(agent);
      });
    });
    scope.agents = hola;
  };
  scope.addAgent = function (){
    var Agent = Parse.Object.extend("Agent");
    var agent = new Agent();
    agent.save(scope.agent).then(function(object) {
      alert("El agente esta en el sistema");
    });
    
    var user = new Parse.User();
    user.set("username", scope.agent.name);
    user.set("password", scope.agent.passone);
    user.set("email", scope.agent.email);
     
    // other fields can be set just like with Parse.Object
    user.set("phone", scope.agent.phone);
     
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}