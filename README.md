
![server running](https://github.com/gitbiruk2010/Handling-Query-Strings-in-Express/assets/103274295/45af7600-74f7-477e-84cd-22b20b703a11)

Express Server: Handling Query Strings
Prerequisites
Node.js installed on your system.
Installation
Clone the Repository
If you haven't already, clone or download the project repository to your local machine.
Install Dependencies
Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:
npm install
Running the Server
1.	Start the Server
In the project directory, run the following command to start the Express server:
node app.js
You should see a message indicating that the server is running, typically on port 3000.
Server is running on port 3000
Note: If port 3000 is in use, the server may fail to start. See the 'Troubleshooting' section below for assistance.
Testing Query String Functionality
1.	Send GET Request with Query Parameters
To test the query string functionality, you will need to send a GET request to the server with query parameters. This can be done using a web browser or tools like Postman or curl.
Example using a web browser:
a.	Open your web browser.
b.	Navigate to http://localhost:3000/get?param1=value1&param2=value2.
You should see a response from the server in the browser.
2.	Check Console Output
Check the console where your server is running. You should see the query parameters logged there, as provided in the URL.

{ param1: 'value1', param2: 'value2' }

•	Troubleshooting
Port 3000 Already in Use
If you encounter an error like Error: listen EADDRINUSE: address already in use :::3000, it means port 3000 is already being used by another process. You can resolve this by either:
Stopping the process using port 3000.
Changing the port number in app.js to an available port, like 3001.
Additional Information
The server is configured to handle undefined routes with a 404 error message.
The query string parameters are accessed in the server code using req.query.

