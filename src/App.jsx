import { Route, Routes } from 'react-router-dom';
import LayoutAuth from './components/LayoutAuth/LayoutAuth.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PasswordResetPage from './pages/PasswordResetPage.jsx';
import PasswordSetPage from './pages/PasswordSetPage.jsx';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<LayoutAuth />}>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/password-reset'} element={<PasswordResetPage />} />
        <Route path={'/password-set'} element={<PasswordSetPage />} />
      </Route>
    </Routes>
  );
}

export default App;
