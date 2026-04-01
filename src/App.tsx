import {Routes, Route} from 'react-router-dom';
import { Authenticated, Unauthenticated} from 'convex/react';

import Start from './pages/start.tsx';
import Login from './pages/login.tsx';
import About from './pages/about.tsx';
import Boards from './pages/boards.tsx';

import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';

export default function App() {
    return (
        <>
        <Navbar/>
        <Unauthenticated>
            <Routes>
                <Route path = '/' element={ <About/> }/>
                <Route path = '/login' element={<Login/>}/>
            </Routes>
        </Unauthenticated>
        <Authenticated>
            <Routes>
                <Route path = '/' element={ <About/> }/>
                <Route path = '/start' element={<Start/>}/>
                <Route path = '/boards' element={<Boards/>}/>
                {/* TODO: Remove login route and replace with a user profile page. */}
                <Route path = '/login' element={<Login/>}/>
            </Routes>
        </Authenticated>
        <Footer/>
        </>
    );
}


