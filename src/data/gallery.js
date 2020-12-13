import picture from '../assets/images/undraw_black_lives_matter.svg';
import picture2 from '../assets/images/undraw_content_team.svg';
import picture3 from '../assets/images/undraw_counting_stars.svg';
import picture4 from '../assets/images/undraw_real_time_collaboration.svg';

const getRandomNumber = () => Math.floor(Math.random() * 1000 + 2);

// by adding more items randomness is maximized
export const PHOTO_DATA = [
  { alt: '', src: picture, maxWidth: getRandomNumber() },
  { alt: '', src: picture2, maxWidth: getRandomNumber() },
  { alt: '', src: picture3, maxWidth: getRandomNumber() },
  { alt: '', src: picture4, maxWidth: getRandomNumber() },
];
