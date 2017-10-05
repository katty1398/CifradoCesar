function principal(){
  do{
    var solo_letra=false;
    var respuesta = prompt ("Indique el numero de lo que desea hacer: \n 1) Cifrar \n 2) Descifrar");
      if (respuesta == "1"){
        var sentence = prompt ("ingrese su frase para Cifrar");
        solo_letra = soloLetras(sentence);
        if(solo_letra==true){
          var cifrado = mochila(sentence);
          alert("Su palabra fue: " + sentence + "\n Su cifrado es: " + cifrado);
        }
      }else if (respuesta == "2") {
          var sentence2 = prompt("ingrese su frase para Descifrar");
          solo_letra = soloLetras(sentence2);
           if(solo_letra==true){
            var decifrado = decipher(sentence2);
            alert("Su cifrado es: " + sentence2 + "\nSu palabra fue: " + decifrado);
          }
      }else {
        alert("ingrese una opcion valida");
      }
  }while (respuesta == "" || (respuesta != "1" && respuesta != "2"  || solo_letra==false));
 }




function mochila(bolsa){

     var cifrado_cesar_final="";
     for (var i = 0; i < bolsa.length; i++) {
       var codigo_ascii= bolsa.charCodeAt(i);
       var letra_original = String.fromCharCode(codigo_ascii);

       var min_may = detectarMinMay(codigo_ascii);
       var codigo_cesar_ascii = ((codigo_ascii - min_may + 33) % 26 +min_may);
       var letra_cesar = String.fromCharCode(codigo_cesar_ascii);


       if(codigo_ascii!="32") {
         cifrado_cesar_final=cifrado_cesar_final+letra_cesar;
       } else {
         cifrado_cesar_final=cifrado_cesar_final+" ";
       }
     }
     return cifrado_cesar_final;
   }






   function decipher(parametro){

      var decifrado_cesar_final="";
      for (var i = 0; i < parametro.length; i++) {

        var codigo_ascii_cesar= parametro.charCodeAt(i);
        var letra_original_cesar = String.fromCharCode(codigo_ascii_cesar);


        var min_may = detectarMinMay(codigo_ascii_cesar);
        var codigo_ascii = ((codigo_ascii_cesar - min_may+19) % 26 +min_may);
        var letra_cesar = String.fromCharCode(codigo_ascii);


        if(codigo_ascii_cesar!="32") {
          decifrado_cesar_final=decifrado_cesar_final+letra_cesar;
        } else {
          decifrado_cesar_final=decifrado_cesar_final+" ";
        }
      }
      return decifrado_cesar_final;
    }



    function soloLetras(parametro){

      for (var i=0; i < parametro.length; i++) {
        var letra_ascii = parametro.charCodeAt(i);
        if(letra_ascii >= 48 && letra_ascii <=57){
          alert("usted digito un numero, solo se permiten letras.");
          return false;
        }

        var letra = String.fromCharCode(letra_ascii);
      }

      return true;
    }


    function detectarMinMay(c) {
      var codigo=0;
      if(c>=65 && c<=90) {
        codigo = 65 //solo mayusculas
      } else if(c>=97 && c<=122) {
        codigo = 97 //solo minusculas
      }
      return codigo;
    }


principal();
