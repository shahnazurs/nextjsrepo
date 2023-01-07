import UsersList from "../components/user"
export default function User({users}) {
    return(
        <>
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
            {
                users.map((user) => {
                    return(
     
                            <UsersList user={user} key={user.id}/>

                    )
                })
            }
            </tbody>
            </table>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return{
        props: {
            users : data
        }
    }

}