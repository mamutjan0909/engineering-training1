console.log("Engineering Training!");

// let dataLoaded = false;

// function loadData() {

//   whenClicked();

//   setTimeout(function () {

//     renderData().then((response) => {
//       dataLoaded = true;
//       list[0].innerHTML = response;
//       whenCloseClicked();
//       return response;
//     });
//     console.log("Data loaded");
//   }, 2000);

//   if (dataLoaded == true) {
//     console.log("Date Already Loaded");
//     return;
//   }
// }
const titles = [
  "Create and publish a public repository in GitHub under your personal account named 'Engineering Training'",
  "Create index.html with basic html markup and perform first commit",
  "Add anchor tags for each completed subtasks",
  "Make unordered list of anchor tags",
  "Add the TWM logo as an image to the beginning of the body of the page",
  "Add style attributes to img tag to setting the height and width of the logo",
  "Add a head, add a style tag to the head, add a class to style tag, move logo styles to style tag, remove inline styles from logo, add class to the logo",
  "Add a selector inside style tag that targets the list items and removes the bullet",
  "Pseudo-selectors - Add hover styling to list elements",
  "UI Libraries - Add Bootstrap to your page, add check icons to your list, and convert your list into a bootstrap list-group",
];
const links = [
  "https://totalwine.atlassian.net/browse/DIG-70749",
  "https://totalwine.atlassian.net/browse/DIG-70771",
  "https://totalwine.atlassian.net/browse/DIG-70804",
  "https://totalwine.atlassian.net/browse/DIG-70805",
  "https://totalwine.atlassian.net/browse/DIG-70905",
  "https://totalwine.atlassian.net/browse/DIG-70918",
  "https://totalwine.atlassian.net/browse/DIG-70993",
  "https://totalwine.atlassian.net/browse/DIG-71030",
  "https://totalwine.atlassian.net/browse/DIG-71062",
  "https://totalwine.atlassian.net/browse/DIG-71085",
];
const jirasArray = [];
for (let index = 0; index < titles.length; index++) {
  jirasArray.push({
    title: titles[index],
    link: links[index],
  });
}
const list = document.getElementsByClassName("grid-container");

// function renderData() {
//   return new Promise((resolve) => {
//     let response = "";
//     jirasArray.forEach((element) => {
//       const { link, title } = element;
//       response += `<li class="item"><a href= ${link}>
//       <i class="bi bi-check-circle-fill">
//       </i> ${title}
//       </a></li>`;
//     });
//     resolve(response);
//   });
// }
let dataLoaded = false;

const utils = {
  renderData: function () {
    return new Promise((resolve) => {
      let response = "";
      jirasArray.forEach((element) => {
        const { link, title } = element;
        response += `<li class="item"><a href= ${link}>
              <i class="bi bi-check-circle-fill">
              </i> ${title}
              </a></li>`;
      });
      resolve(response);
    });
  },

  loadData: function () {
    if (dataLoaded == true) {
      console.log("Date Already Loaded");
      return;
    }
    //whenClicked();

    this.renderData().then(function (response) {
      setTimeout(function () {
        list[0].innerHTML = response;
        whenCloseClicked();
        return response;
      }, 2000);
    });
  },
};
const modalButton = document.getElementById("modalButton");
modalButton.addEventListener("click",function () {
  

utils.loadData()
});



function whenClicked() {
  console.log("Clicked!");
  const modalContainer = document.getElementById("modal");
  modalContainer.classList.toggle("hidden");
  console.log(modalContainer.classList);
}

function whenCloseClicked() {
  console.log("Clicked Close!");
  const modalContainer = document.getElementById("modal");
  modalContainer.classList.toggle("hidden");
}
const closeModalButton = document.getElementsByClassName("closeModal");
closeModalButton[0].addEventListener("click", whenCloseClicked);
