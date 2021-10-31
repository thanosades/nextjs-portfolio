import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  if (!projects) {
    return <h3>Loading projects...</h3>
  }

  return (
    <section className="p-10">
      <h3 className="text-5xl text-center pb-6">My Projects</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mt-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
