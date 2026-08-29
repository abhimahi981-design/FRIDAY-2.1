const FRIDAY_BRAIN = {

name: "FRIDAY",

// ==========================================
// CONFIGURATION
// ==========================================

config: {
    maxConversationMemory: 50,
    storageKey: "friday_long_term_memory"
},


// ==========================================
// INITIALIZE
// ==========================================

init() {

    this.memory = this.loadMemory();

    console.log("FRIDAY Brain initialized.");
    console.log("Memory entries:", this.memory.length);
},


// ==========================================
// MAIN THINKING ENGINE
// ==========================================

think(input) {

    const text = input.trim();

    if (!text) {
        return {
            type: "empty",
            response: "I'm listening."
        };
    }

    // 1. Understand request
    const intent = this.detectIntent(text);

    // 2. Create action plan
    const plan = this.plan(intent, text);

    // 3. Execute plan
    const result = this.execute(plan);

    // 4. Remember conversation
    this.remember("user", text);
    this.remember("friday", result.response);

    return {
        type: intent,
        response: result.response,
        action: result.action || null
    };
},


// ==========================================
// INTENT ENGINE
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
        command.includes("time") ||
        command.includes("current time")
    ) {
        return "time";
    }

    if (
        command.includes("date") ||
        command.includes("today")
    ) {
        return "date";
    }

    if (
        command.includes("status") ||
        command.includes("system")
    ) {
        return "status";
    }

    if (
        command.includes("remember") ||
        command.includes("don't forget")
    ) {
        return "remember";
    }

    if (
        command.includes("what do you remember") ||
        command.includes("show memory") ||
        command.includes("my memory")
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
// COMMAND PLANNER
// ==========================================

plan(intent, text) {

    return {
        intent: intent,
        input: text
    };
},


// ==========================================
// COMMAND EXECUTOR
// ==========================================

execute(plan) {

    switch (plan.intent) {

        case "greeting":
            return {
                response:
                    "Good to see you, Boss. FRIDAY is online."
            };


        case "identity":
            return {
                response:
                    "I am FRIDAY — your personal AI assistant."
            };


        case "time":
            return {
                response:
                    "The current time is " +
                    new Date().toLocaleTimeString()
            };


        case "date":
            return {
                response:
                    "Today's date is " +
                    new Date().toLocaleDateString()
            };


        case "status":
            return {
                response:
                    "All core FRIDAY systems are operational. " +
                    "Brain online. Memory online. Voice ready."
            };


        case "joke":
            return {
                response:
                    "Why do programmers prefer dark mode? " +
                    "Because light attracts bugs."
            };


        case "youtube":

            window.open(
                "https://www.youtube.com",
                "_blank"
            );

            return {
                response: "Opening YouTube.",
                action: "open_youtube"
            };


        case "google":

            window.open(
                "https://www.google.com",
                "_blank"
            );

            return {
                response: "Opening Google.",
                action: "open_google"
            };


        case "remember":

            return this.saveUserMemory(plan.input);


        case "memory":

            return this.showMemory();


        default:

            return {
                response:
                    this.conversation(plan.input)
            };
    }
},


// ==========================================
// LONG-TERM MEMORY
// ==========================================

loadMemory() {

    try {

        const saved =
            localStorage.getItem(
                this.config.storageKey
            );

        return saved
            ? JSON.parse(saved)
            : [];

    } catch (error) {

        console.error(
            "Memory load error:",
            error
        );

        return [];
    }
},


saveMemory() {

    try {

        localStorage.setItem(
            this.config.storageKey,
            JSON.stringify(this.memory)
        );

    } catch (error) {

        console.error(
            "Memory save error:",
            error
        );
    }
},


remember(type, text) {

    this.memory.push({

        type: type,

        text: text,

        timestamp:
            new Date().toISOString()

    });

    if (
        this.memory.length >
        this.config.maxConversationMemory
    ) {

        this.memory.shift();
    }

    this.saveMemory();
},


saveUserMemory(text) {

    this.remember(
        "important",
        text
    );

    return {

        response:
            "Understood, Boss. " +
            "I've stored that in my memory."
    };
},


showMemory() {

    const important =
        this.memory.filter(
            item =>
                item.type === "important"
        );

    if (important.length === 0) {

        return {
            response:
                "I don't have any important memories stored yet."
        };
    }

    const memories =
        important
            .slice(-10)
            .map(
                (item, index) =>
                    `${index + 1}. ${item.text}`
            )
            .join("\n");

    return {
        response:
            "Here is what I remember:\n" +
            memories
    };
},


// ==========================================
// PERSONALITY
// ==========================================

conversation(text) {

    const responses = [

        `Understood, Boss. You said: "${text}"`,

        `I'm processing that request, Boss: "${text}"`,

        `Interesting. I'll keep that in context: "${text}"`,

        `Acknowledged. "${text}"`

    ];

    return responses[
        Math.floor(
            Math.random() *
            responses.length
        )
    ];
}

};

// ==========================================
// START FRIDAY BRAIN
// ==========================================

FRIDAY_BRAIN.init();
