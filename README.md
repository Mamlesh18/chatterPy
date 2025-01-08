# ChatterPy - Personalized AI Chatbots for Businesses

ChatterPy provides businesses with personalized AI chatbots that can be accessed directly through a web interface. With just a few simple steps, businesses can easily integrate their data and start using an AI-powered chatbot tailored to their needs. You don't need to rely on a Python backend anymore — everything is handled through the React frontend!

## Installation

Follow the steps below to set up and run the app locally:

1. Clone this repository:

    ```bash
    git clone https://github.com/your-repo/chatterpy.git
    cd chatterpy
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Setup your email and API key by editing the following variables in the code:

    ```javascript
    const email = "ADD YOUR MAIL ID";
    const apiKey = "ADD YOUR API KEY";
    const response = await axios.post("PASTE THE URL FROM WEBSITE"), 

    ```

4. Once the configuration is done, start the app:

    ```bash
    npm start
    ```

5. The app will be running on `http://localhost:3000` in your browser.

## How it works

ChatterPy allows businesses to upload data in a simple format and instantly generate a personalized chatbot. The integration of LLM ensures that the chatbot is powered by advanced language models to handle a wide range of queries.

- Upload your business data (text files) directly into the platform.
- The system creates a custom chatbot based on your uploaded data.
- Use the provided API key and URL to start interacting with the chatbot.

## Technologies Used

- React.js for frontend development.
- Axios for making API requests.

## Requirements

- You need to sign up for the Azure OpenAI API to get an API key and set it in the code.
- Make sure your email and API key are correctly added in the code.

## Contact Us

If you have any questions or need support, feel free to reach out to us via email at **chatterpy.ai@gmail.com**.


