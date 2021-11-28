import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  if (!projects) {
    return <h3>Loading projects...</h3>
  }

  return (
    <section id="projects" className="projects pb-10 pl-5 pr-5">
      <h3 className="text-5xl text-center mb-10">My Projects</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mt-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
