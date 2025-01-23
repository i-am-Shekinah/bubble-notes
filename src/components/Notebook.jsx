import archive from '../assets/icons/archive.png';
import home from '../assets/icons/home.png';
import tag from '../assets/icons/tag.png';

function Notebook() {
  return (
    <>
      <main className="lg:grid lg:grid-cols-5 h-screen">
        
        <aside className="hidden lg:block lg:col-span-1 border-r-1 px-4">
          <a href="#"><img src="/logo.png" alt="Notebook logo that leads to the homepage of the site" className="h-auto w-auto my-4"/></a>

          <ul className="flex flex-col gap-2 border-b-1">
            <li className='active px-2 py-2'><a href="#" className='flex items-center gap-2 hover:opacity-75'><img src={home} alt="home icon that leads to all notes" className='w-4 h-4'/>All Notes</a></li>

            <li className='px-2 py-2'><a href="#" className='flex items-center gap-2 hover:opacity-75'><img src={archive} alt="archive icon that leads to archived notes" className='w-4 h-4'/>Archived Notes</a></li>
          </ul>

          <h4 className='mt-2'>Tags</h4>
          <ul className='flex flex-col gap-2 mt-4 px-2 text-base'>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Cooking</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Dev</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Fitness</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-3'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Health</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Personal</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>React</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Recipes</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Shopping</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Travel</a></li>
            <li className='flex items-center gap-2'><img src={tag} alt="tag icon" className='w-4 h-4'/><a href="#" className='hover:opacity-75 duration-300 transition-all ease-in'>Typescript</a></li>
          </ul>

        </aside>
        
        <section className="lg:col-span-4">

        
        </section>
      </main>
    </>
  )
}

export default Notebook