const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "ecommerce";

// Collection Name
const collectionName = "products";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Insert a document
   // Insert a document (car product)
await collection.insertOne({
  name: "Tesla Model S",
  brand: "Tesla",
  type: "Car",
  price: 79999,
  colors: ["Red", "Blue", "White"],
  dateAdded: new Date(),
});
console.log("Car product inserted")

    // Insert another document
    const insertResult = await collection.insertOne({
      name: "BMW X5",
      brand: "BMW",
      type: "Car",
      price: 69999,
      colors: ["Black", "Silver", "Grey"],
      dateAdded: new Date(),
    });
    console.log(`Car product inserted with id: ${insertResult.insertedId}`);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
  }
}

main().catch(console.error);