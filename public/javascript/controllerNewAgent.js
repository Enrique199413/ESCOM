var newAgentApp  = angular.module( 'agentnewControl', [] );
newAgentApp.controller( 'controllerNewAgent', agentNewControl );
agentNewControl.$inject = [ '$scope', '$http', '$log' ];
function agentNewControl( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.states = [];
  scope.cells = [];
  scope.agent={
    zones:[],
    cells:[]
  }
  scope.temporalzones =[];
  scope.temporalcells =[];
  scope.init = function(){

  }
  scope.loadZones = function(){
    var states = Parse.Object.extend("states");
    var query = new Parse.Query(states);
    var tmpstate = [];
    return query.find().then(function(results) {
      results.forEach(function(a,e){
        var state = {
          value:a.get('state')
        }
        tmpstate.push(state.value);
      });
      scope.states = tmpstate;
    });
  }
  scope.loadCells = function(){
    var cells = Parse.Object.extend("Cells");
    var query = new Parse.Query(cells);
    var tmpcell = [];
    query.limit(480);
    query.find().then(function(results) {
      console.log(results);
      results.forEach(function(a,e){
        var cell = {
          value:a.get('name')
        }
        tmpcell.push(cell.value);
      });
      scope.cells = tmpcell;
    });
  }
  scope.removeZone = function( index ){
    scope.temporalzones.splice( index, 1 );
    scope.agent.zones.splice(index);
  }
  scope.removeCell = function( index ){
    scope.temporalcells.splice( index, 1 );
    scope.agent.cells.splice(index);
  }
  scope.addZone = function( tozone ){
    scope.temporalzones.push(tozone);
    scope.agent.zones.push(tozone);
  }
  scope.addCell = function( tocell ){
    scope.temporalcells.push(tocell);
    scope.agent.cells.push(tocell);
  }
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