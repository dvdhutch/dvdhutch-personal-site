---
title: 'Challenge 1'
date: '2024-06-27'
---

## AI Chatbot Project

In this project, you will explore the code for a simple AI chatbot. The chatbot can answer questions based on a pre-defined knowledge base and can learn new answers when it encounters unknown questions. Below, the code is divided into sections with explanations and comments to help you understand how it works.

## Big Ideas

**Natural Language Processing (NLP)**: The program processes and interprets user questions, which is a basic NLP task. Although it uses simple string matching, it's still a part of understanding human language.

**Machine Learning**: The program can learn new responses based on user input. When the bot encounters a question it doesn't know the answer to, it asks the user for the correct answer and stores this new information in its knowledge base. This is a basic form of machine learning where the bot's knowledge improves over time.

**Pattern Matching**: The get_close_matches function from the difflib module helps the bot find the most relevant question in its database that matches the user’s question. This involves pattern recognition, which is a common technique in AI.

While this program is a simple example and doesn't involve complex algorithms or deep learning models, it still incorporates fundamental AI concepts like learning and pattern matching.

### Setup

You will need to:

- Open VS Code or a similar code editor
- Create a folder somewhere on your computer and open with VS Code
- In the folder, create a new JSON file -- you can name it *knowledge_base.JSON*
- Still in the folder, create another file and name it *main.py*

### 1. Creating a JSON Knowledge Base

Understanding the Structure: The knowledge base will consist of a JSON object with a single key "questions" which contains an empty list initially.

As you interact with the chat bot, this list will populate with responses that the chat bot is being trained on.

In the knowledge_base.JSON file, enter the following code:

    {
        "questions": [
            
        ]
    }

### 2. Importing Necessary Libraries

In this section, we import the libraries required for our chatbot. We use the json library for reading and writing JSON files and the get_close_matches function from the difflib module for finding the closest match to the user’s question.

Switch to the file named *main.py* and enter the following code:

    import json
    from difflib import get_close_matches
    from typing import List, Dict, Optional

### 3. Loading the Knowledge Base

This function loads the knowledge base from a JSON file. The knowledge base contains questions and their corresponding answers.

Continue entering the following code into the file named *main.py* until told otherwise.

    def load_knowledge_base(file_path: str) -> Dict:
        """Load the knowledge base from a JSON file."""
        try:
            with open(file_path, 'r') as file:
                data: Dict = json.load(file)
            return data
        except FileNotFoundError:
            return {"questions": []}

### 4. Saving the Knowledge Base

This function saves the updated knowledge base back to the JSON file. This is used when the bot learns new answers.

    def save_knowledge_base(file_path: str, data: Dict):
        """Save the knowledge base to a JSON file."""
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=2)

### 5. Finding the Best Match

This function finds the closest matching question from the knowledge base to the user's question. It uses the get_close_matches function to compare the user's question with the stored questions.

    def find_best_match(user_question: str, questions: List[str]) -> Optional[str]:
        """Find the best matching question from the knowledge base."""
        matches: List[str] = get_close_matches(user_question, questions, n=2, cutoff=0.6)
        return matches[0] if matches else None

### 6. Getting the Answer for a Question

This function retrieves the answer for a given question from the knowledge base.

    def get_answer_for_question(question: str, knowledge_base: Dict) -> Optional[str]:
        """Retrieve the answer for a given question from the knowledge base."""
        for q in knowledge_base["questions"]:
            if q["question"] == question:
                return q["answer"]
        return None

### 7. Creating the Chatbot

This is the main function that runs the chatbot. It loads the knowledge base, processes user input, finds the best match, retrieves the answer, and updates the knowledge base if needed.

    def chat_bot():
        """Main chat bot function to interact with the user."""
        knowledge_base: Dict = load_knowledge_base('knowledge_base.json')

        while True:
            user_input: str = input('You: ')

            if user_input.lower() == 'quit':
                break

            best_match: Optional[str] = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

            if best_match:
                answer: Optional[str] = get_answer_for_question(best_match, knowledge_base)
                print(f'Bot: {answer}')
            else:
                print('Bot: I don\'t know the answer. Can you teach me?')
                new_answer: str = input('Type the answer or "skip" to skip: ')

                if new_answer.lower() != 'skip':
                    knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
                    save_knowledge_base('knowledge_base.json', knowledge_base)
                    print('Bot: Thank you! I learned a new response!')

### 8. Running the Chatbot

    if __name__ == '__main__':
        chat_bot()

## Operating the Program

Congratulations! If you've made it this far, you have successfully created your very own chatbot.

To run the program in VS Code, right-click (on MacOS, two-finger click) and select 'Run Python File in Terminal'. From there, you can explore training the program and seeing how it responds! Happy training!

### Credits

Made by David Hutchinson in Leysin, CH
MMXXIV



*This essay was partially written by an AI system. Additionally, elements of this project were co-created with [OpenAI's ChatGPT-4o](https://openai.com/index/hello-gpt-4o/)*.