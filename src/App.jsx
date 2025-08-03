import { Outlet } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
