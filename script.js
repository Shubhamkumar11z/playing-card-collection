let cards = [
{
id:1,
suit:"hearts",
value:"ace",
collection:"vindagd"
}
];

function getCards(){

document.getElementById("output").textContent =
JSON.stringify(cards,null,2);

}

function addCard(){

let suit=document.getElementById("suit").value;
let value=document.getElementById("value").value;
let collection=document.getElementById("collection").value;

let card={
id:Date.now(),
suit:suit,
value:value,
collection:collection
};

cards.push(card);

getCards();

}

function updateCard(){

let id=document.getElementById("updateId").value;

let suit=document.getElementById("updateSuit").value;
let value=document.getElementById("updateValue").value;
let collection=document.getElementById("updateCollection").value;

let card=cards.find(c=>c.id==id);

if(card){

card.suit=suit;
card.value=value;
card.collection=collection;

}

getCards();

}

function deleteCard(){

let id=document.getElementById("deleteId").value;

cards=cards.filter(c=>c.id!=id);

getCards();

}
