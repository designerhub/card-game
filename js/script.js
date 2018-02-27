


var inputCardArray=["Vaibhav","Vaibhav","Anil","Anil","Avneet","Avneet","Shiv","Shiv"];

var cardarry = randomMyArray(inputCardArray);

var firstCardValue="";
var secondCardValue="";
var check=true;



var result = "";

for(var i=0; i<cardarry.length; i=i+1){

	var liresult = '<div class="click panel circle" onClick="cardClick('+i+')"><div class="front"><img src="images/card.png" width="190" height="300" alt=""></div><div class="back"><h2>'+cardarry[i]+'</h2> </div></div>'

	result = liresult+result;
	
	if(i==1){
			result = result + "<br>";
	}
}


var element = document.getElementById("cardcontainer");

element.innerHTML=result;


function cardClick(str){

  
   //alert(cardarry[str]);


   if(check){

   	  firstCardValue =cardarry[str];
   	  check=false;
   }else{

     secondCardValue = cardarry[str];

      if(firstCardValue==secondCardValue){

            alert("match");
      }
      else{
         
           alert("Not match");

      }

      check=true;

   }

}