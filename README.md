# project-cis_4339_project_36
project-cis_4339_project_36 created by GitHub Classroom

Project options: Bread of life

In order to be able to run our project, first you must run npm install in both
the bol-management-app and myapp directories.
In bol-management-app you must type npm run serve, then npm run build,
then npm run lint to be able to succesfully get our server running.
After that you should be able to run our server with npm run serve
to run the server. And you can open up another terminal in the 
myapp directory to run the backend by typing node index.js into
the terminal.

You will also need a connection to the mongo database using a .env file. 
You may need to create one in the myapp directory
with: MONGO_URL = mongodb://localhost:27017/projectdb inside of it
or you can use whichever url you may need.

Our management application for Bread of Live will allow the user to
perform all CRUD operations for both clients and distrubution events.
As well as lookups such as viewing clients at a specific event, 
distributions by zip code, and distribution histories using 
distribution ID.

In the application you are able to create clients by clicking on
sign up for distrubution. Here you are able to type in the information
that you want. You will have to have at least one event created first 
in order to choose an event for the first step of the sign up form.

If you would like to a bulk insert of already created data, you may use the
ProjectPostman file and use the post clients and post distributions. This is
not needed in order to run the app.

To view data you must click on the view lists dropdown and select view clients or
view events. In order to view the edit forms you may click on the green edit button,
change what you need, the click submit ro return to the view. You may delete a row by 
clicking on the red delete button.

We also have three lookups that the user is able to use. View client events will
allow the user to input id of a distribution to view all of the clients that are 
signed up to it. View distribution history for client will alow the user to input 
a client ID to view all of the evets that client has signed up for. Lastly, the
view distribution by zip code will allow the user to input a zipcode to see the
events located there.
