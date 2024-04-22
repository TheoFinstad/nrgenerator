function guessNumber() {
    var guess = parseInt(document.getElementById('guessInput').value);
    var randomNumber = Math.floor(Math.random() * 101); 
  
    if (isNaN(guess) || guess < 0 || guess > 100) {
      alert('Please enter a number between 0 and 100.');
    } else if (guess === randomNumber) {
      alert('Congratulations! You guessed the correct number: ' + randomNumber);
    } else {
      alert('Sorry, the correct number was ' + randomNumber + '. Try again!');
    }
  }
  
  function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 101);
    alert('Random number generated: ' + randomNumber);
  }
  
 
  function reloadPage() {
    location.reload();
  }
  
 
  function closeWindow() {
    window.close();
  }
  