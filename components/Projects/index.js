import Image from 'next/image';

export default function Projects({ repositories }) {
  if (!repositories) {
    return <h3>Loading projects...</h3>
  }

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 max-w-4xl">
      {repositories.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

function ProjectCard({ project }) {
  const { name, description, url } = project;

  return (
    <div className="w-full block p-4 lg:p-2 transition duration-500 ease-in-out hover:shadow-2xl">
        <Image
          src="/images/nocturne.jpg"
          alt="nocturne"
          height="500"
          width="500"
        />
        <p className="text-base lg:text-lg sm:text-sm">{name}</p>
        <p className="text-base lg:text-lg sm:text-sm">{description}</p>
        <p className="text-base lg:text-lg sm:text-sm">
          <a target="_blank" href={url} rel="noopener noreferrer">link to repo</a>
        </p>
    </div>
  );
}
