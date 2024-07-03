---
title: 'Challenge 2'
date: '2024-07-04'
---

## Sentiment Analysis Project

In this project, you will explore the field of natural language processing (NLP) by developing a sentiment analysis tool in Python. Sentiment analysis involves analyzing text to determine the sentiment expressed, whether positive, negative, or neutral. You will apply basic machine learning principles to build a simple classifier that can analyze the sentiment of given text based on predefined positive and negative words.

Your training data is completely customizable, and you are encouraged to continue to train the model with more text to improve outputs. All speeches are based on speeches delivered in-class and transcribed with [riverside.fm](https://riverside.fm/transcription).

## Big Ideas

**Natural Language Processing (NLP)**: The program processes and interprets user questions, which is a basic NLP task. Although it uses simple string matching, it's still a part of understanding human language.

**Classifier**: A model or algorithm that learns patterns from labeled data (training data) to make predictions or decisions about new data.

**Training Data**: Data used to teach a machine learning algorithm patterns and relationships between inputs and outputs, enabling the algorithm to make predictions or decisions on new data.

### Setup

You will need to:

- Open VS Code or a similar code editor
- Create a folder somewhere on your computer and open with VS Code (use your name)
- In the folder, create a new JSON file -- you can name it *speech.JSON*
- Still in the folder, create another file and name it *main.py*

### 1: Create the JSON structure (the training data we will be using)

In the speech.JSON file, copy the following code:

    {
        "training_data": [
            {"text": "I love sunny days", "sentiment": "positive"},
            {"text": "This is a horrible mistake", "sentiment": "negative"},
            {"text": "I feel great", "sentiment": "positive"},
            {"text": "This is a bad idea", "sentiment": "negative"},
            {"text": "What a wonderful world", "sentiment": "positive"},
            {"text": "I am very sad", "sentiment": "negative"}
        ],
        "speech_text": "Enter your speech text here."
    }

The training data is customizable, and you can add additional statements and their associated property (e.g. positive, negative, neutral) as you see fit.

Also note that, as default the speech_text is filled with a placeholder. You will enter the transcription of your speech in this field later on.

### 2: Importing Necessary Libraries

Switch to the main.py file and import the following libraries:

    import json
    import string

- json: This library allows us to work with JSON data, which is a popular format for storing and exchanging data.
- string: This library provides utility functions for string manipulation, such as removing punctuation from text.

### 3: Define Positive and Negative Words

    # Predefined positive and negative words for initial rule-based sentiment analysis
    positive_words = [
        'good', 'happy', 'joy', 'excellent', 'positive', 'fortunate', 'correct', 'superior', 'wonderful', 'fantastic', 'love', 'like'
    ]

    negative_words = [
        'bad', 'sad', 'pain', 'poor', 'negative', 'unfortunate', 'wrong', 'inferior', 'terrible', 'awful', 'hate', 'dislike'
    ]

- These lists are used to assess the sentiment of the text later in the program.

### 4: Define Text Preprocessing Function

    def preprocess_text(text):
        # Convert text to lowercase
        text = text.lower()
        # Remove punctuation
        text = text.translate(str.maketrans('', '', string.punctuation))
        return text

- Cleans text by removing punctuation and making it lowercase.

### 5: Define Function to Train Simple Classifier

    def train_simple_classifier(training_data):
        word_sentiment_counts = {"positive": {}, "negative": {}}
        
        for entry in training_data:
            sentiment = entry["sentiment"]
            words = preprocess_text(entry["text"]).split()
            
            for word in words:
                if word not in word_sentiment_counts[sentiment]:
                    word_sentiment_counts[sentiment][word] = 0
                word_sentiment_counts[sentiment][word] += 1
        
        return word_sentiment_counts

- train_simple_classifier function takes training_data as input, which is a list of dictionaries containing text and associated sentiment labels ("positive" or "negative").

### 6. Define Function to Analyze Sentiment with Classifier

    def analyze_sentiment_with_classifier(text, classifier):
        words = preprocess_text(text).split()
        positive_score = sum(classifier["positive"].get(word, 0) for word in words)
        negative_score = sum(classifier["negative"].get(word, 0) for word in words)
        
        total_score = positive_score - negative_score
        sentiment = "Neutral"
        if total_score > 0:
            sentiment = "Positive"
        elif total_score < 0:
            sentiment = "Negative"
        
        feedback = {
            "positive_score": positive_score,
            "negative_score": negative_score,
            "total_score": total_score,
            "sentiment": sentiment
        }
        
        return feedback

- analyze_sentiment_with_classifier function takes text and classifier as inputs.
- It preprocesses the input text to lowercase and removes punctuation.
- It calculates positive_score and negative_score by summing up the counts of positive and negative words in the classifier dictionary (which was generated by train_simple_classifier).
- It computes total_score as the difference between positive_score and negative_score.

### 7: Define Function to Calculate Word Frequency

    def word_frequency(text):
        words = preprocess_text(text).split()
        frequency = {}
        for word in words:
            if word in frequency:
                frequency[word] += 1
            else:
                frequency[word] = 1
        return frequency

### 8: Define Function to Generate Report

    def generate_report(text, classifier):
        feedback = analyze_sentiment_with_classifier(text, classifier)
        frequency = word_frequency(text)
        
        report = f"""
    Sentiment Analysis Report
    ========================
    The sentiment of the speech is: {feedback['sentiment']}
    Positive score: {feedback['positive_score']}
    Negative score: {feedback['negative_score']}
    Total score: {feedback['total_score']}
    ========================

    Word Frequency:
    """
        for word, count in frequency.items():
            report += f"{word}: {count}\n"
        
        return report

- generate_report function takes text and classifier as inputs.
- It constructs a formatted report string containing the sentiment analysis results and word frequency counts.

### 9: Define Main Function to Run the Program

    def main():
        # Load the speech text and training data from JSON file
        with open('speech.json', 'r') as file:
            data = json.load(file)
            training_data = data["training_data"]
            speech_text = data["speech_text"]
        
        # Train the simple classifier
        classifier = train_simple_classifier(training_data)
        
        # Generate and print the report
        report = generate_report(speech_text, classifier)
        print(report)

    if __name__ == "__main__":
        main()

- main function is the entry point of the program.
- It reads the training data (training_data) and speech text (speech_text) from a JSON file named speech.json.
- It trains a simple classifier (classifier) using train_simple_classifier function on the training_data.
- It generates a sentiment analysis report using generate_report function based on speech_text and classifier.
- Finally, it prints the generated report to the console.


## Operating the Program

Congratulations! You are now able to analyze text such as a speech and determine the sentiment of it using a fully-trainable model.

To run the program in VS Code, right-click (on MacOS, two-finger click) and select 'Run Python File in Terminal'. From there, you can explore training the program and seeing how it responds! Happy training!

### Credits

Made by David Hutchinson in Leysin, CH
MMXXIV



*This essay was partially written by an AI system. Additionally, elements of this project were co-created with [OpenAI's ChatGPT-4o](https://openai.com/index/hello-gpt-4o/)*.