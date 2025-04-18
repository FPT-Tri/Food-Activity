import clientPromise from "./mongodb"
import type { Activity, Location, District, Food, Restaurant } from "./models"

// Activities
export async function getAllActivities(): Promise<Activity[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("activities").find({}).sort({ id: 1 }).toArray() as Promise<Activity[]>
  } catch (error) {
    console.error("Error getting all activities:", error)
    return []
  }
}

export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("activities").findOne({ slug }) as Promise<Activity | null>
  } catch (error) {
    console.error(`Error getting activity by slug ${slug}:`, error)
    return null
  }
}

export async function getLocations(activitySlug: string): Promise<Location[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("locations").find({ activitySlug }).sort({ id: 1 }).toArray() as Promise<Location[]>
  } catch (error) {
    console.error(`Error getting locations for activity ${activitySlug}:`, error)
    return []
  }
}

// Districts
export async function getAllDistricts(): Promise<District[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("districts").find({}).sort({ id: 1 }).toArray() as Promise<District[]>
  } catch (error) {
    console.error("Error getting all districts:", error)
    return []
  }
}

export async function getDistrictBySlug(slug: string): Promise<District | null> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("districts").findOne({ slug }) as Promise<District | null>
  } catch (error) {
    console.error(`Error getting district by slug ${slug}:`, error)
    return null
  }
}

// Foods
export async function getAllFoods(): Promise<Food[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("foods").find({}).sort({ id: 1 }).toArray() as Promise<Food[]>
  } catch (error) {
    console.error("Error getting all foods:", error)
    return []
  }
}

export async function getFoodBySlug(slug: string): Promise<Food | null> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("foods").findOne({ slug }) as Promise<Food | null>
  } catch (error) {
    console.error(`Error getting food by slug ${slug}:`, error)
    return null
  }
}

export async function getFoodsByDistrict(districtSlug: string): Promise<Food[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db.collection("foods").find({ districts: districtSlug }).sort({ id: 1 }).toArray() as Promise<Food[]>
  } catch (error) {
    console.error(`Error getting foods for district ${districtSlug}:`, error)
    return []
  }
}

// Restaurants
export async function getRestaurantsByDistrictAndFood(districtSlug: string, foodSlug: string): Promise<Restaurant[]> {
  try {
    const client = await clientPromise
    const db = client.db("ActivityAndFood")
    return db
      .collection("restaurants")
      .find({ district: districtSlug, foods: foodSlug })
      .sort({ rating: -1 })
      .toArray() as Promise<Restaurant[]>
  } catch (error) {
    console.error(`Error getting restaurants for district ${districtSlug} and food ${foodSlug}:`, error)
    return []
  }
}
