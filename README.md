# project-cis_4339_project_36
project-cis_4339_project_36 created by GitHub Classroom

Project options: Bread of life

Use npm install to download the required modules to run the code
Modules download include express, mongoose, dotenv, morgan, and cors

After packages are installed you must type 'node index.js' into the console
in order to launch the backend. Make sure you are in the myapp directory.

We have included code in this readme that can copy into Postman to insert
sample data used for the project. Make sure you are posting raw JSON data.

To create data: You must copy the JSON data below. You may create your own entries
or simply paste the JSON into the post field in Postman using the urls
http://localhost:3000/client and http://localhost:3000/distribution

To read data: To get all clients you must use the get in Postman
you may use the urls http://localhost:3000/clients to get all clients
and http://localhost:3000/distributions to get all distributions

Update:

Delete: For deleting documents we used delete by object id.
To do this you may need to use get clients/distributions to see which specific object id you 
need to delete. To delete you use the urls http://localhost:3000/deleteClient/:id and 
http://localhost:3000/deleteDistribution/:id with :id being the object id of the document

We have also created some functions that are required for Bread of Life.
One for getting clients using distribution_id. Which can be used by using the url
http://localhost:3000/clientEvents/:id in Postman with the id being the distribution_id.

One to get ways each individual has accessed their services as well as their 
distribution histories. This can be done by using the url http://localhost:3000/client-access/:id
with :id being a client's client_id.

And one for getting total activities by zip code. This can be done using the url 
http://localhost:3000//clientLocale/:id in Postman with :id being the client's zip






Client data (paste all into Postman using post http://localhost:3000/client):
[
{
    "client_id":1,
    "distribution_id":1,
    "fName":"John",
    "lName":"Doe",
    "phoneNumber":"832-951-7412",
    "reference":"Facebook",
    "zip":77505,
    "takeVaccine":1,
    "vaccinePreference":"Pfizer",
    "vaccineReceived":0,
    "additionalServices":0,
    "children":1,
    "senior":0,
    "veteran":1,
    "ethnicity":"Multi or Biracial"
},
{
    "client_id":2,
    "distribution_id":2,
    "fName":"Jane",
    "lName":"Doe",
    "phoneNumber":"832-567-1242",
    "reference":"Instagram",
    "zip":77505,
    "takeVaccine":0,
    "vaccinePreference":null,
    "vaccineReceived":null,
    "additionalServices":0,
    "children":1,
    "senior":0,
    "veteran":0,
    "ethnicity":"White or Caucasian"
},
{
    "client_id":3,
    "distribution_id":3,
    "fName":"Jack",
    "lName":"Jones",
    "phoneNumber":"832-741-6758",
    "reference":"Twitter",
    "zip":77505,
    "takeVaccine":1,
    "vaccinePreference":"Moderna",
    "vaccineReceived":0,
    "additionalServices":1,
    "children":3,
    "senior":1,
    "veteran":0,
    "ethnicity":"Hispanic or Latino"
},
{
    "client_id":1,
    "distribution_id":2,
    "fName":"John",
    "lName":"Doe",
    "phoneNumber":"832-951-7412",
    "reference":"Facebook",
    "zip":77505,
    "takeVaccine":1,
    "vaccinePreference":"Pfizer",
    "vaccineReceived":1,
    "additionalServices":0,
    "children":1,
    "senior":0,
    "veteran":1,
    "ethnicity":"Multi or Biracial"
},
{
    "client_id":1,
    "distribution_id":3,
    "fName":"John",
    "lName":"Doe",
    "phoneNumber":"832-951-7412",
    "reference":"Facebook",
    "zip":77505,
    "takeVaccine":1,
    "vaccinePreference":"Pfizer",
    "vaccineReceived":1,
    "additionalServices":0,
    "children":1,
    "senior":0,
    "veteran":1,
    "ethnicity":"Multi or Biracial"
},
{
    "client_id":3,
    "distribution_id":3,
    "fName":"Jack",
    "lName":"Jones",
    "phoneNumber":"832-741-6758",
    "reference":"Twitter",
    "zip":77505,
    "takeVaccine":1,
    "vaccinePreference":"Moderna",
    "vaccineReceived":1,
    "additionalServices":1,
    "children":3,
    "senior":1,
    "veteran":0,
    "ethnicity":"Hispanic or Latino"
}
]

Distribution data (past all into Postman using post http://localhost:3000/distribution):
[
    {
    "distribution_id":1,
    "reliefType":"Food Distribution",
    "reliefDate":"September 4th",
    "location":"BBVA stadium",
    "zip": 77505
    },
    {
    "distribution_id":2,
    "reliefType":"Ida disaster relief",
    "reliefDate":"September 8th",
    "location":"Crawford Street",
    "zip": 77007
    },
    {
    "distribution_id":3,
    "reliefType":"Food Distribution",
    "reliefDate":"October 9th",
    "location":"Crawford Street",
    "zip": 77009
    }
]