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

console.log('Sing along 99 bootles of beer !');
const totalNoOfbeers = 100;
var noOfBeers = totalNoOfbeers;
var result = '';

while(noOfBeers > 0){
    noOfBeers--;
    var beerword = `${noOfBeers-1}`;
    if(noOfBeers == 1){
        beerword = 'no more';
    }
    console.log(noOfBeers);
    if(noOfBeers >= 1 && beerword != 'no more'){
        var lyricsLine = `${noOfBeers} bottles of beer on the wall, ${noOfBeers} bottles of beer.<br>
        Take one down and pass it around, ${beerword} bottles of beer on the wall.<br>`
    }
    console.log(lyricsLine);
    result = result + lyricsLine;
}
noOfBeers = totalNoOfbeers;
result = result + `No more bottles of beer on the wall, no more bottles of beer.<br>
Go to the store and buy some more, ${noOfBeers - 1} bottles of beer on the wall.<br>`
console.log(result);
document.getElementById('mylyrics').innerHTML = result;


var car1={
    brand= 'toyota';
    model='vios'
}

var car2={
    brand= 'toyota';
    model='cmary'
}

var bmx={
    brand= 'bmx';
    model='x'
}
    
var person={
    firstName:'kenneth',
    lastName: 'Pang",
    gender:'male',
    age: 40,
    bloodType: 'O',
    siblings: ['Juliana','sheryl'],
    transport: ['car1','car2', 'bmx']
}

var personB={
    firstName:'alex',
    lastName: 'Pang",
    gender:'male',
    age: 40,
    bloodType: 'O',
    siblings: ['Juliana','sheryl'],
    transport: ['bmx']
    hello: function(){
        console.log("Hi there!");   
    }
}   
personB.transport[0].model='x';
console.log(personA.transport[2]);
console.log(personB.transport[0]);

console.log(personA.firstName);
console.log(car1);

var car1= personA.transport[0];
car1.speed= 300;
console.log(car1);
var car1Model = pcar1.model;
console.log(pcar1);
console.log(car1Model);
console.log(car1.Model);