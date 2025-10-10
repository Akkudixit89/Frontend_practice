const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("userDB"); 
    const users = db.collection("users");
    const pipeline = [{ 
        $group: {
          _id: "$city",
          averageAge: { $avg: "$age" },
          totalUsers: { $sum: 1 }}},
      { $sort: { averageAge: -1 } } ];
    const result = await users.aggregate(pipeline).toArray();
    console.log("Average age of users by city:");
    console.table(result);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }}run();
