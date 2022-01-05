export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            I'm a software developer who's passionate about coding. I enjoy working with TypeScript, React and Java.
          </p>
        </div>
      </section>
    </article>
  );
}
