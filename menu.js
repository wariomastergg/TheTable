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
        if (meal.name == "Omelette"){
            line.textContent = `${meal.name} - $${meal.price}`;
        }else{
            line.textContent = `Eggs (3) : ${meal.name} - $${meal.price}`;
        }
        breakfastItems.appendChild(line);
    });
}

async function populateSandWiches(){
    const menuData = await getMenuData();
    const sandwichItems = document.getElementById("sandwichItems");

    const studentMeal = document.createElement("h4");
    studentMeal.textContent = `StudentMeal - ${menuData.studentMeal.description} - $${menuData.studentMeal.price.toFixed(2)}`;
    sandwichItems.appendChild(studentMeal);


    menuData.sandWiches.nonGrilled.sandwiches.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - Half: $${meal.halfPrice} Full: $${meal.fullPrice}`;
        sandwichItems.appendChild(line);
    });

    sandwichItems.appendChild(document.createElement("br"));
    let addons = document.createElement("h3");
    addons.textContent = "With request Sandwich can come with: ";

    sandwichItems.appendChild(addons);
    let line = document.createElement("p");
    line.textContent = menuData.sandWiches.nonGrilled.addOns;
    sandwichItems.appendChild(line);

}

async function populateGrilledSandWiches(){
    const menuData = await getMenuData();
    const grilledSandwichItems = document.getElementById("grilledSandwichItems");

    menuData.sandWiches.GrilledSandwiches.sandwiches.forEach(meal => {
        const line = document.createElement("p");
        line.textContent = `${meal.name} - $${meal.price}`;
        grilledSandwichItems.appendChild(line);
    });

    grilledSandwichItems.appendChild(document.createElement("br"));  
    let addons = document.createElement("h3");
    addons.textContent = "With request Sandwich can come with: ";

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

    const br = document.createElement("br");
    soupItems.appendChild(br);
    const soupheader = document.createElement("h3");
    soupheader.textContent = "Daily Soups";
    soupItems.appendChild(soupheader);

    menuData.soups.dayOfWeek.forEach(soup => {
        let line = document.createElement("p");
        line.textContent = `${soup.day} - ${soup.name}`;
        soupItems.appendChild(line);
    });

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

let toggleDropdown = [true, true, true, true, true, true];

function changeHideClass(idElement){
    const dropDown = document.getElementById(idElement);
    let containerId ="";
    if (idElement == "breakfastButton"){
        if (toggleDropdown[0]){dropDown.innerHTML = 'Breakfast ▼';toggleDropdown[0] = false;}
        else{dropDown.innerHTML = 'Breakfast ▲';toggleDropdown[0] = true;}
        containerId = "breakFastContainer";
    } else if (idElement == "sandwichButton"){
        if (toggleDropdown[1]){dropDown.innerHTML = 'Sandwiches ▼';toggleDropdown[1] = false;}
        else{dropDown.innerHTML = 'Sandwiches ▲';toggleDropdown[1] = true;}
        containerId = "sandwichMenuContainer";
    } else if (idElement == "grilledSandwichButton"){
        if (toggleDropdown[2]){dropDown.innerHTML = 'Grilled Sandwich ▼';toggleDropdown[2] = false;}
        else{dropDown.innerHTML = 'Grilled Sandwich ▲';toggleDropdown[2] = true;}
        containerId = "grilledSandwichContainer";
    } else if (idElement == "kidsButton"){
        if (toggleDropdown[3]){dropDown.innerHTML = 'Kids Menu ▼';toggleDropdown[3] = false;}
        else{dropDown.innerHTML = 'Kids Menu ▲';toggleDropdown[3] = true;}
        containerId = "kidsMenuContainer";
    } else if (idElement == "soupButton"){
        if (toggleDropdown[4]){dropDown.innerHTML = 'Soups ▼';toggleDropdown[4] = false;}
        else{dropDown.innerHTML = 'Soups ▲';toggleDropdown[4] = true;}
        containerId = "soupsContainer";
    } else if (idElement == "drinkButton"){
        if (toggleDropdown[5]){dropDown.innerHTML = 'Drinks ▼';toggleDropdown[5] = false;}
        else{dropDown.innerHTML = 'Drinks ▲';toggleDropdown[5] = true;}
        containerId = "drinkContainer";
    }

    const container = document.getElementById(containerId);
    container.classList.toggle("hide");

}

const idButtonList = ["breakfastButton", "sandwichButton", "grilledSandwichButton", "kidsButton", "soupButton", "drinkButton"]

idButtonList.forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        changeHideClass(id);
    })
})

