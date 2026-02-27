# 🏡 Real Estate Price Predictor (Bangalore)

Welcome to my very first mini Data Science and Machine Learning project! 🚀 

This full-stack web application predicts real estate prices in Bangalore, India. It takes user inputs such as square footage, number of bedrooms (BHK), bathrooms, and location to estimate the property's value. The project covers the entire machine learning lifecycle: from data cleaning and outlier detection to model building, deploying a backend API, and connecting it to a modern, responsive frontend.

![UI Screenshot](client/ui_screenshot.png) *(Not: Buraya arayüzün ekran görüntüsünü ekleyebilirsin)*

## ✨ Features
* **Accurate Predictions:** Uses a Linear Regression model trained on real Bangalore property data.
* **Smart Data Cleaning:** Handled missing values, engineered new features, and removed extreme outliers (BHK and Price Per Sqft) using standard deviation and mean filtering.
* **Modern UI:** Features a sleek, dark-themed UI with Glassmorphism effects.
* **Live Currency Conversion:** The model predicts prices in Indian Rupees (Lakhs) and dynamically converts them to USD for a better global understanding.

## 🛠️ Tech Stack
* **Machine Learning & Data Processing:** Python, Pandas, NumPy, Scikit-Learn (Linear Regression, GridSearchCV)
* **Backend API:** Python, Flask
* **Frontend:** HTML5, CSS3 (Modern Dark Theme), JavaScript, jQuery

## 📂 Project Structure
The project is organized into three main layers to separate concerns:

```text
├── artifacts/             # Contains the trained ML model (.pickle) and column metadata (.json)
├── client/                # Frontend UI files (index.html, style.css, app.js)
├── server/                # Flask backend API (server.py, util.py)
├── bengaluru_house_prices.csv # The raw dataset
└── main.py                # Data cleaning and model training script
```
## 🚀 How to Run the Project
**1. Clone the repository**

```
git clone [https://github.com/sudeeyilmaz/Real-Estate-Price-Predict.git](https://github.com/sudeeyilmaz/Real-Estate-Price-Predict.git)
cd Real-Estate-Price-Predict
```

**2. Start the Backend Server**
Navigate to the server directory and run the Flask app. This will start the API on http://127.0.0.1:5000/.

```
cd server
python server.py
```
**3. Open the Frontend**
You don't need Node.js or any complex frontend server. Simply navigate to the client folder and open the index.html file in your web browser, or use VS Code's "Live Server" extension.
## 💡 What I Learned
As my first mini data science project, this taught me:

How to clean messy real-world data and handle outliers logically.

The importance of GridSearchCV to find the best algorithms and parameters.

How to bridge the gap between a Python Machine Learning model and a web browser using Flask and AJAX.

Overcoming frontend-backend communication hurdles like CORS.
