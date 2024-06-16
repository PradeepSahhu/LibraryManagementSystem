// alert("this is working");

// import userLoginData from "./userLoginData";

// registering new user

const userLoginData = { "official.pradeepsahu@gmail.com": "123" };

// local variables
const submitButton = document.querySelector("#submitButton");
const heading = document.querySelector(".headingText");
const removeButton = document.querySelector("#removeButton");

function registerUser(mailId, password) {
  if (!userLoginData[mailId] && mailId !== "") {
    userLoginData[mailId] = password;
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

submitButton.addEventListener("click", () => {
  console.log("is this working");

  const mailId = document.getElementsByName("mail")[0].value;
  const password = document.getElementsByName("pass")[0].value;

  console.log(mailId + " and " + password);
  registerUser(mailId, password);
});

removeButton.addEventListener("click", () => {
  const mailId = document.getElementsByName("mail")[0].value;
  const password = document.getElementsByName("pass")[0].value;

  console.log(mailId + " and " + password);
  deleteUser(mailId);
});

const loginButton = document.querySelector("#loginButton");
const login = document.querySelector("#login");

loginButton.addEventListener("click", () => {
  signup.classList.remove("show");

  heading.textContent = "Login User";
  login.prepend(heading);
  login.classList.add("show");
});

const signup = document.querySelector("#signup");
const signupButton = document.querySelector("#signupButton");
signupButton.addEventListener("click", () => {
  login.classList.remove("show");

  heading.textContent = "signup User";
  signup.prepend(heading);
  signup.classList.add("show");
});

// Book section

const bookSection = document.querySelector(".bookSection");

const books = [
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
  {
    imgSrc: "./book1.jpg",
    title: "Advance Data Structures and Algorithm Book",
    description: "Mainly use for high level skills in DSA",
  },
];

books.forEach((book) => {
  const article = document.createElement("article");
  article.classList.add("eachBook");

  const bookElements = document.createElement("div");
  bookElements.classList.add("bookElements");

  const img = document.createElement("img");
  img.src = book.imgSrc;
  img.width = 200;
  img.height = 300;

  const title = document.createElement("h5");
  title.textContent = book.title;

  const description = document.createElement("p");
  description.textContent = book.description;

  bookElements.appendChild(img);
  bookElements.appendChild(title);
  bookElements.appendChild(description);
  article.appendChild(bookElements);

  bookSection.appendChild(article);
});
