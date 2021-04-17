# workout-tracker

## User Story

This app allows the user to view create and track daily workouts. The user is able to log multiple exercises in a workout on a given day. The user is also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user is able to track the distance traveled.



> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

## Technologies Used
This assignment required me to create a Mongo database with a Mongoose schema and handle routes with Express.

