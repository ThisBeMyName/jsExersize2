var age = Number(prompt("What is your age?"));

if (age < 0) {
		console.log("Come back once you're out of the womb");
}

else if (age < 21) {
	console.log("You're still pretty young.");
}

else if (age === 21) {
	console.log("Hey, you can drink now!!");
}

else {
	console.log("Now to start getting old.")
}