import Skills from './Skills';

export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me</h3>
        <p className="mt-5 w-1/2">I&apos;m a web developer with an appetite for problem solving, constant growth and tackle challenges. My favorite language is TypeScript, and I&apos;m also interested in C#.</p>
      </section>
      <section className=" mt-10 w-screen flex flex-col justify-start items-center">
        <h3 className="text-5xl">My Skills</h3>
        <Skills />      
      </section>
    </article>
  );
}
