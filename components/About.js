export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me (aka. elevator pitch)</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            Last year I lost my job due to covid. While in lockdown, a friend gifted me a programming game.</p>
          <p>It was love at first line.</p>
          <p>
            Now I'm addicted to learning and passionate about coding.
            Aside the obvious skills listed below I&#39;m currently learning Java, following best practices for
            good software construction (OOP, SOLID Principles and Design Patterns), and learn Spring afterwards.
          </p>
        </div>
      </section>
    </article>
  );
}
