document.getElementById('heart').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the heart

    const messageDiv = document.getElementById('message');
    const birthdayMessageElement = document.getElementById('birthday-message');
    const longMessageElement = document.getElementById('long-message');
    const cupcakeImage = document.getElementById('cupcake-image');
    const additionalMessage = document.getElementById('additional-message');
    messageDiv.classList.remove('hidden');

    // Change the background to white
    document.body.classList.add('white-background');

    // Display the long birthday message with typing and fade-in animations
    longMessageElement.innerHTML = "Happy Birthday! 🎉 I want you to know how much you mean to me. I love you more than words can express, and I'm here for you always. I hope your special day is filled with joy, laughter, and all the love in the world!";
    longMessageElement.classList.remove('hidden');
    longMessageElement.classList.add('typing');

    // Display the birthday message with animations
    setTimeout(() => {
        birthdayMessageElement.innerHTML = "Happy Birthday! 🎉";
        birthdayMessageElement.classList.add('fade-in', 'tilt');

        // Show the cupcake image and additional message after a delay
        setTimeout(() => {
            cupcakeImage.classList.remove('hidden'); // Show the cupcake image
            additionalMessage.innerHTML = "Wishing you a day full of fun and laughter! 🎊";
            additionalMessage.classList.remove('hidden');
            additionalMessage.classList.add('fade-in', 'tilt'); // Apply fade-in and tilt animations
        }, 1000); // Adjust delay to match the duration of the fade-in animation
    }, 2000); // Delay to allow the long message animation to complete

    startConfetti(); // Start confetti animation
});

function startConfetti() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    function confettiAnimation() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                x: Math.random(),
                y: Math.random()
            },
            // Limit the confetti to the screen bounds
            bounds: {
                x: 0,
                y: 0,
                width: screenWidth,
                height: screenHeight
            }
        });
    }

    // Generate confetti continuously
    setInterval(confettiAnimation, 500); // Adjust the interval timing here
}
