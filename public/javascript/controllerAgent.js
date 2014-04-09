var agentApp  = angular.module( 'agentControl', [] );
agentApp.controller( 'controllerAppAgent', agentControl );
agentControl.$inject = [ '$scope', '$http', '$log' ];
function agentControl( scope, http ,log){
  Parse.initialize("w8l1n7hwOo1aNUN4xiG3K35e9VTydBnixUNHMRml",
    "oKjyvIxJJEsreGUnOiBCjs3nPBcmrtahbp2KySHH");
  scope.agents = [];
  scope.cell = '';
  scope.agent = {
    name:'',
    email:'',
    level:0,
    zonas:[],
    cell:[],
    phone:'',
    AP:'',
    faction:''
  }
  scope.init = function (){
    var Agent = Parse.Object.extend("Agent");
    var query = new Parse.Query(Agent);
    var tmpagent = [];
    query.find().then(function(results) {
      results.forEach(function(a,e){
        var agent = {
          name:a.get('name'),
          level:a.get('level'),
          AP:a.get('AP'),
          faction:a.get('faction')
        }
        tmpagent.push(agent);
      });
      if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
        scope.$apply(function(){
          scope.agents = tmpagent;
        });
      }
    });
  };
  scope.close = function (){
    $('#viewAgent').modal('hide');
  }
  scope.loadAgentinfo = function ( userInfo ){
    var hola = [];
    var Agent = Parse.Object.extend("Agent");
    var query = new Parse.Query(Agent);
    var agentq;
    query.equalTo('name',userInfo.name)
    query.find({
      success: function(results) {
        results.forEach(function(a,e){
          agentq = {
            name:a.get('name'),
            level:a.get('level'),
            AP:a.get('AP'),
            email:a.get('email'),
            phone:a.get('phone'),
            completename:a.get('completename'),
            faction:a.get('faction')
          }
          
          console.log(a.get('name'));
          if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
            scope.$apply(function(){
              scope.userAgent = agentq;
              scope.nameofview = agentq.name;
              $('#viewAgent').modal('show');
              console.log(scope.userAgent);
              console.log(agentq.name);
            });
          }
        });

      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }

    });
  }
}