import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users =[
    {
        userName:'midudev',
        name:'Miguel Angel',
        isFollowing:true
    },
    {
        userName:'pheralb',
        name:'Pablo H.',
        isFollowing:false
    },
    {
        userName:'PacoHdezs',
        name:'Paco Hdez',
        isFollowing:true
    }
 ]

export function App(){
    return(
        <section className='App'>
        {
            users.map(user => {
                const{userName, name, isFollowing}= user
                return(
                    <TwitterFollowCard
                    key={userName}//poner una key si la base de datos tiene id usar esa
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        </section>
    )
    
}