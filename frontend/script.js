const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

// ==========================================
// ADD MESSAGE
// ==========================================

function addMessage(text, sender) {

const message = document.createElement("div");

message.className =
    sender === "user"
        ? "message user"
        : "message friday";

message.innerHTML =
    sender === "user"
        ? `<b>YOU:</b><br>${escapeHTML(text)}`
        : `<b>FRIDAY:</b><br>${escapeHTML(text).replace(/\n/g, "<br>")}`;

chat.appendChild(message);

chat.scrollTop = chat.scrollHeight;

}

// ==========================================
// SECURITY
// ==========================================

function escapeHTML(text) {

const div = document.createElement("div");

div.textContent = text;

return div.innerHTML;

}

// ==========================================
// SEND MESSAGE
// ==========================================

function sendMessage() {

const text = input.value.trim();

if (!text) return;

addMessage(text, "user");

input.value = "";

input.focus();


// --------------------------------------
// Check FRIDAY Brain
// --------------------------------------

if (
    typeof FRIDAY_BRAIN === "undefined"
) {

    addMessage(
        "FRIDAY Brain is not loaded.",
        "friday"
    );

    return;
}


// --------------------------------------
// Thinking indicator
// --------------------------------------

addMessage(
    "Thinking...",
    "friday"
);


setTimeout(() => {

    try {

        const result =
            FRIDAY_BRAIN.think(text);


        // Remove "Thinking..."
        if (chat.lastChild) {
            chat.removeChild(chat.lastChild);
        }


        // --------------------------------
        // Display response
        // --------------------------------

        addMessage(
            result.response,
            "friday"
        );


        // --------------------------------
        // Voice response
        // --------------------------------

        speak(result.response);


        // --------------------------------
        // Handle actions
        // --------------------------------

        handleAction(result.action);

    }

    catch (error) {

        console.error(
            "FRIDAY Brain Error:",
            error
        );


        if (chat.lastChild) {
            chat.removeChild(chat.lastChild);
        }


        addMessage(
            "I encountered a brain error. Please try again.",
            "friday"
        );
    }

}, 400);

}

// ==========================================
// QUICK COMMAND
// ==========================================

function quickCommand(command) {

input.value = command;

sendMessage();

}

// ==========================================
// ACTION ENGINE
// ==========================================

function handleAction(action) {

if (!action) return;


switch (action) {

    case "open_youtube":

        console.log(
            "FRIDAY action: YouTube"
        );

        break;


    case "open_google":

        console.log(
            "FRIDAY action: Google"
        );

        break;


    default:

        console.log(
            "Unknown FRIDAY action:",
            action
        );
}

}

// ==========================================
// TEXT TO SPEECH
// ==========================================

function speak(text) {

if (
    !("speechSynthesis" in window)
) {
    return;
}


window.speechSynthesis.cancel();


const speech =
    new SpeechSynthesisUtterance(text);


speech.rate = 0.95;

speech.pitch = 0.9;

speech.volume = 1;


// Try to select an English voice

const voices =
    window.speechSynthesis.getVoices();


const englishVoice =
    voices.find(
        voice =>
            voice.lang.startsWith("en")
    );


if (englishVoice) {
    speech.voice = englishVoice;
}


window.speechSynthesis.speak(
    speech
);

}

// ==========================================
// VOICE INPUT
// ==========================================

function startVoice() {

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


if (!SpeechRecognition) {

    addMessage(
        "Voice recognition is not supported by this WebView.",
        "friday"
    );

    return;
}


const recognition =
    new SpeechRecognition();


recognition.lang = "en-US";

recognition.interimResults = false;

recognition.maxAlternatives = 1;


recognition.onstart = function () {

    addMessage(
        "🎤 Listening...",
        "friday"
    );
};


recognition.onresult =
    function(event) {

        const speechText =
            event.results[0][0]
                .transcript;


        input.value = speechText;

        sendMessage();
    };


recognition.onerror =
    function(event) {

        console.error(
            "Speech recognition error:",
            event.error
        );


        addMessage(
            "I couldn't understand that. Please try again.",
            "friday"
        );
    };


recognition.onend =
    function() {

        console.log(
            "Voice recognition stopped."
        );
    };


recognition.start();

}

// ==========================================
// ENTER KEY
// ==========================================

input.addEventListener(
"keydown",
function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();
    }

}

);

// ==========================================
// PAGE START
// ==========================================

document.addEventListener(
"DOMContentLoaded",
function() {

    input.focus();

    console.log(
        "FRIDAY interface initialized."
    );

}

);

// ==========================================
// VOICE LIST INITIALIZATION
// ==========================================

if (
"speechSynthesis" in window
) {

window.speechSynthesis.onvoiceschanged =
    function() {

        window.speechSynthesis
            .getVoices();

    };

}
