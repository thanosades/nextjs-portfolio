import Skills from './Skills';

export default function Mission() {
  return (
    <article className="h-screen w-screen m-40">
      <section className="w-screen flex flex-col justify-start items-center">
        <h2 className="text-5xl">My Mission</h2>
        <p className="w-1/2 m-9">
          As a web developer I&apos;m obsessed with constantly improving myself.
          My mission is to deliver quality products and solve challenging problems.
          I believe that software development is more than a career, it&apos;s
          a lifestyle.
        </p>
      </section>
      <section className="w-screen flex flex-col justify-start items-center">
        <h2 className="text-5xl">My Skills</h2>
        <p className="w-1/2 m-9">
          My current skills are geared towards front-end development, but I&apos;ve
          been interested in the back-end world, leaning towards the .NET stack and Rust.
          However, I treat programming languages and frameworks as tools, means to the end of 
          software construction: Building quality products that solve real problems. What this also means is that
          I won&apos;t shy away from picking up a new language or framework when needed.
        </p>
        <Skills />
      </section>
    </article>
  );
}
