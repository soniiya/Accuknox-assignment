1. Install Node.js
Before running the application, ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone the Repository
If you haven't cloned the repository yet, you can do so with the following command:
git clone https://github.com/soniiya/Accuknox-task.git

3. Navigate to project directory
cd Accuknox-task/react-app

4. Install Dependencies
Install the necessary dependencies for the project:
npm install

5. Start the Development Server
Start the development server to run the application locally:
npm start

6. Access the Application
Once the server is running, open your web browser and go to:
http://localhost:3000

#Once you have the application running locally, you can explore its various features and functionalities. Here's a step-by-step guide:

1. Navigate the Dashboard
Categories and Widgets:

The dashboard is organized into different categories (e.g., "CSPM Executive Dashboard", "Another Category").
Each category contains widgets that display relevant information (e.g., "Cloud accounts", "Cloud Account Risk Assessment").

Explore Widgets:
Widgets are displayed as cards within their respective categories.
Each widget shows a title and some associated text or data.

2. Add Widgets
Add Widget Button:

At the end of each category section, you'll find an "Add Widget" button inside a card.
Click on this button to open a modal that allows you to add new widgets to the category.
Widget Modal:

The modal will slide in from the right side of the screen.
Inside the modal, you'll see category tabs. Click on a tab to view the available widgets for that category.
Each widget will have a checkbox.
Check the box to add the widget to the dashboard.
Uncheck the box to remove the widget from the dashboard.
Search for Widgets:
At the top of the modal, there's a search bar where you can search for widgets.
If the widget is present in the selected category, it will appear in the search results.
If the widget is not found, a message will be displayed indicating that the widget is not present.

3. Remove Widgets
Remove from Dashboard:
Each widget card in the dashboard has a delete icon (like a trash bin or cross icon) that allows you to remove the widget from the dashboard.
You can also remove widgets by unchecking them in the widget modal.

4. Add New Widgets Dynamically
Custom Widget Creation:
Below the search bar in the widget modal, there are input fields where you can add a custom widget.
Enter the widget name and text in the provided fields.
Click the "Add Widget" button to dynamically create and add this widget to the dashboard under the selected category.
Ensure that both the widget name and text fields are filled before adding the widget. If not, you will receive an alert to fill in the necessary details.