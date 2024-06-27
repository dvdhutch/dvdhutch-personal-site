---
title: 'Challenge 1'
date: '2024-06-27'
---

### AI Chatbot Project

In this project, you will explore the code for a simple AI chatbot. The chatbot can answer questions based on a pre-defined knowledge base and can learn new answers when it encounters unknown questions. Below, the code is divided into sections with explanations and comments to help you understand how it works.

### Big Ideas

**Natural Language Processing (NLP)**: The program processes and interprets user questions, which is a basic NLP task. Although it uses simple string matching, it's still a part of understanding human language.

**Machine Learning**: The program can learn new responses based on user input. When the bot encounters a question it doesn't know the answer to, it asks the user for the correct answer and stores this new information in its knowledge base. This is a basic form of machine learning where the bot's knowledge improves over time.

**Pattern Matching**: The get_close_matches function from the difflib module helps the bot find the most relevant question in its database that matches the user’s question. This involves pattern recognition, which is a common technique in AI.

While this program is a simple example and doesn't involve complex algorithms or deep learning models, it still incorporates fundamental AI concepts like learning and pattern matching.

### Setup

You will need to:

- Open VS Code or a similar code editor
- Create a folder somewhere on your computer and open with VS Code
- In the folder, create a new JSON file -- you can name it knowledge_base.JSON
- Still in the folder, create another file name main.py

### 1. Creating a JSON Knowledge Base

Understanding the Structure: The knowledge base will consist of a JSON object with a single key "questions" which contains an empty list initially.

As you interact with the chat bot, this list will populate with responses that the chat bot is being trained on.

In the knowledge_base.JSON file, enter the following code:

    {
        "questions": [
            
        ]
    }

    git remote add origin https://github.com/your_username/repository_name.git
    git branch -M main
    git add --all
    git commit -m "enter whatever you want the commit to be called here"
    git push -u origin main

For future use, you'll just need to run these commands to push your updated code to GitHub:

    git add --all
    git commit -m "enter whatever you want the commit to be called here"
    git push -u origin main

*I'm definitely **not** a GitHub/Git expert, nor do I claim to be. Take my advice with a grain of salt. I'm sure there are some web developers that would throw a fit on reading this process. However, if you're limited in experience (like me!), these steps should suffice*.


*Again, I'm not an expert on **anything** covered in this post. I hope this can help you! I enjoyed building it and found it helpful to share my thinking on web design, names, and everything in-between*.