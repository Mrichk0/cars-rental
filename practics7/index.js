const slides = [
  {
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    alt: "captain text 1",
  },
  {
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    alt: "captain text 2",
  },
  {
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    alt: "captain text 3",
  },
];

class Slider {
  constructor(
    arrey = [],
    selector,
    { loop = false, navs = false, pags = true, auto = false, delay = 5 }
  ) {
    this.parent = document.querySelector(selector);
    this.imgRef = this.perent.querySelector(".slider-img");
    this.rightBtn = this.parent.querySelector(".right");
    this.leftBtn = this.parent.querySelector(".left");
    this.dotsList = this.parent.querySelector(".list");
    this.totalNumber = this.parent.querySelector(".total");
    this.curentNumber = this.parent.querySelector(".index");
    this.arrey = arrey;
    this.loop = loop;
    this.navs = navs;
    this.pags = pags;
    this.auto = auto;
    this.delay = delay;
    this.indexSlider = 0;
  }

  init() {
    if (this.navs) {
      this.makeNavs();
    }
    if (this.pags) {
      this.createDotsMarkUp();
      this.makePags();
      this.onClickpagsNavigations();
    }
    this.addSlider();
    this.doIndecator();
    this.onClick();
  }

  makeNavs() {
    const btnList = this.parent.querySelector(".button-list");
    btnList.classList.remove("visually-hidden");
  }

  makePags() {
    this.parent.querySelector(".list").classList.remove("visually-hidden");
  }

  addSlider() {
    const { img, text } = this.arrey[this.indexSlider];
    this.imgRef.scr = img;
    this.imgRef.alt = text;
  }

  doIndecator() {
    this.curentNumber.textContent = this.indexSlider + 1;
    if (!this.totalNumber.textContent) {
      this.totalNumber.textContent = this.arrey.length;
    }
  }

  changeImg = (e) => {
    if (e.target.classList.contains("right")) {
      if (this.loop) {
        if (this.indexSlider < this.arrey.length - 1) {
          this.indexSlider += 1;
        } else {
          this.indexSlider = 0;
        }
      } else {
        if (this.indexSlider < this.arrey.length - 1) {
          this.indexSlider += 1;
        }
      }
    } else {
      if (this.loop) {
        if (this.indexSlider > 0) {
          this.indexSlider -= 1;
        } else {
          this.indexSlider = this.arrey.length - 1;
        }
      } else {
        if (this.indexSlider > 0) {
          this.indexSlider = 0;
        }
      }
    }
    this.addSlider();
    this.activeChange();
    this.doIndecator();
  };

  onClick() {
    this.rightBtn.addEventListener("click", this.changeImg);
    this.leftBtn.addEventListener("click", this.changeImg);
  }

  createDotsMarkUp() {
    const markUp = this.arrey
      .map(
        (element, index) =>
          `<li class="dots ${
            index === 0 ? "active" : ""
          }" data-index=${index} ></li>`
      )
      .join("");
    this.dotsList.insertAdjacentHTML("afterbegin", markUp);
  }

  onClickpagsNavigations() {
    this.dotsList.addEventListener("click", this.changePagsImg);
  }

  changePagsImg = (e) => {
    if (!e.target.classList.contains("dots")) {
      return;
    }
    this.indexSlider = Number(e.target.dataset.index);
    this.addSlider();
    this.activeChange();
    this.doIndecator();
  };

  activeChange() {
    const dots = this.dotsList.children;
    console.log(dots);
    [...dots].forEach((element) => {
      element.classList.remove("active");
    });
    dots[this.indexSlider].classList.add("active");
  }
}

const slider = new Slider(slides, ".slider", {
  loop: true,
  navs: false,
  pags: true,
  auto: true,
  delay: 3,
});
slider.init();

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value + str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}
