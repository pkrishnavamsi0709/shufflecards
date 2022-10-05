let cards=[1,2,3,4,5,6,7,8,9,10,"A","J","K","Q"];
document.getElementById("cards").innerHTML= cards;

document.getElementById("rollbut").onclick=function(){
    shuffle(cards);
    document.getElementById("cards").innerHTML= cards;
}

function shuffle(array){
   let current=0;

   while(current<array.length){
    let randomi=Math.floor(Math.random()*14);
    let temp = array[randomi];
    array[randomi]=array[current];
    array[current]=temp;
    current=current+1;
   }
   console.log(array);
}