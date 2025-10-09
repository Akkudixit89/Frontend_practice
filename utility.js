#!/usr/bin/env node

// Import 'readline' for command-line input
const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Choose a task:");
console.log("1. Convert text to UPPERCASE");
console.log("2. Calculate factorial");
console.log("3. Generate random password");

rl.question("Enter your choice (1/2/3): ", function(choice) {
  if (choice === "1") {
    rl.question("Enter text: ", function(text) {
      console.log("Uppercase:", text.toUpperCase());
      rl.close();
    });
  } 
  else if (choice === "2") {
    rl.question("Enter a number: ", function(num) {
      num = parseInt(num);
      let fact = 1;
      for (let i = 1; i <= num; i++) fact *= i;
      console.log(`Factorial of ${num} = ${fact}`);
      rl.close();
    });
  } 
  else if (choice === "3") {
    rl.question("Enter password length: ", function(len) {
      len = parseInt(len);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
      let password = "";
      for (let i = 0; i < len; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      console.log("Random Password:", password);
      rl.close();
    });
  } 
  else {
    console.log("Invalid choice! Please run again.");
    rl.close();
  }
});
