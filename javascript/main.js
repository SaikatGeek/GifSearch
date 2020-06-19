/* 1. Grab the input value */



document.querySelector('.js-go').addEventListener('click', function(){
	var input = document.querySelector("input").value;
	// console.log(input);
	api(input);
});

// document.querySelector('.js-userinput').addEventListener('keyup', function(e){
// 	var input = document.querySelector("input").value;
// 	// console.log(input);
// 	api(input);

// 	// if(e.which === 32) {
// 	//     api(input);
// 	// }
// 	// else{
// 	// 	api(input);
// 	// }
// });




/* 2. do the data stuff with the API */
function api(input){
	var url = "https://api.giphy.com/v1/gifs/search?api_key=kz8eR0ElgXlmJXF0rEawbCR22Y9svgdg&q="+ input +"&limit=25&offset=0&rating=R&lang=en";
	var request   = new XMLHttpRequest();
	request.open('GET', url);
	request.send();
	request.addEventListener('load', function(e){
		// var data = e.srcElement.response;
		var data = e.target.response;
		// console.log(data);
		pushToDOM(data);
	});
}







/* 3. Show me the GIFs */
function pushToDOM(input){
	// alert('are we in pushToDOM');
	var input = JSON.parse(input);
	var imgUrls = input.data;
	console.log(imgUrls);
	document.querySelector(".js-container").innerHTML='';
	imgUrls.forEach(function(img){
		var src = img.images.fixed_height.url;
		var container = document.querySelector(".js-container");
		container.innerHTML += "<img src=\""+ src +"\" style = \"padding:10px;\" >";	

	});

	// for (var i = imgUrls.length - 1; i >= 0; i--) {
	// 	var src = imgUrls[i].images.fixed_height.url;
	// 	var container = document.querySelector(".js-container");
	// 	container.appendChild = "<img src=\""+ src +"\" style = \"padding:10px;\" >";	
	// 	console.log("<img src=\""+ src +"\" style = \"padding:10px;\" >");
	// }

	


}
