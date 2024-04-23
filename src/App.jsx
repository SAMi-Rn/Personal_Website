import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom" // Import useLocation here
import Navbar from "./components/Navbar"
import { About, Contact, Home, Projects } from "./pages"
import SpaceBackground from "./hooks/SpaceBackground"

// Create a new component for handling routes and applying your mainClass logic
const MainContent = () => {
    const location = useLocation() // useLocation is called inside a component which will be rendered inside Router

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

// Adjust the App component to only include Router and render MainContent inside it
const App = () => {
    return (
        <Router>
            <MainContent />
        </Router>
    )
}

export default App
