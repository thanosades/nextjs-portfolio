import Skills from './Skills';

export default function Mission() {
  return (
    <article className="w-screen mt-10">
      <section className="w-screen flex flex-col justify-start items-center">
        <h3 className="text-5xl">Mission</h3>
        <p className="w-1/2 m-9">
          To design good software, deliver quality products and solve challenging problems.
          I believe that software development is more than a career, it&apos;s
          a lifestyle. Learning new things has become an obsession, and I&apos;m
          focused on becoming the best developer I can possibly be. My goal is to
          successfully transfer the fruits of my labour in my professional life, making
          people&apos;s lives better with my code. 
        </p>       
      </section>
      <section className="w-screen flex flex-col justify-start items-center">
        <h3 className="text-5xl mt-10">My Skills</h3>
        <p className="w-1/2 m-8">
          My current skills are geared towards front-end development, but my heart has
          been interested in the world of back-end development. I consider programming languages 
          and frameworks as tools, means to the end that is software construction. 
          For that reason, I won&apos;t hesitate to learn new things. But, like most things,
          learning is a balancing act between diving deeper in what you know and picking something new.
        </p>
      <Skills />
      </section>
    </article>
  );
}
