export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me (aka. elevator pitch)</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            I'm a software developer who's passionate about coding and addicted to learning.
            I enjoy working with JavaScript, TypeScript, React. I'm also currently learning Java and I'm planning to pick up Spring.
          </p>
        </div>
      </section>
    </article>
  );
}
