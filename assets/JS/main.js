
const shoppingList = [
    "compra pane",
    "latte",
    "insalata",
    "burger"
];

const shoppingListElement = document.querySelector(".shoppingList")

let index = 0

while (index < shoppingList.length) {
    const element = shoppingList[index];
    const liElement = `<li>${element}</li>`
    shoppingListElement.insertAdjacentHTML("beforeend", liElement)
    index++
}
