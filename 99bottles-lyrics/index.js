console.log('Hello World');

var name="test";
console.log("beer on the wall " + name);

var prime=[1,2,3,4,5,6,7,8,9,10];
for(var i=0; i<10; i++){
    console.log(prime[i]); 
};

if (i<10) {console.log("beer on the wall");

};

var text = "";
var i = 99;
while (i > 0) {
    text += [i + " bottles of beer on the wall", 
    i + " bottles of beer." , "Take one down and pass it around", 
    i - "bottles of beer on the wall." ]; 
    i--;
    
};

console.log(text);

document.getElementById('mylyrics').innerHTML = text;