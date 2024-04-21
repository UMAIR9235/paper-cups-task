import { useState, useEffect } from "react";
import "./App.css";
import { ChatWidget } from "@papercups-io/chat-widget";

let customStylesObject;

function App() {
  const [showButton, setShowButton] = useState(true);
  const [customStyles, setCustomStyles] = useState();

  console.log(showButton);
  useEffect(() => {
    customStylesObject = {
      chatContainer: {
        width: "100%",
        height: "100%",
        maxWidth: "none",
        minWidth: "none",
        borderRadius: 0,
        inset: 0,
        maxHeight: "none",
        overflow: "hidden",
      },
      toggleContainer: {
        display: `${showButton ? "block" : "none"}`,
      },
      toggleButton: {
        border: "2px solid red",
      },
    };
    if (window.innerWidth < 480) {
      setCustomStyles(customStylesObject);
    } else if (window.innerWidth >= 480) {
      setCustomStyles();
    }
  }, [showButton]);
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 480 && !customStyles) {
      setCustomStyles(customStylesObject);
      console.log("setting styles");
    } else if (window.innerWidth >= 480) {
      setCustomStyles("");
      console.log("removing styles");
    }
  });
  function hideButton() {
    setShowButton(false);
  }
  function unhideButton() {
    setShowButton(true);
  }
  return (
    <div className="text-red-500 w-full h-dvh relative">
      <ChatWidget
        // Pass in your Papercups account token here after signing up
        token="76deaf12-df21-49dc-b0bc-114467b17ff2"
        // Specify a Papercups inbox
        inbox="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
        title="Welcome to Papercups!"
        subtitle="Ask us anything in the chat window below 😊"
        newMessagePlaceholder="Start typing..."
        primaryColor="#13c2c2"
        // Optionally pass in a default greeting
        greeting="Hi there! How can I help you?"
        // Optionally pass in metadata to identify the customer

        customer={{
          name: "Test User",
          email: "test@test.com",
          external_id: "123",
          metadata: { version: 1, plan: "premium" }, // Custom fields go here
        }}
        onChatOpened={hideButton}
        onChatClosed={unhideButton}
        styles={customStyles}
        // Optionally specify the base URL
        baseUrl="https://app.papercups.io"
        // Add this if you want to require the customer to enter
        // their email before being able to send you a message
        requireEmailUpfront
        // Add this if you want to indicate when you/your agents
        // are online or offline to your customers
        showAgentAvailability
      />
    </div>
  );
}

export default App;
