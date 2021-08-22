export function htmlEducation(item) {
  return `
      <div class="education__card">
          <img src="${item.src}" alt="${item.alt}}" id="img-card" class="education__img">
          <p class="education__name">${item.name}</p>
          <p class="education__info">${item.info}</p>
      </div>
      `;
}

export function htmlExperience(item) {
  return `
          <div class="experience__point">
              <p class="experience__years">${item.years}</p>
              <div class="experience__images">
                  <img src="images/icons/circle.PNG" alt="#" class="experience__img-one">
                  <img src="images/icons/line.PNG" alt="#" class="experience__img-two">
              </div>
              
              <div class="experience__info">
              <p class="experience__years experience__years_visible">${item.years}</p>
                  <h2>${item.name}</h2>
                  <p><span>Должность: </span>${item.post}</p>
                  <p><span>Должностные обязанности: </span>${item.responsibilities}</p>
              </div>
          </div>
          `;
}

export function htmlProgramms(item) {
  return `
      <div class="programms__card">
      <img src="${item.img}" alt="${item.name}" id="img-card" class="programms__img">
      <h2 class="programms__title">${item.name}</h2>
      </div>
      `;
}

export function htmlSkills(item) {
  return `
      <div class="skills__card">
          <img src="${item.img}" alt="${item.name}" id="img-card" class="skills__img">
          <p class="skills__name">${item.name}</p>
          <p class="skills__info">${item.info}</p>
      </div>
      `;
}

export function htmlProjects(item) {
  return `
    <div class='project-box'>
    <div class="popup-mini">
              <p>Веб-проект</p>
              <p><a href="${item.link}" target="_blank">${item.name}</a></p>
    </div>
    <img src="${item.src}" alt="${item.name}" class="projects__img"></div>`;
}
