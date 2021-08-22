import { upButton } from "./scripts/upbtn.js";
import Cards from "./scripts/Cards.js";
import * as constants from "./scripts/constants.js";
import * as utils from "./scripts/utils.js";

upButton();

const educationCards = new Cards(
  constants.educationInfo,
  (item) => utils.htmlEducation(item),
  constants.selectors.education
);
const experienceCards = new Cards(
  constants.experienceInfo,
  (item) => utils.htmlExperience(item),
  constants.selectors.experience
);
const programmsCards = new Cards(
  constants.programms,
  (item) => utils.htmlProgramms(item),
  constants.selectors.programms
);

const skillsCards = new Cards(
  constants.skillsArray,
  (item) => utils.htmlSkills(item),
  constants.selectors.skills
);

const projectsCards = new Cards(
  constants.projects,
  (item) => utils.htmlProjects(item),
  constants.selectors.projects
);

const cardsProjects = document.querySelectorAll(".project-box");
cardsProjects.forEach((item) => {
  const popupMini = item.querySelector(".popup-mini");
  const togglePopupMini = () => popupMini.classList.toggle("popup-mini_opened");
  item.addEventListener("mouseover", togglePopupMini);
  item.addEventListener("mouseout", togglePopupMini);
});

function smoothscrool(section) {
  document
    .querySelector(section)
    .scrollIntoView({ block: "start", behavior: "smooth" });
}

function openPopup() {
  constants.popup.classList.add("popup_opened");
}

function closePopup() {
  constants.popup.classList.remove("popup_opened");
}

function handlePopupClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

let w = window.innerWidth;

function scrollEventListener(links, num) {
  links[num].addEventListener("click", (evt) => {
    evt.preventDefault();
    smoothscrool(constants.sections[num]);
  });
}

for (let i = 0; i <= 7; i++) {
  scrollEventListener(constants.links, i);
  scrollEventListener(constants.linksOpened, i);
}

constants.burger.addEventListener("click", openPopup);
constants.closeBtn.addEventListener("click", closePopup);
constants.popup.addEventListener("click", handlePopupClick);
constants.generalLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  smoothscrool(constants.sections[5]);
});
