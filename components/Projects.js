import Image from 'next/image';
import Github from './Github';

export default function Projects({ repositories }) {
  if (!repositories) {
    return <h3>Loading projects...</h3>
  }

  return (
    <section>
      <h2 className="text-4xl md:text-6xl text-center pb-6">My Projects</h2>
      <hr />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mt-8">
        {repositories.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}

function ProjectCard({ project }) {
  const { name: imgName , description, url } = project;
  const name = imgName.replace(/-/g, ' ');

  return (
    <div className="container flex justify-between flex-col rounded-md w-full block p-4 sm:p-2 transition duration-500 border-2 border-gray-200 hover:border-gray-400 ease-in-out shadow-lg">
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
        <a target="_blank" href={url} rel="noopener noreferrer">link to live</a>
      </p>
    </div>
  );
}
