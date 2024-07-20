
const chatbotResponses = {
    "how can i order food through this website":"You can order your favorite food by clicking the order now button, and don't forget to share your location ",
    "hey":"Hi there! How can I assist you today?",
    "Any offers availeble ?":"You can always check the offers section for discounts and coupons",
    "how much does it take to deliver":"it depends on your location",
    "how can i pay":"you can pay online or cash on delivery",
    "":"",
    "":"",
    "who are you":"I am a bot, and i am here to assist you ",
    "hi":"Hi there! How can I assist you today?",
    "hello": "Hi there! How can I assist you today?",
    "how are you?": "I'm just a bot, but I'm here to help you!",
    "what is your name?": "I'm your friendly website chatbot.",
    "tell me a joke": "i am here to assist to you with our service",
    "what services do you offer?": "We will deliver you food.",
    "how can I contact you?": "You can contact us via the contact form on our website.",
    "what are your business hours?": "24x7.",
    "where are you located?": "We are currently located at kerela.",
    "do you have any discounts?": "Yes, we offer discounts. please check the offer section!",
    "thank you": "You're welcome! If you have any more questions, feel free to ask."
};

function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "none" || chatbotContainer.style.display === "" ? "flex" : "none";
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.toLowerCase();
    const chatMessages = document.getElementById("chatbot-messages");

    if (userMessage.trim() === "") return;

    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = "You: " + userMessage;
    chatMessages.appendChild(userMessageDiv);

    const botMessageDiv = document.createElement("div");
    botMessageDiv.textContent = "RNS-49: " + (chatbotResponses[userMessage] || "I'm sorry, I don't understand that question.");
    chatMessages.appendChild(botMessageDiv);

    userInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
