const getSubmitBtn = document.querySelector(".submitBtn");

getSubmitBtn.addEventListener("click", () => {
  confirm("You're about to  submit!");
  alert("Congratulations! You've successfully registered!");
});

fetch("https://random-data-api.com/api/v2/users")
  .then((message) => console.log(message.json()))
  .then((err) => console.log(err));
