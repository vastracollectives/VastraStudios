import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Archive from './pages/Archive';
import Library from './pages/Library';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="library" element={<Library />} />
                    <Route path="service" element={<Service />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="legal" element={<Legal />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
