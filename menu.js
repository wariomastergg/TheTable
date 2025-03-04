import { getMenuData } from "./menu.mjs";

async function populateBreakFast(){
    const menuData = await getMenuData();
    const breakfastItems = document.getElementById("breakfastItems");
    

    menuData.breakfast.meal.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} $${meal.price}`;
        breakfastItems.appendChild(line);
    });

    menuData.breakfast.eggs.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} $${meal.price}`;
        breakfastItems.appendChild(line);
    });
}

async function populateSandWiches(){
    const menuData = await getMenuData();
    const sandwichItems = document.getElementById("sandwichItems");

    menuData.sandWiches.nonGrilled.sandwitches.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} Half $${meal.halfPrice} Full $${meal.fullPrice}`;
        sandwichItems.appendChild(line);
    });

    sandwichItems.appendChild(document.createElement("br"));
    let addons = document.createElement("h3");
    addons.textContent = "Add Ons";

    sandwichItems.appendChild(addons);
    let line = document.createElement("p");
    line.textContent = menuData.sandWiches.nonGrilled.addOns;
    sandwichItems.appendChild(line);
    // sandwichItems.appendChild()
    // menuData.sandWiches.nonGrilled.addOns.forEach(addon => {
    //     const line = document.createElement("p");
    //     line.textContent = `${addon}`;
    //     sandwichItems.appendChild(line);
    // });
}

function populateMenu(){
    populateBreakFast();
    populateSandWiches();
}

document.addEventListener("DOMContentLoaded", populateMenu);