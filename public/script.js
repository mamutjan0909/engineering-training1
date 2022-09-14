(async function () {
  console.log("Engineering Training!");

  function initModalButton() {
    return new Promise((resolve) => {
      var dataLoaded = false;
      const modalButton = document.getElementById("modalButton");
      modalButton.addEventListener("click", () => {
        if (dataLoaded === false) {
          resolve();
        }
      });
    })
      .then(utils.loadData(() => {
        dataLoaded = true;
      }));
  }

  const utils = {
    loadData: async function (callback) {
      const response = await fetch("/getJiraTickets");
      const data = await response.json();
      console.log(data);
      setTimeout(whenCloseClicked, 1000);

      setTimeout(() => {
        this.renderData().then((response) => {
          list[0].innerHTML = response;
          return response;
        });
      }, 2000);
      callback();

      setTimeout(() => {
        let modalContainer = document.getElementById("modal");
        modalContainer.classList.add("hidden");
      }, 2000)
    },
    renderData: function () {
      let response = "";
      return new Promise((resolve) => {
        jiraHandler.jirasObject.forEach((element) => {
          let { link, title, icon } = element;
          response += `<li class="item"><a href= ${link}> 
        <i class="${icon}">
        </i> ${title} 
        </a></li>`;
        });
        resolve(response);
      });
    },
  };

  function whenCloseClicked() {
    console.log("Clicked Close!");
    const modalContainer = document.getElementById("modal");
    modalContainer.classList.toggle("hidden");
  }

  const closeModalButton = document.getElementsByClassName("closeModal");

  closeModalButton[0].addEventListener("click", whenCloseClicked);

  const list = document.getElementsByClassName("grid-container");

  console.log("BEFORE initModalButton is called");
  await initModalButton();
  console.log("AFTER initModalButton is called");

})();