import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Accessibility = () => {
  const [text, setText] = useState("");
  const [recognizedText, setRecognizedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [commandResult, setCommandResult] = useState("");
  const [voiceEnabled, setVoiceEnabled] = useState(() => {
    return localStorage.getItem("voiceCommands") !== "disabled";
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (voiceEnabled) {
      startGlobalVoiceListening();
    }
  }, [voiceEnabled]);

  const startGlobalVoiceListening = () => {
    if (!voiceEnabled) return;

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Voice Command Error:", event.error);
    };

    recognition.start();
    window.voiceRecognition = recognition;
  };

  const handleVoiceCommand = (command) => {
    const commands = {
      "go to home": "/",
      "open home": "/",
      "go to about": "/about",
      "open about": "/about",
      "go to resources": "/resources",
      "open resources": "/resources",
      "go to schools": "/schools",
      "open schools": "/schools",
      "go to donate": "/donate",
      "open donate": "/donate",
      "go to contact": "/contact",
      "open contact": "/contact",
      "go to accessibility": "/accessibility",
      "open accessibility": "/accessibility",
    };

    if (commands[command]) {
      setCommandResult(`✅ Navigating to ${command.replace(/(go to|open) /i, "")}...`);
      setTimeout(() => navigate(commands[command]), 1000);
    } else if (command === "scroll up") {
      window.scrollBy({ top: -300, behavior: "smooth" });
    } else if (command === "scroll down") {
      window.scrollBy({ top: 300, behavior: "smooth" });
    } else if (command === "scroll to top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (command === "scroll to bottom") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (command === "disable voice commands") {
      setVoiceEnabled(false);
      localStorage.setItem("voiceCommands", "disabled");
      setCommandResult("🔴 Voice commands disabled!");
      if (window.voiceRecognition) {
        window.voiceRecognition.stop();
        window.voiceRecognition = null;
      }
    } else if (command === "enable voice commands") {
      setVoiceEnabled(true);
      localStorage.setItem("voiceCommands", "enabled");
      setCommandResult("🟢 Voice commands enabled!");
      startGlobalVoiceListening();
    } else {
      setCommandResult("❌ Command not recognized!");
    }
  };

  const handleTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text || "Accessibility Features are enabled.");
      speech.lang = "en-IN";
      speech.rate = 1;
      speech.pitch = 1.1;
      speech.volume = 1;
      speech.onstart = () => setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Text-to-Speech not supported in your browser!");
    }
  };

  const handleSpeechToText = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript.charAt(0).toUpperCase() + transcript.slice(1));
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen mt-32 px-6 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Accessibility Features
      </h1>

      <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto">
      <motion.div
  className="border border-blue-300 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-5 w-full text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
    🎙️ Voice Commands
  </h2>

  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
    Say: <span className="text-indigo-600 dark:text-indigo-400">
    <span className="text-green-600 dark:text-green-400">
      <b>OPEN :</b>{" "} {" "}
    </span> Home, About, Schools, Resources, Contact, Donate, Accessibility
    </span> <br />
    or <span className="text-indigo-600 dark:text-indigo-400">
    <span className="text-green-600 dark:text-green-400">
      <b>SCROLL :</b>{" "} {" "}
    </span>Up, Down, To Top, To Bottom
    </span>
  </p>

  <button
    onClick={() => handleVoiceCommand(voiceEnabled ? "disable voice commands" : "enable voice commands")}
    className={`mt-4 px-6 py-2 text-white rounded-md font-semibold hover:scale-105 transition-all bg-gradient-to-r ${
      voiceEnabled ? "from-indigo-500 to-purple-700" : "from-purple-500 to-indigo-700"
    } shadow-md`}
  >
    {voiceEnabled ? "🔴 Disable Voice Commands" : "🟢 Enable Voice Commands"}
  </button>
</motion.div>


        <div className="flex flex-col md:flex-row gap-6 w-full">
          <motion.div
            className="border border-blue-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 w-full md:w-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              🎤 Speech to Text
            </h2>
            <button
              onClick={handleSpeechToText}
              className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 transition-all"
            >
              {isListening ? "🎙️ Listening..." : "Start Listening"}
            </button>
            <p className="mt-4 p-3 bg-gray-200 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100">
              {recognizedText || "Speak to see text here..."}
            </p>
          </motion.div>

          <motion.div
            className="border border-blue-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 w-full md:w-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              🔊 Text to Speech
            </h2>
            <textarea className="w-full p-3  rounded mb-3 bg-gray-200 dark:bg-gray-700" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type text here..."></textarea>
            <button onClick={handleTextToSpeech} className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all">
              {isSpeaking ? "🔊 Speaking..." : "Read Aloud"}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
