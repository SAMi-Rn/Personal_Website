import { Link } from "react-router-dom"



const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Sami</span>
                👋
                <br />
                A Co-op student at the British Columbia Institute of Technology (BCIT)
            </h1>
        )

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    My portfolio showcases a variety of personal and academic projects developed through my studies at the BCIT
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                </Link>
            </div>
        )
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    I have gained diverse work experience across multiple companies.
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                </Link>
            </div>
        )
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Are you seeking assistance with a project or in need of a developer? Please feel free to contact me <br /> 👨🏼‍💻 I am only a few keystrokes away.
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                </Link>
            </div>
        )
    }

    return null
}

export default HomeInfo
