import { useState } from "react"

export function TwitterFollowCard({userName, name, initialIsFollowing}){
    
    const [isFollowing, setIsFollowing ] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'tw-followCard-buttonSeguir is-following'
    : 'tw-followCard-buttonSeguir'

    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }
    return(
    <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-imgAvatar'
                alt="Avatar midudev" src={`https://unavatar.io/${userName}/`}/>
                <div className='tw-followCard-divInfo'>
                    <strong>
                    {name}
                    </strong>
                    <span className='tw-followCard-spanInfo'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-spanInfo-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>)
}