import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import { About, Contact, Home, Projects } from "./pages"
import SpaceBackground from "./hooks/SpaceBackground"

const MainContent = () => {
    const location = useLocation()

    let mainClass = location.pathname === '/contact' ? 'h-full' : ''
    if (['/'].includes(location.pathname)) {
        mainClass += 'h-full '
    }

    return (
        <main className={mainClass}>
            <SpaceBackground />
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>
    )
}

const App = () => {
    return (
        <Router>
            <MainContent />
        </Router>
    )
}

export default App
