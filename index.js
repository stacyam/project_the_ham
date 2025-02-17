// ################ SERVICES ###############

$(".menu-services").on("click", "button", function () {
  $(this).addClass("active").siblings().removeClass("active");
  let id = this.innerText.replace(/ /, "-").toLowerCase();
  $(`#${id}`).addClass("active").siblings().removeClass("active");
});
// ###########PEOPLE####################
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");
let clientItems = document.querySelectorAll(".img-people");
let anna = document.querySelector("#anna");
let artem = document.querySelector("#artem");
let hasan = document.querySelector("#hasan");
let olga = document.querySelector("#olga");

let startIndex = 0;

prevBtn.addEventListener("click", () => {
  if (startIndex > 0) {
    leftOrRight("left");
  } else {
    startIndex = clientItems.length - 2;
    console.log(clientItems.length);
    leftOrRight("right");
  }
});

nextBtn.addEventListener("click", () => {
  if (startIndex < clientItems.length - 1) {
    leftOrRight("right");
  } else {
    startIndex = -1;
    leftOrRight("right");
  }
});

clientItems.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    leftOrRight(e.target.classList[1], index);
  });
});

const leftOrRight = (directionOrName, index) => {
  if (directionOrName === "left") {
    startIndex--;
  } else if (directionOrName === "right") {
    startIndex++;
  } else {
    startIndex = index;
  }

  let imageArray = Array.from(clientItems);

  const peopleArray = { anna, artem, hasan, olga };
  let active;

  for (const person in peopleArray) {
    peopleArray[person].classList.remove("active");
  }

  if (directionOrName !== "left" && directionOrName !== "right") {
    active = peopleArray[directionOrName];
  } else {
    active = peopleArray[imageArray[startIndex].classList[1]];
  }

  imageArray.forEach((photo, index) => {
    index === startIndex
      ? photo.classList.add("active")
      : photo.classList.remove("active");
  });

  active.classList.add("active");
};

// ##############OUR AMAZING WORK####################
function Gallery() {
  let COUNT = 0;
  let COUTN_ITEMS = 12;
  let SET_TIMEOUT = 3000;
  let images = [
    {
      data: "graphic_design",
      src: "./img/our_amazing_work/img2.png",
    },
    {
      data: "web_design",
      src: "./img/our_amazing_work/img1.png",
    },
    {
      data: "landing_pages",
      src: "./img/our_amazing_work/img2.png",
    },
    {
      data: "wordpress",
      src: "./img/our_amazing_work/img3.png",
    },
    {
      data: "graphic_design",
      src: "./img/our_amazing_work/img4.png",
    },
    {
      data: "web_design",
      src: "./img/our_amazing_work/img5.png",
    },
    {
      data: "landing_pages",
      src: "./img/our_amazing_work/img6.png",
    },
    {
      data: "wordpress",
      src: "./img/our_amazing_work/img7.png",
    },
    {
      data: "graphic_design",
      src: "./img/our_amazing_work/img8.png",
    },
    {
      data: "web_design",
      src: "./img/our_amazing_work/img9.png",
    },
    {
      data: "landing_pages",
      src: "./img/our_amazing_work/img10.png",
    },
    {
      data: "wordpress",
      src: "./img/our_amazing_work/img10.png",
    },
  ];
  const listenerAll = () => {
    let menuItems = document.querySelectorAll("[data-menu]");

    for (const element of menuItems) {
      element.addEventListener("click", change, false);
    }
  };

  const clear = () => {
    let menuElements = document.querySelectorAll("[data-menu]");

    for (const element of menuElements) {
      element.classList.remove("active");
    }
  };

  const change = (e) => {
    clear();
    e.target.classList.add("active");
    let contentItems = document.querySelectorAll("[data-gallery]");
    let id = e.currentTarget.getAttribute("data-menu");

    for (const content of contentItems) {
      if (content.getAttribute("data-gallery") !== id && id !== "all") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
  };

  const loadMore = () => {
    const loadMore = document.querySelector(".btn-load");

    loadMore.addEventListener("click", createImage);
  };

  const createImage = () => {
    const galleryContent = document.querySelector(".gallery .amazing_images");
    const loadMore = document.querySelector(".btn-load");
    loadMore.classList.add("loader");

    setTimeout(() => {
      loadMore.classList.remove("loader");
    }, SET_TIMEOUT);

    const createArr = ([...source], maxLength) =>
      Array.from({ length: Math.ceil(images.length / COUTN_ITEMS) }, () =>
        source.splice(0, maxLength)
      );

    const imageArrays = createArr(images, COUTN_ITEMS);

    setTimeout(() => {
      if (imageArrays.length >= COUNT + 1) {
        for (const image of imageArrays[COUNT]) {
          const div = document.createElement("div");
          const imageTeg = document.createElement("img");
          div.classList.add("image-item");
          div.setAttribute("data-gallery", image.data);
          imageTeg.setAttribute("src", image.src);
          div.append(imageTeg);
          galleryContent.append(div);
        }
      }

      COUNT++;

      if (COUNT === imageArrays.length) {
        loadMore.remove();
      }
    }, SET_TIMEOUT);
  };

  listenerAll();
  loadMore();
}

document.addEventListener("DOMContentLoaded", () => {
  Gallery();
});
