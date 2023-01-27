import API_KEY from "./api.js";

const BASE_URL = "https://api.github.com/users/JakeTurnick";
const ORG_URL = "https://api.github.com/users/JakeTurnick/orgs";
const REPO_URL = "https://api.github.com/users/JakeTurnick/repos";
const userName = "JakeTurnick";

// PROFILE SECTION
function generateProfile(data) {
  const source = document.getElementById("profile-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(data);

  document
    .querySelector(".profile-container")
    .insertAdjacentHTML("afterbegin", html);
}

// ORGANIZATION SECTION
function generateOrgs(data) {
  const newData = { orgs: data };
  const source = document.getElementById("org-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(newData);

  document.querySelector(".org-container").insertAdjacentHTML("afterend", html);
}

// REPO SECTION
function generateRepos(data) {
  const newData = { repos: data };
  console.log("newdata", newData);
  const source = document.getElementById("repo-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(newData);

  document
    .querySelector(".repo-container")
    .insertAdjacentHTML("afterbegin", html);
}

fetch(BASE_URL)
  .then((response) => response.json())
  .then((data) => generateProfile(data));

fetch(ORG_URL)
  .then((response) => response.json())
  .then((data) => generateOrgs(data));

fetch(REPO_URL)
  .then((response) => response.json())
  .then((data) => generateRepos(data));
