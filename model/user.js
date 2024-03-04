const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userInfo: [
    {
      name: String,
      age: String,
      dob: String,
      permanent: String,
      current: String,
      contact: String,
      profession: String,
      doj: String,
      health: String,
      blood: String,
      memberShip: String,
      personalTrainer: String,
    },
  ],
  assessment: [
    {
      clientId: String,
      Package: String,
      dateOfAss: String,
      name: String,
      age: String,
      gender: String,
      workType: String,
      healthIssues: String,
      trainer: String,
      start: String,
      end: String,

      // Physical Assessment

      cardio: String,
      flexibility: String,
      balance: String,
      sholder: String,
      wall: String,
      pushup: String,
      plank: String,
      benchPress: String,
      deathLift: String,
      squats: String,

      // Nutrition Assessment

      food: String,
      total: String,
      snack: String,
      beverages: String,
      meet: String,
      dairy: String,
      veggies: String,
      calorieIntake: String,
    },
  ],

  workoutDetails: [
    {
      clientId: String,
      name: String,
      Package: String,
    },
  ],

  day01: [
    {
      title: String,
      dayOrder: String,

      firstDayfirstWorkoutName: String,
      firstDayfirstSets: String,
      firstDayfirstReps: String,

      firstDaySecondWorkoutName: String,
      firstDaySecondSets: String,
      firstDaySecondReps: String,

      firstDayThirdWorkoutName: String,
      firstDayThirdSets: String,
      firstDayThirdReps: String,

      firstDayFourthWorkoutName: String,
      firstDayFourthSets: String,
      firstDayFourthReps: String,

      firstDayFifthWorkoutName: String,
      firstDayFifthSets: String,
      firstDayFifthReps: String,
    },
  ],
  day02: [
    {
      title: String,
      dayOrder: String,

      secondDayfirstWorkoutName: String,
      secondDayfirstSets: String,
      secondDayfirstReps: String,

      secondDaySecondWorkoutName: String,
      secondDaySecondSets: String,
      secondDaySecondReps: String,

      secondDayThirdWorkoutName: String,
      secondDayThirdSets: String,
      secondDayThirdReps: String,

      secondDayFourthWorkoutName: String,
      secondDayFourthSets: String,
      secondDayFourthReps: String,

      secondDayFifthWorkoutName: String,
      secondDayFifthSets: String,
      secondDayFifthReps: String,
    },
  ],
  day03: [
    {
      title: String,
      dayOrder: String,

      thirdDayfirstWorkoutName: String,
      thirdDayfirstSets: String,
      thirdDayfirstReps: String,

      thirdDaySecondWorkoutName: String,
      thirdDaySecondSets: String,
      thirdDaySecondReps: String,

      thirdDayThirdWorkoutName: String,
      thirdDayThirdSets: String,
      thirdDayThirdReps: String,

      thirdDayFourthWorkoutName: String,
      thirdDayFourthSets: String,
      thirdDayFourthReps: String,

      thirdDayFifthWorkoutName: String,
      thirdDayFifthSets: String,
      thirdDayFifthReps: String,
    },
  ],
  day04: [
    {
      title: String,
      dayOrder: String,

      fourthDayfirstWorkoutName: String,
      fourthDayfirstSets: String,
      fourthDayfirstReps: String,

      fourthDaySecondWorkoutName: String,
      fourthDaySecondSets: String,
      fourthDaySecondReps: String,

      fourthDayThirdWorkoutName: String,
      fourthDayThirdSets: String,
      fourthDayThirdReps: String,

      fourthDayFourthWorkoutName: String,
      fourthDayFourthSets: String,
      fourthDayFourthReps: String,

      fourthDayFifthWorkoutName: String,
      fourthDayFifthSets: String,
      fourthDayFifthReps: String,
    },
  ],
  day05: [
    {
      title: String,
      dayOrder: String,

      fifthDayfirstWorkoutName: String,
      fifthDayfirstSets: String,
      fifthDayfirstReps: String,

      fifthDaySecondWorkoutName: String,
      fifthDaySecondSets: String,
      fifthDaySecondReps: String,

      fifthDayThirdWorkoutName: String,
      fifthDayThirdSets: String,
      fifthDayThirdReps: String,

      fifthDayFourthWorkoutName: String,
      fifthDayFourthSets: String,
      fifthDayFourthReps: String,

      fifthDayFifthWorkoutName: String,
      fifthDayFifthSets: String,
      fifthDayFifthReps: String,
    },
  ],
  day06: [
    {
      title: String,
      dayOrder: String,

      sixthDayfirstWorkoutName: String,
      sixthDayfirstSets: String,
      sixthDayfirstReps: String,

      sixthDaySecondWorkoutName: String,
      sixthDaySecondSets: String,
      sixthDaySecondReps: String,

      sixthDayThirdWorkoutName: String,
      sixthDayThirdSets: String,
      sixthDayThirdReps: String,

      sixthDayFourthWorkoutName: String,
      sixthDayFourthSets: String,
      sixthDayFourthReps: String,

      sixthDayFifthWorkoutName: String,
      sixthDayFifthSets: String,
      sixthDayFifthReps: String,
    },
  ],
  dietPlan: [
    {
      dietType: String,
      goal: String,
      breakFast: String,
      morningSnack: String,
      lunch: String,
      lunchSnack: String,
      dinner: String,
    },
  ],
});

const User = mongoose.model("Users List", userSchema);

module.exports = User;
