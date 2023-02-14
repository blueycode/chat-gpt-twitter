const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "BlueyCode" && password === "123321") {
    window.location.href = "feed.html";
  } else {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "The supplied credentials are not valid";
    submitBtn.style.borderColor = "lightred";
  }
});
