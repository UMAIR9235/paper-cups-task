import { useState, useEffect } from "react";
import "./App.css";
import { ChatWidget } from "@papercups-io/chat-widget";

let customStylesObject;

function App() {
  const [showButton, setShowButton] = useState(true);
  const [customStyles, setCustomStyles] = useState();

  console.log(showButton);
  useEffect(() => {
    // creating custom styles that would be applied on a particular screen size.
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
  // when the screen shrinks or widenes whlie checking the responsiveness on the browser this code block executes
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
  // below function are called when the chat window is opened or closed
  function hideButton() {
    setShowButton(false);
  }
  function unhideButton() {
    setShowButton(true);
  }
  return (
    <div className="text-red-500 w-full h-dvh relative flex justify-center items-center">
      <h1 className="text-3xl font-semibold text-indigo-500">
        Wait for the Chat Button to appear
      </h1>
      <ChatWidget
        token="76deaf12-df21-49dc-b0bc-114467b17ff2"
        inbox="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"
        title="Welcome to Papercups!"
        subtitle="Ask us anything in the chat window below 😊"
        newMessagePlaceholder="Start typing..."
        primaryColor="#13c2c2"
        greeting="Hi there! How can I help you?"
        customer={{
          name: "Test User",
          email: "test@test.com",
          external_id: "123",
          metadata: { version: 1, plan: "premium" },
        }}
        // below three lines of code are the Modifications to the styles props of the widget to make it responsive
        onChatOpened={hideButton}
        onChatClosed={unhideButton}
        styles={customStyles}
        // above three lines of code are the Modifications to the styles props of the widget to make it responsive
        baseUrl="https://app.papercups.io"
        requireEmailUpfront
        showAgentAvailability
      />
    </div>
  );
}

export default App;
