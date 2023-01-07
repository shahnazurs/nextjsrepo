import {useRouter} from 'next/router'
import Link from 'next/link'
function Customer() {
    const router = useRouter()
    const {customerID} = router.query
    return (
        <>
            <h2>Customer {customerID} Details</h2>
            <Link href="/">Home Page</Link>
        </>
    )
}

export default Customer