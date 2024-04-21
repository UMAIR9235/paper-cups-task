Clone this repository using command "git clone https://github.com/UMAIR9235/paper-cups-task.git".
cd into the project folder using command "cd paper-cups-task".
Open the folder in the code editor of you liking. i would suggest to use vscode. You can use the command "code . " to open the project in vscode.
Open the terminal of the editor or use the existing terminal and type command "npm install".
A folder name node_modules would be created .
If no error occured enter the command "npm run dev" . This will start the project on localhost with some port number after the colon. 
Copy the address eg: localhost:3000 and paste it in the browser address bar and you will see the paper-cups chat widget appear in the bottom right corner of the screen. 
Click the button to open the chat widget . Resize the browser window to see the chat widget resize itself while the browser window shrinks or widenes.
To make the chat widget responsive my approach included the following steps:
In the paper-cups documentation it is mentioned that the chatwidget component <ChatWidget /> accepts certain props, one of them being an object named styles. 
styles object further has three key value pairs chatContainer: {}, toggleContainer: {}, toggleButton: {} all of them being objects. 
chatContainer is the actual chatwidget, toggleContainer is the container that holds the toggleButton and toggleButton being the button itself.
These objects accept basic css in js properties as there key value pairs.
so i created a customStylesObject that contains styles for all of the three above mentioned objects.
so to add the styles dynamically when the screen width changes i put customStylesObject in a state named customStyles using useState hook and used that state as value in the styles prop of chat widget styles={customStyles}.
Moreover i used "resize" event listener on the window object so whenever the window size changes, i update the customStyle state using setCustomStyles function.
Alos i used onChatOpened and onChatClosed props of the chat widget to hide and unhide the toggle button.
So far i tried to make it responsive like it is in the "Aidbase - AI Assistance for your startup" widget that you provided in the task instructions.
I hope the above steps gave you an insight into the approach i used to accomplish this task.
