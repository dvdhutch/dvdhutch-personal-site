---
title: 'Challenge 3'
date: '2024-07-07'
---

## Virtual Shop Project

This mini-project will set up a simple, customizable shop that sells merchandise, such as shirts, trousers, and shoes. Set up relies on user inputted data for clothing merchandise with the option to add on a more advanced machine learning recommendation model later on.

### Setup

You will need to:

- Open VS Code on your computer (or a similar code editor)
- Create a new folder on your desktop (two-finger click -> 'New Folder')
- Name it 'YourName-3'
- In the folder, create a new JSON file -- name it *storage.JSON*
- Still in the folder, create another file and name it *main.py*

### 1. main.py

    import json

    # Load data from storage.json
    def load_data():
        with open('storage.json', 'r') as f:
            return json.load(f)

    # Function to display and get user choice from options
    def get_user_choice(prompt, options):
        print(prompt)
        for i, option in enumerate(options, 1):
            print(f"{i}. {option}")
        choice = int(input("Select an option: ")) - 1
        return options[choice]

    # Function to recommend items based on user preferences
    def recommend_item(data, preferences):
        season, style, occasion = preferences.values()
        recommended_items = []

        for brand, items in data['brands'].items():
            for item in items:
                if (season in item['seasons'] and
                    style in item['styles'] and
                    occasion in item['occasions']):
                    recommended_items.append(item)
        
        return recommended_items[0] if recommended_items else None

    # Main function to run the program
    def main():
        data = load_data()

        shop_data = {
            "shop_name": "Trendy Threads",
            "location": "123 Fashion Ave, Style City",
            "prompts": {
                "season_prompt": "What time of year is it?",
                "style_prompt": "What style are you looking for?",
                "occasion_prompt": "What's the occasion?"
            }
        }

        print(f"Welcome to {shop_data['shop_name']} located at {shop_data['location']}!")
        
        # Gather user preferences
        season = get_user_choice(shop_data['prompts']['season_prompt'], ["Spring", "Summer", "Autumn", "Winter"])
        style = get_user_choice(shop_data['prompts']['style_prompt'], ["Casual", "Formal", "Sporty", "Elegant"])
        occasion = get_user_choice(shop_data['prompts']['occasion_prompt'], ["Everyday", "Work", "Party", "Exercise"])
        
        preferences = {
            "season": season,
            "style": style,
            "occasion": occasion
        }

        # Recommend an item based on preferences
        recommended_item = recommend_item(data, preferences)
        
        if recommended_item:
            print(f"Based on your preferences, we recommend: {recommended_item['name']} - ${recommended_item['price']}")
        else:
            print("Sorry, we couldn't find an item that matches your preferences.")

        print("Thank you for shopping with us!")

    if __name__ == "__main__":
        main()



*Make sure to customize your app! Lines 35 and 36 are editable and can be changed to suit your preferred name / location.*

### 2. storage.JSON

    {
        "brands": {
            "Adidas": [
                {"name": "T-Shirt", "price": 100, "seasons": ["Spring", "Summer"], "styles": ["Casual", "Sporty"], "occasions": ["Everyday", "Exercise"]},
                {"name": "Jeans", "price": 300, "seasons": ["Autumn", "Winter"], "styles": ["Casual"], "occasions": ["Everyday", "Work"]}
            ],
            "Nike": [
                {"name": "Shirt", "price": 200, "seasons": ["Spring", "Summer", "Autumn"], "styles": ["Formal", "Elegant"], "occasions": ["Work", "Party"]},
                {"name": "Shorts", "price": 185, "seasons": ["Summer"], "styles": ["Casual", "Sporty"], "occasions": ["Everyday", "Exercise"]}
            ],
            "Polo Ralph Lauren": [
                {"name": "Dress", "price": 590, "seasons": ["Spring", "Summer"], "styles": ["Elegant", "Casual"], "occasions": ["Party", "Everyday"]},
                {"name": "Skirt", "price": 25, "seasons": ["Spring", "Summer", "Autumn"], "styles": ["Elegant", "Casual"], "occasions": ["Everyday", "Work"]}
            ],
            "Versace": [
                {"name": "Blouse", "price": 35, "seasons": ["Autumn", "Winter"], "styles": ["Formal", "Elegant"], "occasions": ["Work", "Party"]},
                {"name": "Pants", "price": 40, "seasons": ["Autumn", "Winter"], "styles": ["Casual", "Formal"], "occasions": ["Everyday", "Work"]}
            ]
        }
    }



*Make sure you customize your app! You can edit specific shop attributes and the categories associated with them. For instance, in Line 3, you can change the bran from Adidas to something else.*

*In Line 4, you can change T-Shirt to a different clothing garment and set your own price. Then, switch up the season, style, and occasion as you see fit.*


## Operating the Program

Congratulations! You are now able run a virtual shop.

To run the program in VS Code, right-click (on MacOS, two-finger click) and select 'Run Python File in Terminal'. Alternatively, hit the 'play' icon in the top-right. From there, you can explore training the program and seeing how it responds! Happy training!

### Credits

Made by David Hutchinson in Leysin, CH
MMXXIV



*This essay was partially written by an AI system. Additionally, elements of this project were co-created with [OpenAI's ChatGPT-4o](https://openai.com/index/hello-gpt-4o/)*.