import clientPromise from "../lib/mongodb"
import { activities, locations } from "../lib/data"
import { districts, foods, restaurants } from "../lib/food-data"

async function migrateData() {
  try {
    console.log("Starting migration...")
    const client = await clientPromise
    const db = client.db("ActivityAndFood")

    // Clear existing collections
    console.log("Clearing existing collections...")
    await db.collection("activities").deleteMany({})
    await db.collection("locations").deleteMany({})
    await db.collection("districts").deleteMany({})
    await db.collection("foods").deleteMany({})
    await db.collection("restaurants").deleteMany({})

    console.log("Collections cleared")

    // Insert activities
    console.log("Inserting activities...")
    if (activities.length > 0) {
      const activitiesResult = await db.collection("activities").insertMany(activities)
      console.log(`${Object.keys(activitiesResult.insertedIds).length} activities inserted`)
    } else {
      console.log("No activities to insert")
    }

    // Insert locations
    console.log("Inserting locations...")
    if (locations.length > 0) {
      const locationsResult = await db.collection("locations").insertMany(locations)
      console.log(`${Object.keys(locationsResult.insertedIds).length} locations inserted`)
    } else {
      console.log("No locations to insert")
    }

    // Insert districts
    console.log("Inserting districts...")
    if (districts.length > 0) {
      const districtsResult = await db.collection("districts").insertMany(districts)
      console.log(`${Object.keys(districtsResult.insertedIds).length} districts inserted`)
    } else {
      console.log("No districts to insert")
    }

    // Insert foods
    console.log("Inserting foods...")
    if (foods.length > 0) {
      const foodsResult = await db.collection("foods").insertMany(foods)
      console.log(`${Object.keys(foodsResult.insertedIds).length} foods inserted`)
    } else {
      console.log("No foods to insert")
    }

    // Insert restaurants
    console.log("Inserting restaurants...")
    if (restaurants.length > 0) {
      const restaurantsResult = await db.collection("restaurants").insertMany(restaurants)
      console.log(`${Object.keys(restaurantsResult.insertedIds).length} restaurants inserted`)
    } else {
      console.log("No restaurants to insert")
    }

    console.log("Migration completed successfully")
  } catch (error) {
    console.error("Migration failed:", error)
  } finally {
    process.exit()
  }
}

migrateData()
