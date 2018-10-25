var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById('btn2');
var myList = document.getElementById("list");
var story = document.getElementsByClassName("item");

console.log(btn1);
console.log(btn2);
console.log(myList);

function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Элемент";
  newLi.className = "item";
  myList.appendChild(newLi);

}

function delItem() {
  myList.removeChild(story[0]);
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);