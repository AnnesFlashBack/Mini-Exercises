/* the_gifter
By Alexander Svanholm, Anne Gregersen & Frederik Ditlev
April 5th, 2018*/

var url;

//Theese 3 components make up the Url for this exercise
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=PUqaauJNaYNPmnWNsTlYjCo0b99C7bU6&q=";
var query = "" //Users input + the limit (numbers) of pictures loaded

var input; //The input of the user - The content to be searched for
var img;
var images;
var number; //Number of pictures loaded (between 1 and 100)

function setup() {
  noCanvas(); //No canvas is needed for this project

  var button = select('#submit'); //The Search button is created
  button.mousePressed(giphyAsk); //When you press the Search button, "function giphyAsk" gets called

//The sketch file communicates with the html file
  input = select('#keyword'); //Text "Search for GIFs here..."
  images = select('#images');
  number = select('#myRange') //Where the slider is in relation to how many images is shown (between 1 and 100)

}
//function setup ends

function giphyAsk() { //When you press the Search button, this function gets called
  query = input.value() + "&limit=" + number.value(); //The values of input and number are fetched
  url = api + apiKey + query; //The url gets updated
  loadJSON(url, gotData); //The JSON file gets loaded from the url and "function gotData" gets called

  console.log("url: " + url + "  query: " + query)
}
//function giphyAsk ends

function gotData(giphy) {
  images.html("");

  //The images (GIFs) gets created on the screen for every number between 1 and the limit
  for (var i = 0; i < giphy.data.length; i++) {
    img = createImg(giphy.data[i].images.original.url);
    img.size(200, 200);
    images.child(img);
  }


function keyPressed() {
  if(keyCode == 13){ //If "enter" is pressed
  enterPressed();
  }
}
//function keyPressed ends

function enterPressed() {
  query = input.value() + "&limit=" + number.value(); //The values of input and number are fetched
  url = api + apiKey + query; //The url gets updated
  loadJSON(url, gotData); //The JSON file gets loaded from the url and "function gotData" gets called
}
//function enterPressed ends

}
//function gotData ends
