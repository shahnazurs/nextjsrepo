import Link from 'next/link'
export default function home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link href="/user">
                Users List
            </Link>
            <Link href="/about">About Page</Link>
        </>
    )
}



//export default home;