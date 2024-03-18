import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

// import './App.css';

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
