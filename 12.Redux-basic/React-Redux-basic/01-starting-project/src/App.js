import { useDispatch, useSelector } from 'react-redux'; 
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      { !isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
