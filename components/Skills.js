import Image from 'next/image';

export const skills = [
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
    <div className='grid grid-cols-5 gap-8'>
      {
        skills.map(skill => <Image key={skill} width='100' height='100' src={`/img/svg/${skill}.svg`} alt={`${skill} logo`} />)
      }
    </div>
  )
}
