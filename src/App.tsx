import {Routes, Route} from 'react-router-dom';
import { Authenticated, Unauthenticated} from 'convex/react';

import Start from './pages/start.tsx';
import About from './pages/about.tsx';
import Boards from './pages/boards.tsx';

import NotFound from './pages/notfound.tsx';

import Footer from './components/footer.tsx';
import Navbar from './components/navbar.tsx';

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
        <Navbar/>
            <div className="flex min-h-0 flex-1 flex-col">
            <Unauthenticated>
            <Routes>
                <Route path = '/' element={ <About/> }/>
                {/*Catch All for 404 page*/}
                <Route path = '*' element={<NotFound/>}/>
            </Routes>
            </Unauthenticated>
            <Authenticated>
            <Routes>
                <Route path = '/' element={ <About/> }/>
                <Route path = '/start' element={<Start/>}/>
                <Route path = '/boards' element={<Boards/>}/>
                {/* TODO: Remove login route and replace with a user profile page. */}
                {/*Catch All for 404 page*/}
                <Route path = '*' element={<NotFound/>}/>
            </Routes>
            </Authenticated>
            </div>
        <Footer/>
        </div>
    );
}


