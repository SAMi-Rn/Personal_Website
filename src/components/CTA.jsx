import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Ready to start a project?  <br className='sm:block hidden' />
                Feel free to contact me
                if you have any questions.
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    )
}

export default CTA
