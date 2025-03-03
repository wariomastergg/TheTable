const Menu = {
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
                name : "Sandwitch Roll",
                price : 4.99
            },
            {
                name : "Cinnamon Roll",
                price : 5.75
            }
        ]
    },
    breakfast:{
        meal : [
            {
                name : "Egg & Cheese Sandwitch",
                price : 5.99
            },
            {
                name : "Sausege or Ham Egg & Cheese Sandwitch",
                price : 6.99
            },
            {
                name : "Buttermilk Pankake",
                price : 5.99
            },
            {
                name: "Biscuits and Gravey",
                price : 5.99
            },
            {
                name : "Biscuits and Gravey with Slice of Ham",
                price : 5.99
            },
            {
                name : "Biscuits and Gravey with 2 Sausege Patties",
                price : 5.99
            },
            {
                name : "French Toast",
                price : 5.99,
            },

        ],
        eggs : [
            {
                name : "Omlete",
                price : 5.25
            },
            {
                name : [
                    "Scrambled",
                    "Sunny Side Up",
                    "Over Easy",
                    "Fried"],

                price : 6.25
            },
        ]
    },
    sandWiches : {
        nonGrilled : {
            name : [
                "Turkey Provolone",
                "Ham & Chedar",
                "Roast Beef and Provolone",
                "Toasted Tomato"],
            halfPrice :5.39,
            fullPrice : 8.69,
            addOns : [
                "Mustard",
                "Mayonnaise",
                "Lettuce and Tomatos",
                "Pickles",
                "Red Onions",
            ]
        },
        GrilledSandwiches : [
            {
                name : "Ham and Cheese",
                price : 6.99,
                addOns : [
                    "Ham",
                    "Cheddar",
                    "Lettuce",
                    "Pickles",
                    "House Dressing"
                ]
            },
            {
                name : "Grilled Cheese",
                price : 8.69,
                addOns : [
                    "Ham",
                    "Cheddar",
                    "Lettuce",
                    "Pickles",
                    "House Dressing"
                ]               
            },
            {
                name : "PB & J",
                price : 8.69,
                addOns : []               
            },

        ]

    },
    KidsMenu : {
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
    StudentMeal : {
        description : "1/2 sandwitch, Chips and a Drink",
        price : 6.60
    },
    Soups :{
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
        DayofWeek : {
            Monday : {
                name : "Tomato Basil",
            },
            Tuesday : {
                name : "Broccoli Cheddar",
            },
            Wednesday : {    
                name : "Chicken Enchilada",
            },
            Thursday : {
                name : "Sausege Potato Chowder",
            },
            Friday : {
                name : "Clamm Chowder",
            },
            Saturday : {
                name : "Chefs Choice",
            },

        }

    },
    Drinks : {
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
                description: "Passion Fruit, Orange, & Guava"
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
                name : "Can Drink",
                price : 1.50
            },
            {
                name : "Bottle (Veriate)",
                price : 3.00
            },
            {
                name : "Cofee",
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
                price : 3.00
            },
            {
                name : "Hot Chocolate",
                price : 3.40
            }
        ]
        
    }           
}