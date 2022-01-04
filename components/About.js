export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>When I lost my job last year due to Covid I decided to check out programming as a hobby
            after playing <a href="https://store.steampowered.com/app/716490/EXAPUNKS/">Exapunks</a>, a game I received from a friend as a gift.
            My 4 hours of leisured engagement per day went up to 10, which made me arrive to a great decision and my biggest turning point of my life: Pursuing software development as a career.</p>
          <p>I started my learning journey with <a href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">Harvard&apos;s CS50</a> and the
            frontend section of <a href="https://www.theodinproject.com/">The Odin Project</a>, followed by <a href="https://fullstackopen.com/en/">Fullstackopen</a>.
            Beyond that, I mostly google and learn, something which I assume that everyone already does.</p>
          <p>My top priority is to find a place where I can decidate myself, to grow as a developer and contribute in a positive way.
            While my journey began with frontend, I found myself enjoying working with backend and the programming logic that makes services tick.</p>
        </div>
      </section>
    </article>
  );
}
