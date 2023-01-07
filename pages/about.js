import  Link from 'next/link'
import Container from './components/container'
function About() {
    return (
        <>
            <Container>
            <h1>About Page</h1>
            <Link href="/">Home Page</Link>
            </Container>
        </>
    )
}

export default About