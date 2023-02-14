const form = document.getElementById("tweet-form");
const input = document.getElementById("tweet-input");
const tweets = document.getElementById("tweets");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const tweet = input.value;
  if (!tweet) return;
  
  const li = document.createElement("li");
  li.classList.add("tweet");
  li.innerHTML = `
    <p class="username">BlueyCode</p>
    <p class="tweet-text">${tweet}</p>
  `;
  
  tweets.prepend(li);
  input.value = "";
});