document.getElementById('heart').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the heart

    const messageDiv = document.getElementById('message');
    const messageElement = document.getElementById('birthday-message');
    messageDiv.classList.remove('hidden');

    // Change the background to white
    document.body.classList.add('white-background');

    const message = "Happy Birthday! 🎉";
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100); // Adjust typing speed here
        }
    }

    typeMessage();
});
