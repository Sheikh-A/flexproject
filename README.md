# Flex RESTful APIs with Express
# Author: Ali Sheikh

#Frontend Deployed here: https://aliport.vercel.app/

#Backend Deployed here: https://aliport.herokuapp.com/

#Endpoints (must be logged in):
- https://aliport.herokuapp.com/api/auth
- https://aliport.herokuapp.com/api/countries (need to be logged in)
- https://aliport.herokuapp.com/api/flex      (need to be logged in see additional CRUD endpoints below)
- https://aliport.herokuapp.com/api/users     (need to be logged in)



## Authentication System
- Authentication.
- Express Middleware.
- JSON Web Tokens (JWTs).
- Hashing Passwords.
- Admin Control

User Authentication System: Hashs user's passwords before saving it to the database. Uses `JSON Web Tokens` to persist authentication across requests.

- Implements the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- Implements the `authenticate` middleware inside `/auth/authenticate-middleware.js`.

Uses **JSON Web Tokens** to keep users authenticated across requests.

Admin Control: Uses middleware to check the "department" of user to see if they are "admin". Only admin can delete users & clients & only admin can see all users.

### Design and build the following endpoints.

| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                            |
| POST   | /api/auth/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'Incorrect Login!' |
| GET    | /api/users/admin    | If the user is logged in, respond with an array of all the users contained in the database. Only admin can view users.
| DELETE | /api/users/admin/:id    | If the user is logged in as admin, will delete user with specified id.

## Backend API Overview:

- Express Routing
- Reading Request data from body and URL parameters
- Sub-routes
- API endpoints & HTTP Codes
## Description

Uses `Node.js` and `Express` to build a sample Flex API that performs _CRUD_ operations on `dummy data`.

### Database Persistence Helpers

The `data` folder contains a database populated with test `objects`.

Database access will be done using the `dbConfig.js` file included inside the `data` folder.

Helpers are set up with the `flex-model.js` and the following methods are created:

- `find()`: calling find returns a promise that resolves to an array of all the `clients` contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns the client corresponding to the `id` provided or an empty array if no client with that `id` is found.
- `add()`: calling add passing it a `client` object will add it to the database and return an object with the `id` of the inserted client. The object looks like this:
    `{
        "id": 1,
        "client_name": "Test",
        "client_segment": "SMB"
    },` The id is auto-generated while the user has to input client_name and client_segment (can only insert SMB, Mid-Market, Enterprise, Emerging)
- `update()`: accepts two arguments, the first is the `id` of the client to update and the second is an object with the `changes` to apply. It returns the updated record. The id is taken from the URI. Here are the inputs:
        `{
            "client_name": "Test1",
            "client_segment": "SMB"
        },`
- `remove()`: the remove method accepts an `id` as its first parameter and upon successfully deleting the client from the database it returns the client_id that was deleted.
- `findClientShipments()`: the findClientShipments accepts a `clientId` as its first parameter and returns all shipments on the client associated with the client id.
- `findShipmentById()`: accepts an `id` and returns the Shipment associated with that id.
- `insertShipment()`: calling insert Shipment while passing it a `Shipment` object will add it to the database and return an object with the `id` of the inserted Shipment. The object looks like this:
`{
    "shipment_name": "PlayStation5",
    "client_id": 1
}`. This method will throw an error if the `client_id` field in the `Shipment` object does not match a valid client id in the database.


### Flex API Client Schema

Client in the database has the following structure:

```js
{
  "id": 1, //Autogenerated
  "client_name": "Test1", //STRING required
  "client_segment": "SMB", //STRING required, SMB, Emerging, Enterprise or Mid-Market ONLY
  "created_at": "2020-12-01 08:35:28", //Autogenerated
  "updated_at": "2020-12-01 08:35:28".  //Autogenerated
}
```

### Shipment Schema

A Shipment in the database has the following structure:

```js
{
  "id": 1, //Autogenerated
  "shipment_name": "Blue Tech",//STRING required
  "client_id": 1, //Foreign Key, client_id MUST exist, otherwise shipment will not get created
  "created_at": "2020-12-01 08:35:28",//Autogenerated
  "updated_at": "2020-12-01 08:35:28",//Autogenerated
  "client_name": "Blue Tech" //Auto joined using Foreign Key
    },
```
### Endpoints

Flex API Endpoints

| Method | Endpoint                | Description                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/flex              | Creates a client using the information sent inside the `request body`.                                                                                                        |
| POST   | /api/shipments | Creates a Shipment for the client with the specified id using information sent inside of the `request body`. Client_ID is required field and must exist in table                                                                                                                 |
| GET    | /api/flex              | Returns an array of all the client objects contained in the database.                                                                                                         |
| GET    | /api/flex/:id          | Returns the client object with the specified id.                                                                                                                              |
| GET    | /api/flex/shipments/:id | Returns an array of all the Shipment objects associated with the client with the specified id.                                                                                 |
| DELETE | /api/flex/:id          | Removes the client with the specified id and returns the deleted client id                                            |
| PUT    | /api/flex/:id          | Updates the client with the specified `id` using data from the `request body`. Returns the modified document.                   


###FRONT END
- Front end deployed using create-react-app
- Uses Axios for endpoints
    -error handling for all async (axios/AJAX) calls
- React Forms
- Fetches data from Flex API above, link is from Heroku
- Uses React Router
- Styled-Components
- Dog CEO API built into front-end for fun, this is accessable without logging in.
- Added responsiveness to website for extra large screen @2000px and mobile view @500px
