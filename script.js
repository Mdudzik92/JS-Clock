const secondHand = document.querySelector(".second-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	// seconds / 60 gives the percentage so that 100% = 360 degrees.
	// Then multiplying it by 360 gives the full circle
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
