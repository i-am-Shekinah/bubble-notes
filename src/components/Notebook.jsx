import Header from './Header';
import Notes from './Notes';
import Sidebar from './Sidebar';

function Notebook() {
  return (
    <>
      <main className="lg:grid lg:grid-cols-5 h-screen bg-white">
        <Sidebar />
        <section className="lg:col-span-4 lg:ml-[25%] py-5 px-6">
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
