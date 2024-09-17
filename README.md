# Healthcare API

This project provides a simple API for managing healthcare services using Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- **Node.js (version 14 or later recommended):** [Download and install Node.js](https://nodejs.org/)
- **MongoDB:** [Download and install MongoDB](https://www.mongodb.com/try/download/community)
- **Postman (optional):** [Download and install Postman](https://www.postman.com/downloads/) for making API requests

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/adityadav69/healthcare-api.git](https://github.com/adityadav69/healthcare-api.git)

   cd healthcare-api

   npm install

   MONGO_URI=mongodb://localhost:27017/healthcare  # Replace with your MongoDB connection string
   PORT=5000                                         # Adjust port if needed

   npm start

 2.  **Testing the Healthcare API**
1. Add a New Service

Method: POST

URL: http://localhost:5000/api/services

Request Body (JSON):

JSON
{
  "name": "New Service",
  "description": "Description of the new service",
  "price": 99.99
}
Use code with caution.

Steps:

Open Postman or a similar HTTP client.
Set the HTTP method to POST.
Enter the URL: http://localhost:5000/api/services.
In the request body, paste the JSON data provided above.
Click Send.
If the service is added successfully, you should receive a response with a status code of 201 and the newly created service's data.
2. Get All Services

Method: GET
URL: http://localhost:5000/api/services
Steps:
Open Postman or a similar HTTP client.
Set the HTTP method to GET.
Enter the URL: http://localhost:5000/api/services.
Click Send.
If the API is working correctly, you should receive a response with a status code of 200 and a list of all the existing services.
3. Update a Service

Method: PUT

URL: http://localhost:5000/api/services/:id (replace :id with the actual service's ID)

Request Body (JSON):

JSON
{
  "name": "Updated Service Name",
  "description": "Updated Description",
  "price": 129.99
}
Use code with caution.

Steps:

Open Postman or a similar HTTP client.
Set the HTTP method to PUT.
Enter the URL, replacing :id with the ID of the service you want to update.
In the request body, paste the JSON data provided above.
Click Send.
If the service is updated successfully, you should receive a response with a status code of 200 and the updated service's data.
4. Delete a Service

Method: DELETE
URL: http://localhost:5000/api/services/:id (replace :id with the actual service's ID)
Steps:
Open Postman or a similar HTTP client.
Set the HTTP method to DELETE.
Enter the URL, replacing :id with the ID of the service you want to delete.
Click Send.
If the service is deleted successfully, you should receive a response with a status code of 204.  
