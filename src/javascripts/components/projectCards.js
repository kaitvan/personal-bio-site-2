import projectData from '../helpers/projectData';

const createProjectCards = () => {
  projectData.getProjectData().then((response) => {
    response.forEach((project) => {
      $('#thumbnails').append(`<div class="box" id="printed with forEach">
                                <div class="image-fit">
                                  <img src="${project.screenshot}" alt="screenshot of work">
                                </div>
                                <div class="inner">
                                  <h3>${project.title}</h3>
                                  <p>${project.description} ${project.technologiesUsed}</p>
                                  <a class="live-button" href="${project.url}">Link</a>
                                  <a class="github-button" href="${project.githubUrl}">GitHub</a>
                                </div>
                              </div>`);
    });
  });
};

export default { createProjectCards };
