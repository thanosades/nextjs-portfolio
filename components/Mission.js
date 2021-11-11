import Skills from './Skills';

export default function Mission() {
  return (
    <article id="mission" className="mission w-screen">
      <section className="w-screen text-2xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">Mission</h3>
        <p className="mt-5 w-1/2">My mission is to ship quality products and solve challenging problems while following good software design principles.
        I believe that software development is more than a career, it&apos;s a heart&apos;s calling, and I want that to be reflected in the quality of my work.</p>
      </section>
      <section className=" mt-10 w-screen flex flex-col justify-start items-center">
        <h3 className="text-5xl">My Skills</h3>
        <Skills />      
      </section>
    </article>
  );
}
