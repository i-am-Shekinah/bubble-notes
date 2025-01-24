import Header from './Header';
import Sidebar from './Sidebar';

function Notebook() {
  return (
    <>
      <main className="lg:grid lg:grid-cols-5 h-screen bg-white">
        <Sidebar />
        <section className="lg:col-span-4 py-5 px-4">
          <Header />
        </section>
      </main>
    </>
  );
}

export default Notebook;
