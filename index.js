import { initializeApp } from "firebase/app";
import { getDatabase,ref, push } from "firebase/database";

const appSettings = {
    getDatabaseURL: "https://addtochart-fddab-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    console.log(inputValue)
})