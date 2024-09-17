# Healthcare API

This project is a simple API for managing healthcare services using Node.js, Express, and MongoDB.
## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community)
- **Postman** (optional): [Download and install Postman](https://www.postman.com/downloads/)

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/adityadav69/healthcare-api.git
2. **Navigate to project directory**
3. **Install the dependencies**
      npm install
4. **Set Up Environment Variables**
     # Create a .env file in the root of the project and add the following content:
      MONGO_URI=mongodb://localhost:27017/healthcare
      PORT=5000
    # Replace mongodb://localhost:27017/healthcare with your MongoDB connection string if it's different.
6. **Running the Project**
      npm start
   
##  Testing API Endpoints

1. **Add a New Service**
   # Method: POST
 URL: http://localhost:5000/api/services
 Request Body:
 json
 {
  "name": "Service Name",
  "description": "Service Description",
  "price": 100
}
# Steps:
 Open Postman.
 Select the POST method.
 Enter the URL: http://localhost:5000/api/services.
 Go to the Body tab.
 Select raw and choose JSON from the dropdown.
 Paste the JSON example provided above.
 Click Send.


 2. **Get All Services**
# Method: GET
URL: http://localhost:5000/api/services
Steps:
Open Postman.
Select the GET method.
Enter the URL: http://localhost:5000/api/services.
Click Send.


3. **Update a Service**
# Method: PUT
URL: http://localhost:5000/api/services/:id
Replace :id with the ID of the service you want to update.
Request Body:
json
{
  "name": "Updated Service Name",
  "description": "Updated Service Description",
  "price": 150
}

# Steps:
Open Postman.
Select the PUT method.
Enter the URL: http://localhost:5000/api/services/<service-id>.
Go to the Body tab.
Select raw and choose JSON from the dropdown.
Paste the JSON example provided above.
Click Send.


4. **Delete a Service**
# Method: DELETE
URL: http://localhost:5000/api/services/:id
Replace :id with the ID of the service you want to delete.
# Steps:
Open Postman.
Select the DELETE method.
Enter the URL: http://localhost:5000/api/services/<service-id>.
Click Send.


Testing the API
To test the API, you can use Postman to make requests to the endpoints mentioned above. Here’s how you can test each endpoint:

Add a New Service: Use the POST request to add a new service and verify that it appears in the GET request results.
Get All Services: Use the GET request to retrieve all services and check the response.
Update a Service: Use the PUT request to update an existing service and verify the changes using the GET request.
Delete a Service: Use the DELETE request to remove a service and confirm its deletion using the GET request.


