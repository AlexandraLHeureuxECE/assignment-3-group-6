const fs = require("fs");
const insertRow = require("./insertRow.js");
const parser = require("csv-parser");

// fs.createReadStream("../config/csvs/Division.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "Division");
//   })
//   .on("end", function () {
//     console.log("Complete adding to Division");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/Team.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "Team");
//   })
//   .on("end", function () {
//     console.log("Complete adding to Team");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/Game.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "Game");
//   })
//   .on("end", function () {
//     console.log("Complete adding to Game");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/TeamAbbreviation.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "TeamAbbreviation");
//   })
//   .on("end", function () {
//     console.log("Complete adding to TeamAbbreviation");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/DefensiveFootballPlayer.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "DefensiveFootballPlayer");
//   })
//   .on("end", function () {
//     console.log("Complete adding to DefensiveFootballPlayer");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/OffensiveFootballPlayer.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "OffensiveFootballPlayer");
//   })
//   .on("end", function () {
//     console.log("Complete adding to OffensiveFootballPlayer");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// fs.createReadStream("../config/csvs/Kicker.csv")
//   .pipe(parser({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     //console.log(row);
//     insertRow(row, "Kicker");
//   })
//   .on("end", function () {
//     console.log("Complete adding to Kicker");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
