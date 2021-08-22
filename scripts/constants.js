export const popup = document.querySelector(".popup");
export const popupContainer = document.querySelector(".popup__container");
export const popupOpened = document.querySelector(".popup_opened");
export const closeBtn = document.querySelector(".popup__close");
export const burger = document.querySelector(".burger");
export const generalLink = document.querySelector(".general__link");
export const links = Array.from(document.querySelectorAll(".menu__link"));
export const menuOpened = document.querySelector(".menu_opened");
export const linksOpened = Array.from(
  menuOpened.querySelectorAll(".menu__link")
);
export const sections = [
  "#general",
  "#myself",
  "#education",
  "#experience",
  "#programms",
  "#projects",
  "#skills",
  "#email",
];

export const selectors = {
  education: ".education__container",
  experience: ".experience__container",
  programms: ".programms__container",
  skills: ".skills__container",
  projects: ".projects__container",
  templatePopupMini: "#template-popup-mini",
};

//ОБРАЗОВАНИЕ
export const educationInfo = [
  {
    name: "МГУИЭ",
    info: `2000-2005 гг.
       Московский Государственный университет инженерной экологии
       Специалист
        "Инженер-эколог"
         г.Москва`,
    alt: "Университет",
    src: "images/education/mguie.jpeg",
  },
  {
    name: "МПУ",
    info: `2015-2018 гг. 
      Московский Политехнический Университет
      Преподаватель-исследователь
        "Экология в природопользовании"
         г.Москва`,
    alt: "Университет",
    src: "images/education/poli.jpeg",
  },
  {
    name: "Яндекс Практикум",
    info: `2021 г.
      Образовательная онлайн-платформа "Яндекс Практикум"
      "Веб-разработчик"`,
    alt: "Яндекс Практикум",
    src: "images/education/yp.jpg",
  },
];

//ОПЫТ
export const experienceInfo = [
  {
    years: `Настоящее время`,
    name: `СберЗдоровье`,
    post: `Ведуший менеджер по корпоративным продажам`,
    responsibilities: `Веду работу с крупнейшими фармацевтическими производителями и аптечными сетями`,
  },
  {
    years: `Ноябрь 2019 г. по февраль 2021 г.`,
    name: `ООО "ЗУН"`,
    post: `Ведуший менеджер по продажам`,
    responsibilities: `Курировал проекты с малым и средним бизнесом`,
  },
  {
    years: `Апрель 2019 г. по Ноябрь 2019 г. `,
    name: `ООО Сириус`,
    post: `Ведуший менеджер по продажам`,
    responsibilities: ` Работа с физическими лицами в направлении финансового консалтинга`,
  },
  {
    years: `Сентябрь 2015 г. по Апрель 2019 г. `,
    name: `ООО ЛокИнвест`,
    post: `Инженер-Эколог`,
    responsibilities: `Работа в b2c и b2b сегменте. Выполнение согласований и проведений экологических исследований `,
  },
];

// ПРОГРАММЫ
export const programms = [
  { name: `VS Code`, img: `images/programms/VSCode.png` },
  { name: `Git`, img: `images/programms/Git.jpg` },
  { name: `Figma`, img: `images/programms/figma.jpg` },
  { name: `Node js`, img: `images/programms/node.webp` },
  { name: `React`, img: `images/programms/react.jpeg` },
  { name: `MS Office`, img: `images/programms/msoffice.3x2.jpg` },
];

export const projects = [
  {
    name: "Путешествие по России",
    link: "https://github.com/Anton-Dolgov/russian-travel",
    src: "images/projects/Travel.JPG",
  },
  {
    name: "Место",
    link: "https://github.com/Anton-Dolgov/mesto",
    src: "images/projects/Mesto.jpeg",
  },
  {
    name: "Сайт-резюме",
    link: "https://github.com/Anton-Dolgov/resume",
    src: "images/projects/Resume.JPG",
  },
  {
    name: "Лэндинг-магазин",
    link: "https://nsotnikov16.github.io/kulturamanicura/",
    src: "images/projects/lend.jpeg",
  },
];

//НАВЫКИ
export const skillsArray = [
  {
    name: `Владение программами`,
    info: `VS Code, React, Git Bash, Figma, Node js, Pixel Perfect, MS Office (слепой и быстрый набор текста), `,
    img: `images/skills/interface-3614766_960_720.webp`,
  },
  {
    name: `Языки программирования`,
    info: `HTML5, CSS3 (Grid, Flex), JavaScript`,
    img: `images/skills/languageprog.webp`,
  },
  {
    name: `Креативность`,
    info: `Поиск нестандартных решений`,
    img: `images/skills/creative.webp`,
  },
  {
    name: `Обучение и стрессоустойчивость`,
    info: `Быстрое ориентирование в нестандартных ситуациях`,
    img: `images/skills/Learning.png`,
  },
  {
    name: `Коммуникативные навыки`,
    info: `Большой опыт проведения встреч с крупным и средним бизнесом`,
    img: `images/skills/ruk1.jpeg`,
  },
  {
    name: `Высокий уровень тайм-менеджмента`,
    info: `Выполнение задач в соответсвии с обозначенными сроками`,
    img: `images/skills/time.png`,
  },
  {
    name: `Грамотность`,
    info: `Хорошая грамотность русского языка`,
    img: `images/skills/gramotnost.jpg`,
  },
  {
    name: `Знание иностранных языков`,
    info: `Английский - Elementary`,
    img: `images/skills/inost.png`,
  },
];
