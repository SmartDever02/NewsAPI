import SearchBar from './searchBar';

const Navbar = () => {
  return (
    <div className='flex flex-row-reverse px-12 items-center h-20 w-full fixed bg-white bg-opacity-10 top-0 z-10 backdrop-blur-xl shadow-xl'>
      <SearchBar />

      <div className='relative flex text-3xl mr-auto'>
        <h1 className='text-slate-700 font-bold'>NewsAPI</h1>
        <span className='flex h-3 w-3'>
          <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
        </span>
      </div>
    </div>
  );
};
export default Navbar;
