let btn1=document.querySelector('#clickbtn');
//controlar div 
let showclicks=document.querySelector('#showdata');
//contar
let counter =0;
function printClick() {
	// body...
	counter++;
	console.log("TOCO EL BOTON")
	showclicks.innerHTML="NUMERO DE CLICKS: " + counter;
}
btn1.addEventListener('click', printClick);

