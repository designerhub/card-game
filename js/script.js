

var cardarry=["Card1","Card1","Card2","Card2"];

var start = "<ul>";
var end = "</ul>";
var result = "";

for(var i=0; i<cardarry.length; i=i+1){

	var liresult = '<span class="cardlist">'+cardarry[i]+'</span>';

	result = liresult+result;
	
	if(i==1){
			result = result + "<br>";
		}
}




var element = document.getElementById("cardcontainer");

element.innerHTML=result;