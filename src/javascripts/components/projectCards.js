const createProjectCards = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].available === true) {
      domString += `<div class="box">
                            <div class="image-fit">
                                <img src="${arr[i].screenshot}" alt="screenshot of work">
                            </div>
                            <div class="inner">
                                <h3>${arr[i].title}</h3>
                                <p>${arr[i].description} ${arr[i].technologiesUsed}</p>
                                <a class="live-button" href="${arr[i].url}">Link</a>
                                <a class="github-button" href="${arr[i].githubUrl}">GitHub</a>
                            </div>
                          </div>`;
    }
  }
  $('#thumbnails').append(domString);
};

export default { createProjectCards };
