import Image from 'next/image';

export default function Skills() {

  const skills = [
    'react',
    'typescript',
    'javascript',
    'css',
    'sass',
    'redux',
    'node',
    'postgres',
    'mongo'
  ]

  return (
    <div className='grid grid-cols-3 gap-8'>
      {
        skills.map(skill =>  <Image key={skill} width='100' height='100' src={`/img/svg/${skill}.svg`} alt='React logo' />)
      }
    </div>
  )
}
