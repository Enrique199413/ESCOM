var name = ['GOLF','HOTEL', 'JULIET','FOXTROT', 'DELTA','ECHO'];
    var salida = [];
    console.log(name.length);
    for(k=0;k<name.length;k++){
      for(i=1;i<6;i++){
        for(j = 0; j<16;j++){
          if(j<=9){
            var cell = {
              name: 'AM0'+i+'-'+name[k]+'-0'+j
            }
          }else{
            var cell = {
              name: 'AM0'+i+'-'+name[k]+'-'+j
            }
          }
          var Cells = Parse.Object.extend("Cells");
          var cells = new Cells();
          cells.save(cell).then(function(object) {
            console.log(object);
          });
        }
      }
    }
    console.log(salida.length);