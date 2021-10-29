import Image from 'next/image';
import Github from './Github';
import Globe from './Globe';

const liveProjects = {
  foodapp: 'https://immense-beach-84136.herokuapp.com/',
  notesbackend: 'https://level-one-notes.herokuapp.com/',
  quizapp: 'https://condescending-colden-58e3e9.netlify.app/',
  reacthooksform: 'https://fervent-kowalevski-ed1d06.netlify.app',
  starlightsapp: 'https://naughty-panini-63decd.netlify.app/'
}

export default function ProjectCard({ project }) {
  const { name: imgName , description, url } = project;
  const name = imgName.replace(/-/g, ' ');

  return (
    <div className="container flex justify-between flex-col rounded-md w-full p-4 sm:p-2 transition duration-500 border-2 border-gray-200 hover:border-blue-200 ease-in-out shadow-lg">
      <div>
      <Image
        src={`/img/projects/${imgName}.jpg`}
        alt={`picture for the ${name} project`}
        layout="responsive"
        height="100%"
        width="100%"
        onClick={() => console.log('clicked on image')}
      />
      </div>
      <h3 className="text-center text-4xl md:text-2xl capitalize">{name}</h3>
      <p className="text-sm mt-2 lg:text-base">{description}</p>
      <p className="flex mt-6 justify-between text-base lg:text-lg sm:text-sm">
        <a target="_blank" href={url} rel="noopener noreferrer">
        <Github />
        </a>
        <a target="_blank" href={`${liveProjects[imgName.replace(/-/g, '')]}`} rel="noopener noreferrer"><Globe /></a>
      </p>
    </div>
  );
}