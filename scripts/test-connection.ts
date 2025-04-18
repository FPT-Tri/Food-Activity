import clientPromise from "../lib/mongodb"

async function testConnection() {
  try {
    console.log("Testing MongoDB connection...")
    const client = await clientPromise
    const db = client.db("ActivityAndFood")

    // Test activities collection
    const activitiesCount = await db.collection("activities").countDocuments()
    console.log(`Activities collection has ${activitiesCount} documents`)

    if (activitiesCount > 0) {
      const sampleActivity = await db.collection("activities").findOne({})
      console.log("Sample activity:", sampleActivity)
    }

    // Test locations collection
    const locationsCount = await db.collection("locations").countDocuments()
    console.log(`Locations collection has ${locationsCount} documents`)

    // Test districts collection
    const districtsCount = await db.collection("districts").countDocuments()
    console.log(`Districts collection has ${districtsCount} documents`)

    // Test foods collection
    const foodsCount = await db.collection("foods").countDocuments()
    console.log(`Foods collection has ${foodsCount} documents`)

    // Test restaurants collection
    const restaurantsCount = await db.collection("restaurants").countDocuments()
    console.log(`Restaurants collection has ${restaurantsCount} documents`)

    console.log("MongoDB connection test completed successfully!")
  } catch (error) {
    console.error("MongoDB connection test failed:", error)
  } finally {
    process.exit()
  }
}

testConnection()
