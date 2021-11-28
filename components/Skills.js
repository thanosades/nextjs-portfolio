import Image from 'next/image';

const skills = [
  'react',
  'typescript',
  'javascript',
  'css',
  'sass',
  'redux',
  'nodejs',
  'postgres',
  'mongodb',
  'nextjs'
]

export default function Skills() {

  return (
    <section className=" mt-10 w-screen flex flex-col justify-start items-center">
      <h3 className="text-5xl">My Skills</h3>
      <div className='grid grid-cols-2 md:grid-cols-5 mt-10 gap-8'>
        {
          skills.map(skill => <Image key={skill} width='80' height='80' src={`/img/svg/${skill}.svg`} alt={`${skill} logo`} />)
        }
      </div>
    </section>
  )
}
