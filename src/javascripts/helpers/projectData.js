import SortingHat from '../../assets/images/sorting-hat.png';
import PetAdoption from '../../assets/images/pet-adoption.png';

const projects = [
  {
    title: 'Sorting Hat',
    screenshot: SortingHat,
    description: 'The user enters a student name and a card is generated with the name entered and a random assignment to one of the four Hogwarts Houses.',
    technologiesUsed: 'HTML, CSS, JavaScript, Version Control with Github',
    available: true,
    url: 'https://sorting-hat-by-kait.netlify.app/',
    githubUrl: 'https://github.com/kaitvan/sorting-hat'
  },
  {
    title: 'Pet Adoption Site',
    screenshot: PetAdoption,
    description: 'The site shows available pet information on individual cards and the user can filter available pets by type.',
    technologiesUsed: 'HTML, CSS, JavaScript, Version Control with Github',
    available: true,
    url: 'https://pet-adoption-by-kait.netlify.app/',
    githubUrl: 'https://github.com/kaitvan/pet-adoption'
  },
  {
    title: 'Cool Project',
    screenshot: '',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Another Cool Project',
    screenshot: '',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Another Cool Project',
    screenshot: '',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  }
];

const getProjectData = () => projects;

export default { getProjectData };
