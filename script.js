function createTweetButton(){
    const tweetText = "Hello, Twitter! This is a tweet from my website.";
    const twitterURL = `http://127.0.0.1:5501/index.html/intent/tweet?text=${encodeURIComponent(tweeText)}`;
    const tweetButton = document.createElement('a');
    tweetButton.textContent = 'Tweet';
    tweetButton.href = twitterURL;
    tweetButton.target = '_blank';

    const tweeButtonContainer = document.getElementById('tweetButtonContainer');
    tweetButtonContainer.appendChild(tweetButton);
}

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 1000) {
        createTweetButton();
    }
});