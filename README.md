# Flex RESTful APIs with Express
# Author: Ali Sheikh
## My Objectives:

- Express Routing
- Reading Request data from body and URL parameters
- Sub-routes
- API design and development.

## Description

Use `Node.js` and `Express` to build a sample Flex API that performs _CRUD_ operations on `dummy data`.

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

//todo::!!!*************
### Blog client Schema

A Blog client in the database has the following structure:

```js
{
  title: "The client title", // String, required
  contents: "The client contents", // String, required
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Shipment Schema

A Shipment in the database has the following structure:

```js
{
  text: "The text of the Shipment", // String, required
  client_id: "The id of the associated client", // Integer, required, must match the id of a client entry in the database
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Minimum Viable Product

- Add the code necessary to implement the endpoints listed below.
- Separate the endpoints that begin with `/api/clients` into a separate `Express Router`.

### Endpoints

Configure the API to handle to the following routes:

| Method | Endpoint                | Description                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| client   | /api/clients              | Creates a client using the information sent inside the `request body`.                                                                                                        |
| client   | /api/clients/:id/shipments | Creates a Shipment for the client with the specified id using information sent inside of the `request body`.                                                                   |
| GET    | /api/clients              | Returns an array of all the client objects contained in the database.                                                                                                         |
| GET    | /api/clients/:id          | Returns the client object with the specified id.                                                                                                                              |
| GET    | /api/clients/:id/shipments | Returns an array of all the Shipment objects associated with the client with the specified id.                                                                                 |
| DELETE | /api/clients/:id          | Removes the client with the specified id and returns the **deleted client object**. You may need to make additional calls to the database in order to satisfy this requirement. |
| PUT    | /api/clients/:id          | Updates the client with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.                                           |

#### Endpoint Specifications

When the client makes a `client` request to `/api/clients`:

- If the request body is missing the `title` or `contents` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide title and contents for the client." }`.

- If the information about the _client_ is valid:

  - save the new _client_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _client_.

- If there's an error while saving the _client_:
  - cancel the request.
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ error: "There was an error while saving the client to the database" }`.

When the client makes a `client` request to `/api/clients/:id/shipments`:

- If the _client_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The client with the specified ID does not exist." }`.

- If the request body is missing the `text` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide text for the Shipment." }`.

- If the information about the _Shipment_ is valid:

  - save the new _Shipment_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _Shipment_.

- If there's an error while saving the _Shipment_:
  - cancel the request.
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ error: "There was an error while saving the Shipment to the database" }`.

When the client makes a `GET` request to `/api/clients`:

- If there's an error in retrieving the _clients_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The clients information could not be retrieved." }`.

When the client makes a `GET` request to `/api/clients/:id`:

- If the _client_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The client with the specified ID does not exist." }`.

- If there's an error in retrieving the _client_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The client information could not be retrieved." }`.

When the client makes a `GET` request to `/api/clients/:id/shipments`:

- If the _client_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The client with the specified ID does not exist." }`.

- If there's an error in retrieving the _shipments_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The shipments information could not be retrieved." }`.

When the client makes a `DELETE` request to `/api/clients/:id`:

- If the _client_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The client with the specified ID does not exist." }`.

- If there's an error in removing the _client_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The client could not be removed" }`.

When the client makes a `PUT` request to `/api/clients/:id`:

- If the _client_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The client with the specified ID does not exist." }`.

- If the request body is missing the `title` or `contents` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide title and contents for the client." }`.

- If there's an error when updating the _client_:

  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The client information could not be modified." }`.

- If the client is found and the new information is valid:

  - update the client document in the database using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _client_.

## Stretch Problems

To work on the stretch problems you'll need to enable the `cors` middleware. Follow these steps:

- add the `cors` npm module: `npm i cors`.
- add `server.use(cors())` after `server.use(express.json())`.

Create a new React application and connect it to your server:

- Use `create-react-app` to create an application inside the root folder, name it `client`.
- From the React application connect to the `/api/clients` endpoint in the API and show the list of clients.
- Style the list of clients however you see fit.
