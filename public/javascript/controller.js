var principalApp  = angular.module( 'AppControl', [] );

principalApp.controller( 'controllerApp', appController );

appController.$inject = [ '$scope', '$http', '$log' ];
function appController( scope, http ,log){
  scope.unitis = [];
  scope.varTime = false;
  scope.addTime = function (){
    var id='Insoft';
    do {
      var ascicode=Math.floor((Math.random()*42)+48);
      if (ascicode<58 || ascicode>64){
        id+=String.fromCharCode(ascicode);
      }
    } while (id.length<13);
    var Time = {
        nombre:'Tiempo',
        name:'Time',
        id:id,
        values:[
          {
            abre:'m',
            convertion:5
          },
          {
            abre:'s',
            convertion:3
          },
          {
            abre:'hr',
            convertion:2
          }
        ]
      };
    scope.unitis.push(Time);
    scope.varTime = true;
  }
  scope.valueSelect = function (unit, field){
    $('#'+unit.id).html(field.abre);
    if(scope.unitis.length > 0){
      scope.unitis.forEach(function(a,e){
        if(a.name == 'Time'){
          console.log(a.name);
          a.values.forEach(function(aa,ee){
            console.log(aa);
            switch(aa.abre){
              case 'm':
                console.log(unit.id);
                console.log(aa.convertion);
                console.log($('#'+a.id+'Value').val()*aa.convertion);
                $('#'+a.id+'Value').html($('#'+a.id+'Value').val()*aa.convertion);
              break;
            }
          })
        }
      });
    }
  }
  
  scope.Hola = function (){
    console.log('message');
  }

  var gravity = 9.81;
  scope.refresh = function (){
    scope.result = gravity * scope.b;
  }
}
function run(a,b,c){
  var myGraph = new Graph({
    canvasId: 'myCanvas',
    minX: -10,
    minY: -10,
    maxX: 10,
    maxY: 10,
    unitsPerTick: 1
  });

  /*myGraph.drawEquation(function(x) {
    return j * Math.sin(x);
  }, 'green', 3);*/
  console.log(a+'xx'+b+'x'+c);
  myGraph.drawEquation(function(x) {

    return a*(x * x)+(b*x)+c;
  }, '#FF00FF', 3);

  /*myGraph.drawEquation(function(x) {
    return 1 * x;
  }, 'red', 3);*/
}
function Graph(config) {
  // user defined properties
  this.canvas = document.getElementById(config.canvasId);
  this.minX = config.minX;
  this.minY = config.minY;
  this.maxX = config.maxX;
  this.maxY = config.maxY;
  this.unitsPerTick = config.unitsPerTick;

  // constants
  this.axisColor = '#aaa';
  this.font = '8pt Calibri';
  this.tickSize = 20;

  // relationships
  this.context = this.canvas.getContext('2d');
  this.rangeX = this.maxX - this.minX;
  this.rangeY = this.maxY - this.minY;
  this.unitX = this.canvas.width / this.rangeX;
  this.unitY = this.canvas.height / this.rangeY;
  this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
  this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
  this.iteration = (this.maxX - this.minX) / 1000;
  this.scaleX = this.canvas.width / this.rangeX;
  this.scaleY = this.canvas.height / this.rangeY;

  // draw x and y axis
  this.drawXAxis();
  this.drawYAxis();
}

Graph.prototype.drawXAxis = function() {
  var context = this.context;
  context.save();
  context.beginPath();
  context.moveTo(0, this.centerY);
  context.lineTo(this.canvas.width, this.centerY);
  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  context.stroke();

  // draw tick marks
  var xPosIncrement = this.unitsPerTick * this.unitX;
  var xPos, unit;
  context.font = this.font;
  context.textAlign = 'center';
  context.textBaseline = 'top';

  // draw left tick marks
  xPos = this.centerX - xPosIncrement;
  unit = -1 * this.unitsPerTick;
  while(xPos > 0) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit -= this.unitsPerTick;
    xPos = Math.round(xPos - xPosIncrement);
  }

  // draw right tick marks
  xPos = this.centerX + xPosIncrement;
  unit = this.unitsPerTick;
  while(xPos < this.canvas.width) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit += this.unitsPerTick;
    xPos = Math.round(xPos + xPosIncrement);
  }
  context.restore();
};

Graph.prototype.drawYAxis = function() {
  var context = this.context;
  context.save();
  context.beginPath();
  context.moveTo(this.centerX, 0);
  context.lineTo(this.centerX, this.canvas.height);
  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  context.stroke();

  // draw tick marks
  var yPosIncrement = this.unitsPerTick * this.unitY;
  var yPos, unit;
  context.font = this.font;
  context.textAlign = 'right';
  context.textBaseline = 'middle';

  // draw top tick marks
  yPos = this.centerY - yPosIncrement;
  unit = this.unitsPerTick;
  while(yPos > 0) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit += this.unitsPerTick;
    yPos = Math.round(yPos - yPosIncrement);
  }

  // draw bottom tick marks
  yPos = this.centerY + yPosIncrement;
  unit = -1 * this.unitsPerTick;
  while(yPos < this.canvas.height) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit -= this.unitsPerTick;
    yPos = Math.round(yPos + yPosIncrement);
  }
  context.restore();
};

Graph.prototype.drawEquation = function(equation, color, thickness) {
  var context = this.context;
  context.save();
  context.save();
  this.transformContext();

  context.beginPath();
  context.moveTo(this.minX, equation(this.minX));

  for(var x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
    context.lineTo(x, equation(x));
  }

  context.restore();
  context.lineJoin = 'round';
  context.lineWidth = thickness;
  context.strokeStyle = color;
  context.stroke();
  context.restore();
};

Graph.prototype.transformContext = function() {
  var context = this.context;

  // move context to center of canvas
  this.context.translate(this.centerX, this.centerY);

  /*
   * stretch grid to fit the canvas window, and
   * invert the y scale so that that increments
   * as you move upwards
   */
  context.scale(this.scaleX, -this.scaleY);
};