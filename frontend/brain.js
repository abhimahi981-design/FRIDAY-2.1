const FRIDAY_BRAIN = {

name: "FRIDAY",

memory: [],

maxMemory: 50,

// ==========================================
// MAIN BRAIN
// ==========================================

think(input) {

    const text = input.trim();

    if (!text) {
        return {
            type: "conversation",
            response: "I'm listening."
        };
    }

    // Save user input
    this.remember("user", text);

    // Detect intent
    const intent = this.detectIntent(text);

    let response;

    switch (intent) {

        case "greeting":
            response = this.greeting();
            break;

        case "identity":
            response = this.identity();
            break;

        case "time":
            response = this.getTime();
            break;

        case "date":
            response = this.getDate();
            break;

        case "status":
            response = this.status();
            break;

        case "memory":
            response = this.getMemory();
            break;

        case "joke":
            response = this.joke();
            break;

        case "youtube":
            response = this.openYouTube();
            break;

        case "google":
            response = this.openGoogle();
            break;

        default:
            response = this.conversation(text);
    }

    // Save FRIDAY response
    this.remember("friday", response.text);

    return {
        type: intent,
        response: response.text,
        action: response.action || null
    };
},


// ==========================================
// INTENT DETECTION
// ==========================================

detectIntent(text) {

    const command = text.toLowerCase();

    if (
        command.includes("hello") ||
        command.includes("hi") ||
        command.includes("hey")
    ) {
        return "greeting";
    }

    if (
        command.includes("who are you") ||
        command.includes("your name") ||
        command.includes("what are you")
    ) {
        return "identity";
    }

    if (
        command.includes("what time") ||
        command === "time" ||
        command.includes("current time")
    ) {
        return "time";
    }

    if (
        command.includes("what date") ||
        command === "date" ||
        command.includes("today's date")
    ) {
        return "date";
    }

    if (
        command.includes("status") ||
        command.includes("systems")
    ) {
        return "status";
    }

    if (
        command.includes("remember") ||
        command.includes("memory")
    ) {
        return "memory";
    }

    if (command.includes("joke")) {
        return "joke";
    }

    if (command.includes("youtube")) {
        return "youtube";
    }

    if (command.includes("google")) {
        return "google";
    }

    return "conversation";
},


// ==========================================
// RESPONSES
// ==========================================

greeting() {

    return {
        text: "Hello, Boss. FRIDAY is online and ready."
    };
},


identity() {

    return {
        text:
            "I am FRIDAY — your personal AI assistant. " +
            "My brain is currently running in local mode."
    };
},


getTime() {

    return {
        text:
            "The current time is " +
            new Date().toLocaleTimeString()
    };
},


getDate() {

    return {
        text:
            "Today's date is " +
            new Date().toLocaleDateString()
    };
},


status() {

    return {
        text:
            "FRIDAY systems online. " +
            "Brain: ONLINE. " +
            "Memory: ONLINE. " +
            "Voice: READY."
    };
},


joke() {

    return {
        text:
            "Why do programmers prefer dark mode? " +
            "Because light attracts bugs."
    };
},


// ==========================================
// COMMANDS
// ==========================================

openYouTube() {

    window.open(
        "https://www.youtube.com",
        "_blank"
    );

    return {
        text: "Opening YouTube.",
        action: "open_youtube"
    };
},


openGoogle() {

    window.open(
        "https://www.google.com",
        "_blank"
    );

    return {
        text: "Opening Google.",
        action: "open_google"
    };
},


// ==========================================
// MEMORY
// ==========================================

remember(type, text) {

    this.memory.push({
        type: type,
        text: text,
        time: new Date().toISOString()
    });

    if (this.memory.length > this.maxMemory) {
        this.memory.shift();
    }
},


getMemory() {

    if (this.memory.length === 0) {

        return {
            text: "My memory is currently empty."
        };
    }

    const recent = this.memory
        .slice(-5)
        .map(item => item.text)
        .join(" | ");

    return {
        text:
            "Recent memory: " + recent
    };
},


// ==========================================
// GENERAL CONVERSATION
// ==========================================

conversation(text) {

    return {
        text:
            `I understand: "${text}". ` +
            "My core brain is processing your request."
    };
}

};
