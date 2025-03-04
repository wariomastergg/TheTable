const menu = {
    bread :{
        loafs :[
            {
                name : "White Loaf",
                price : 4.99,
                lb : 2
            },
            {
                name : "Jalapeño Cheddar",
                price : 6.99,
                lb : 2
            }
        ],
        rolls : [
            {
                name : "Dinner Roll",
                price : 5.99
            }  ,
            {
                name : "Sandwich Roll",
                price : 4.99
            },
            {
                name : "Cinnamon Roll",
                price : 4.75
            }
        ]
    },
    breakfast:{
        meal : [
            {
                name : "Egg & Cheese Sandwich",
                price : 8.96
            },
            {
                name : "Sausege Egg and Cheese Sandwich",
                price : 10.49
            },
            {
                name : "Ham Egg and Cheese Sandwich",
                price : 9.49
            },
            {
                name : "Buttermilk Pankake",
                price : 2.49
            },
            {
                name: "Biscuits and Gravey",
                price : 6.59
            },
            {
                name : "Biscuits Ham and Gravy",
                price : 8.49
            },
            {
                name : "Biscuits Sausage and Gravy",
                price : 8.49
            },
            {
                name : "French Toast",
                price : 5.99,
            },
            {
                name : "Slice of Toast",
                price : 1.50
            },
            {
                name : "Slice of Bread with Butter",
                price : 1.50
            }

        ],
        eggs : [
            {
                name : "Omlete",
                price : 5.25
            },
            {
                name : [
                    "Scrambled",
                    " Sunny Side Up",
                    " Over Easy",
                    " or Fried"],

                price : 3.69
            },
        ]
    },
    sandWiches : {
        nonGrilled : {
            sandwiches : [
                {
                    name : "Turkey Provolone",
                    halfPrice : 5.39,
                    fullPrice : 8.69
                },
                {
                    name : "Ham & Cheddar",
                    halfPrice : 5.39,
                    fullPrice : 8.69
                },
                {
                    name : "Roast Beef and Provolone",
                    halfPrice : 6.39,
                    fullPrice : 9.69
                },
                {
                    name : "Toasted Tomato",
                    halfPrice : 5.39,
                    fullPrice : 8.69
                }
            ],
            addOns : [
                "Mustard",
                " Mayonnaise",
                " Lettuce",
                " Tomatos",
                " Pickles",
                " Red Onions",
            ]
        },
        GrilledSandwiches : {
            sandwiches : [
    
                {
                    name : "Ham and Cheese",
                    price : 9.69,
                },
                {
                    name : "Grilled Cheese",
                    price : 8.69,
         
                },
                {
                    name : "PB & J",
                    price : 3.99,
                
                }
            ],
            addOns : [
                "Ham",
                "Cheddar",
                "Lettuce",
                "Pickles",
                "House Dressing"
            ]      
        }

    },
    kidsMenu : {
        meal : [
            {
                name : "PB & J with Juice Box",
                price : 3.99
            },
            {
                name : "Grilled Cheese with Juice Box",
                price : 4.99
            },
            {
                name : "Turkey Provolone with Drink",
                price : 4.99
            },
        ]
    },
    studentMeal : {
        description : "1/2 Sandwich, Chips and a Drink",
        price : 6.60
    },
    soups :{
        size :[
            {
                name : "Cup",
                price : 5.49
            },
            {
                name : "Bowl",
                price : 7.09
            },
            {
                name : "I'm Starving",
                price : 14.99
            }
        ],
        dayOfWeek : [
            {
                day : "Monday",
                name : "Tomato Basil",
            },
            {
                day : "Tuesday",
                name : "Broccoli Cheddar",
            },
            {   
                day : "Wednesday", 
                name : "Chicken Enchilada",
            },
            {
                day : "Thursday",
                name : "Sausege Potato Chowder",
            },
            {
                day : "Friday",
                name : "Clamm Chowder",
            },
            {
                day : "Saturday",
                name : "Chefs Choice",
            }

        ]

    },
    drinks : {
        lemonade : [
            {
                name : "Plain",
                price : 3.75,
                description: ""
            },
            {
                name : "Sweet Summer Time",
                price : 4.00,
                description: "Peach & Blackberry"
            },
            {
                name : "Sand Dune Sunset",
                price : 4.00,
                description: "Passion Fruit, Orange, and Guava"
            },
            {
                name : "Teton Hucklberry",
                price : 4.00,
                description: "Huckleberry"
            },
            {
                name: "Pink",
                price : 4.00,
                description : "Pomegranate"
            }
        ],
        other: [
            {
                name : "Canned Drink",
                price : 1.50
            },
            {
                name : "Bottle (Veriate)",
                price : 3.00
            },
            {
                name : "Coffee",
                price : 1.70
            },
            {
                name : "Orange Juice (Cup)",
                price : 1.70
            },
            {
                name : "Milk (Cup)",
                price : 1.70
            },
            {
                name : "Juice Box / Pouch",
                price : 1.00
            },
            {
                name : "Hot Chocolate",
                price : 3.50
            }
        ]
        
    }           
}

export function getMenuData(){
    return menu;
}