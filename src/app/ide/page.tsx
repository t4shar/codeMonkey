'use client';
import { languages } from "@/data/languages";
const page = () => {
  return (
    <section className="flow">
      <div className='flex items-center justify-center flex-col text-center'>
        <h1 className='text-4xl font-bold mb-5'>Code online with <span className='text-secondary'>Code Monkey.</span></h1>
        <p className='text-xl font-bold'>Code Monkey helps over 12.8 million users worldwide write code online.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {
          languages.map((language) => (
            <div key={language.id}>{language.name}</div>
          ))
        }
      </div>
    </section>
  )
}

export default page