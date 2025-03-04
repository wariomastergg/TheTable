import { getMenuData } from "./menu.mjs";

async function populateBreakFast(){
    const menuData = await getMenuData();
    const breakfastItems = document.getElementById("breakfastItems");
    

    menuData.breakfast.meal.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        breakfastItems.appendChild(line);
    });

    menuData.breakfast.eggs.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        breakfastItems.appendChild(line);
    });
}

async function populateSandWiches(){
    const menuData = await getMenuData();
    const sandwichItems = document.getElementById("sandwichItems");

    menuData.sandWiches.nonGrilled.sandwitches.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - Half: $${meal.halfPrice} Full: $${meal.fullPrice}`;
        sandwichItems.appendChild(line);
    });

    sandwichItems.appendChild(document.createElement("br"));
    let addons = document.createElement("h3");
    addons.textContent = "Add Ons";

    sandwichItems.appendChild(addons);
    let line = document.createElement("p");
    line.textContent = menuData.sandWiches.nonGrilled.addOns;
    sandwichItems.appendChild(line);

}

async function populateGrilledSandWiches(){
    const menuData = await getMenuData();
    const grilledSandwichItems = document.getElementById("grilledSandwichItems");

    menuData.sandWiches.GrilledSandwiches.sandwitches.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        grilledSandwichItems.appendChild(line);
    });

    grilledSandwichItems.appendChild(document.createElement("br"));  
    let addons = document.createElement("h3");
    addons.textContent = "Add Ons";

    grilledSandwichItems.appendChild(addons);
    let line = document.createElement("p");
    line.textContent = menuData.sandWiches.GrilledSandwiches.addOns;
    grilledSandwichItems.appendChild(line);
}

async function populateKidsMenu(){
    const menuData = await getMenuData();
    const kidsMenuItems = document.getElementById("kidsMenuItems");

    menuData.kidsMenu.meal.forEach(meal => {
        let line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        kidsMenuItems.appendChild(line);
    });

}

async function populateSoupSize() {
    const menuData = await getMenuData();
    const soupItems = document.getElementById("soupMenuItems");

    const sizeHolder = document.createElement("div");
    let size = document.createElement("h3");
    size.textContent = "Sizes";
    sizeHolder.appendChild(size);

    menuData.soups.size.forEach(meal => {
        let line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        sizeHolder.appendChild(line);
    });

    soupItems.appendChild(sizeHolder);

}

async function populateDrinks() {
    const menuData = await getMenuData();
    const drinkItems = document.getElementById("drinkMenuItems");

    const lemonadeTitle = document.createElement("h3");
    lemonadeTitle.textContent = "Lemonade";
    drinkItems.appendChild(lemonadeTitle);


    menuData.drinks.lemonade.forEach(drink => {
        let line = document.createElement("p");
        line.textContent = `${drink.name} - ${drink.description} - $${drink.price}`;
        drinkItems.appendChild(line);
        console.log(drink);
    });
}

function populateMenu(){
    populateBreakFast();
    populateSandWiches();
    populateGrilledSandWiches();
    populateKidsMenu();
    populateSoupSize();
    populateDrinks();
}

document.addEventListener("DOMContentLoaded", populateMenu);