function Notes() {
  return (
    <>
      <section className="col-span-1 pt-4 lg:border-r-1 lg:pr-6">
        <button className="bg-blue-200 w-full py-2 rounded-md cursor-pointer hover:px-6 transition-all delay-300 ease-in">
          + Create New Note
        </button>

        <article className="flex flex-col gap-2 active p-3 mt-3 cursor-pointer hover:opacity-75 transition-opacity duration-300 border-b-1">
          <h3 className="h3">React Performance Optimization</h3>
          <div><span className="tag">Dev</span> <span className="tag">React</span></div>
          <time dateTime="2024-10-22" className="notes-date">22nd October, 2024.</time>
        </article>

        
        <article className="flex flex-col gap-2 p-3 mt-3 cursor-pointer hover:opacity-75 transition-opacity duration-300 border-b-1">
          <h3 className="h3">Japan Travel Planning</h3>
          <div><span className="tag">Travel</span> <span className="tag">Personal</span></div>
          <time dateTime="2024-10-21" className="notes-date">21st October, 2024.</time>
        </article>

        
        <article className="flex flex-col gap-2 p-3 mt-3 cursor-pointer hover:opacity-75 transition-opacity duration-300 border-b-1">
          <h3 className="h3">Reading List</h3>
          <div><span className="tag">Personal</span> <span className="tag">Dev</span></div>
          <time dateTime="2024-10-20" className="notes-date">20th October, 2024.</time>
        </article>

        
        <article className="flex flex-col gap-2 p-3 mt-3 cursor-pointer hover:opacity-75 transition-opacity duration-300 border-b-1">
          <h3 className="h3">To Buy</h3>
          <div><span className="tag">Personal</span> <span className="tag">Shopping</span></div>
          <time dateTime="2024-10-19" className="notes-date">19th October, 2024.</time>
        </article>
      </section>
    </>
  );
}

export default Notes;
