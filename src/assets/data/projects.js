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
  },
  {
    id: uuidv4(),
    name: 'Workout Tracker',
    desc:
      'Created a working code for the backend of a fitness tracker to be able to add and save workouts ',
    img: WorkoutImg,
  },
  {
    id: uuidv4(),
    name: 'Employee tracker System',
    desc:
      'Node app to help Keep track of employees, departments, roles and salarys',
    img: EmployeeImg,
    href: 'https://github.com/MichaelDigi/Employee-management-sys',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'Fully functioning weather dashboard made from scratch using the OpenWeatherMap Api.',
    img: WeatherImg,
  },
  {
    id: uuidv4(),
    name: 'Future Project',
    desc: 'Placeholder for more projects to be added in the future',
    img: PlaceholderImg,
  },
];

export default projects;
