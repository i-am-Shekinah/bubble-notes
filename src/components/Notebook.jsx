import Header from './Header';
import Notes from './Notes';
import Sidebar from './Sidebar';

function Notebook() {
  return (
    <>
      <main className="bg-white">
        <Sidebar />
        <section className="lg:ml-[20%] py-5 px-6">
          <Header />
          <section className='lg:grid lg:grid-cols-4 h-full'>
            <Notes />
          </section>
        </section>
      </main>
    </>
  );
}

export default Notebook;
