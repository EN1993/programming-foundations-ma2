// Answeer question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i=0; i < pets.length; i++) {

  var age = pets[i].age;

  var typeAge = pets[i].type + " " + pets[i].age;

  if(age === 4){
  console.log(typeAge);
}
}

// Answeer question 2

function logword(Apple) {
	
	var typeofWord = typeof Apple;

	if(typeofWord === "boolean"){
	console.log(typeofWord);
	}else{
		console.log("Please pass a boolean value in");
	}
}
logword("Apple");

// Answeer question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");

function changeheading(){
	heading.innerHTML = "Updated subheading";
	heading.style.color = "blue"
}
button.onclick = changeheading;
