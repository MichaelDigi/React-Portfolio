import { v4 as uuidv4 } from 'uuid';
import PlaceholderImg from '../images/placeholder.jpg';
import NftcImg from '../images/NFTC.jpg';
import WorkoutImg from '../images/workout.jpg';
import EmployeeImg from '../images/employee.jpg';
import WeatherImg from '../images/weather.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'NFT Collect',
    desc:
      'An platform for NFT collectors to showcase owned NFTs and interact with other users',
    img: NftcImg,
    github: 'https://nftc-collect.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Workout Tracker',
    desc:
      'Created a working code for the backend of a fitness tracker to be able to add and save workouts ',
    img: WorkoutImg,
    github:
      'https://uoft-fitness-track.herokuapp.com/?id=6197df59626358001691e7d0',
  },
  {
    id: uuidv4(),
    name: 'Employee tracker System',
    desc:
      'Node app to help Keep track of employees, departments, roles and salarys',
    img: EmployeeImg,
    github: 'https://github.com/MichaelDigi/Employee-management-sys',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'Fully functioning weather dashboard made from scratch using the OpenWeatherMap Api.',
    img: WeatherImg,
    github: 'https://michaeldigi.github.io/Weather-Dashboard/',
  },
  {
    id: uuidv4(),
    name: 'Future Project',
    desc: 'Placeholder for more projects to be added in the future',
    img: PlaceholderImg,
  },
];

export default projects;
