import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import { fetchArticles } from './features/articles/articleSlice';
import Dashboard from './features/dashboard';

import background from './resources/background.jpg';

const getJSON = (dispatch: any) => {
  fetch(process.env.REACT_APP_API_URL || '').then((res) => {
    res.json().then((data) => {
      dispatch(fetchArticles(data.articles));
    });
  });
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getJSON(dispatch);
  }, []);

  return (
    <div className='relative overflow-x-hidden'>
      <div className='fixed top-0 w-screen'>
        <div className='w-full h-screen backdrop-blur-sm bg-white'>
          <img src={background} alt='bg' className='w-full h-full' />
        </div>
      </div>
      <div className='relative h-[100vh] z-10'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
