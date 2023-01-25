import API_KEY from "./api";

const BASE_URL = "https://api.github.com/users/JakeTurnick";
const ORG_URL = "https://api.github.com/users/JakeTurnick/orgs";
const REPO_URL = "https://api.github.com/users/JakeTurnick/repos";
const userName = "JakeTurnick";

// PROFILE SECTION
function generateProfile(data) {
  const source = document.getElementById("profile-template").innerHTMLl;
  const template = Handlebars.compile(source);

  const html = template(data);

  document
    .querySelector(".profile-container")
    .insertAdjacentHTML("afterbegin", html);
}

// ORGANIZATION SECTION
function generateOrgs(data) {
  const source = document.getElementById("org-template").innerHTMLl;
  const template = Handlebars.compile(source);

  const html = template(data);

  document
    .querySelector(".profile-container")
    .insertAdjacentHTML("afterbegin", html);
}

// REPO SECTION
function generateRepos(data) {
  const source = document.getElementById("repo-template").innerHTMLl;
  const template = Handlebars.compile(source);

  const html = template(data);

  document
    .querySelector(".profile-container")
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
