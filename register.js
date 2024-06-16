// alert("this is working");

// import userLoginData from "./userLoginData";

// registering new user

const userLoginData = { "official.pradeepsahu@gmail.com": "123" };

function registerUser(mailId, password) {
  if (!userLoginData[mailId] && mailId !== "") {
    userLoginData[mailId] = password;
    login.removeChild(login.firstElementChild);
    login.classList.remove("show");
  } else {
    alert("Can't register user");
  }
  console.log(userLoginData);
}

// deleting only the existing user

function deleteUser(maidId) {
  if (userLoginData[maidId]) {
    delete userLoginData[maidId];
  } else {
    alert("user doesn't exist");
  }
  console.log(userLoginData);
}

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", () => {
  console.log("is this working");

  const mailId = document.getElementsByName("mail")[0].value;
  const password = document.getElementsByName("pass")[0].value;

  console.log(mailId + " and " + password);
  registerUser(mailId, password);
});

const removeButton = document.querySelector("#removeButton");

removeButton.addEventListener("click", () => {
  const mailId = document.getElementsByName("mail")[0].value;
  const password = document.getElementsByName("pass")[0].value;

  console.log(mailId + " and " + password);
  deleteUser(mailId);
});

const loginButton = document.querySelector("#loginButton");
const login = document.querySelector("#login");

loginButton.addEventListener("click", () => {
  const heading = document.createElement("h1");
  heading.textContent = "Login User";
  login.prepend(heading);
  login.classList.add("show");
});
const signupButton = document.querySelector("#signupButton");
signupButton.addEventListener("click", () => {
  const heading = document.createElement("h1");
  heading.textContent = "signup User";
  login.prepend(heading);
  login.classList.add("show");
});
