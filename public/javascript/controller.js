var principalApp  = angular.module( 'AppControl', [] );

principalApp.controller( 'controllerApp', appController );

appController.$inject = [ '$scope', '$http', '$log' ];
function appController( scope, http ,log){
  scope.refresh = function (){
    run(scope.x, scope.y);
  }
}
var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
function run(x,y){
  context.beginPath();
  context.strokeStyle='red';
  context.lineWidth=4;
  context.moveTo(20,100);
  context.quadraticCurveTo(x,10, y, 100);
  context.stroke();
}