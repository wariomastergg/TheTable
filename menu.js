import { getMenuData } from "./menu.mjs";

async function populateBreakFast(){
    const menuData = await getMenuData();
    const breakfastItems = document.getElementById("breakfastItems");
    
    console.log(menuData.breakfast.meal)
    
    menuData.breakfast.meal.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} $${meal.price}`;
        breakfastItems.appendChild(line);
    });
}