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

    // Display the birthday message with typing and tilt animations
    birthdayMessageElement.innerHTML = "Happy Birthday! 🎉";
    birthdayMessageElement.classList.remove('hidden');
    birthdayMessageElement.classList.add('typing');

    setTimeout(() => {
        birthdayMessageElement.classList.remove('typing');
        birthdayMessageElement.classList.add('tilt');

        // Show the cupcake image with scale-up animation
        setTimeout(() => {
            cupcakeImage.classList.remove('hidden');
            cupcakeImage.classList.add('scale-up');

            // Display the long message with fade-in animation
            setTimeout(() => {
                longMessageElement.innerHTML = "I want you to know how much you mean to me. I love you more than words can express, and I'm here for you always. I hope your special day is filled with joy, laughter, and all the love in the world!";
                longMessageElement.classList.remove('hidden');
                longMessageElement.classList.add('fade-in');

                // Display the additional message with typing and tilt animations
                setTimeout(() => {
                    additionalMessage.innerHTML = "Wishing you a day full of fun and laughter! 🎊";
                    additionalMessage.classList.remove('hidden');
                    additionalMessage.classList.add('typing');

                    setTimeout(() => {
                        additionalMessage.classList.remove('typing');
                        additionalMessage.classList.add('tilt');
                    }, 2000); // Adjust delay to match the typing duration

                }, 2000); // Delay to match the fade-in duration of the long message
            }, 1000); // Delay to match the appearance of the cupcake image
        }, 1000); // Delay to allow the tilt animation to complete
    }, 2000); // Delay to allow the typing animation to complete

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
