import {Routes, Route} from 'react-router-dom';

import Start from './pages/start.tsx';
import Login from './pages/login.tsx';

export default function App() {
    return (
        <>
            <Routes>
                <Route path = '/' element={ <Start/> }/>
                <Route path = '/login' element={<Login/>}/>
            </Routes>
        </>
    );
}


