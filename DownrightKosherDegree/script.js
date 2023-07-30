function addNum(){
  var N1 = parseInt(document.getElementById("N1").value);
  var N2 = parseInt(document.getElementById("N2").value);
  if((!isNaN(N1)) && (!isNaN(N2))){
document.getElementById("Output").innerHTML = N1 + N2; 
  };
};
function splitNum(){
  var Na1 = parseInt(document.getElementById("Na1").value);
  if (Na1 % 2 == 0) {
    document.getElementById("odEv").innerHTML = "Even";
  } else {
    document.getElementById("odEv").innerHTML = "Odd";
  }
}
function doAverage(){    
    var aveArray = document.getElementById("arrayNum").value;  
    var xforms = Array.from(aveArray.split(/[\s,]+/), Number);
  xforms.sort(function(a, b){return b - a});
 xform = xforms.filter(function(number) {
  return number > 0 ;
});
  var xformAv = 0;
  for ( i = 0; i < xform.length; i++) {
   xformAv += xform[i];
    if (xform[i] == 0)
    {
      xform.splice(i,1);      
    }
  };
 var xformOut = xformAv/xform.length;
 document.getElementById("avOut").innerHTML = "The precise Mean is: " + xformOut + "<br>The rounded Mean is: " +  + Math.floor(xformOut);
 document.getElementById("avOut2").innerHTML = "The Smallest Number is: " + xform[xform.length -1]  +"<br>The Largest Number is :"+ xform[0];
// i = parseInt(xform.length)/2
/*                     if (xform.length % 2 == 0){

 //alert("Test"),
   
    
 
   
   a = parseInt(xform.length) / 2,
   Median = xform[a] + xform[a+1] / 2;
   alert("Test2" + Number(a) + Number(a+1) + xform + xform.length + xform.length + Median)
 }else{
   a = parseInt(xform.length) / 2,
   alert("Test3       " + xform.length) 
 }               */
  //  document.getElementById("avOut3").innerHTML = "The Median is :" +  Median  +   
// "    MD1:: " +  "    MD2:: ++ "  + "    a ::" + a ;

/*function myFunk(){
    if (document.getElementById == xform.length){
  alert("xform.length "+ xform.length);
    };
  }*/
   
}    //<-!!!!!!!!!doAverage()END!!!!!!!!!!!!!!!!!
    /*xform.map(modeFinder())
    
    function modeFinder(){}*/
  
  //  document.getElementById("DBG1").innerHTML = "xform.length is: " + xform.length;

/* It was being grouchy, so I made it an alert, instead
function explainIt(){
  document.getElementById("howOut").innerHtml = "The User input is gathered as a string, seperated on spaces, converted to a numerical array, sorted, and divided by the array length. It will actually handle larger amounts automatically." */


/*function modNetter(){
  var xformM = [];
  var modNet = 1;
   var i = 0;
   
 xformM[i] = modNet;
    if (xform[i] == xform[i++]) {
      modNet++, i++;
   }else{
      xformM[i] = 0,
      modNet = 1,
      xformM[i++];  
   
    
    }
  }*/
