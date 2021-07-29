const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	// Seconds / 60 gives the percentage so that 100% = 360 degrees.
	// Adding 90 offsets the default 90degrees transform in the CSS
	const secondsDegrees = (seconds / 60) * 360 + 90;
	// Applying transform style to second-hand div using ES6 template literal
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = (mins / 60) * 360 + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}

setInterval(setDate, 1000);
