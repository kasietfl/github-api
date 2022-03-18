import { IoLocationSharp,IoMailOutline, IoClose, IoCheckmarkSharp } from "react-icons/io5"
import { BiBuildings } from "react-icons/bi"

import { Link } from "react-router-dom"
import React, { useState  } from "react"

const Home = ({ user }) => {
    const [textValue, setTextValue] = useState(user.displayName)
    const [isInEditMode, setEditMode] = useState(false)

    let textInput = React.createRef();

    const changeEditMode = () => {
        setEditMode(mode => !mode);
    }

    const updateText = (e) => {
        setEditMode(mode => !mode);
        setTextValue(textInput.current.value)
    }

    const Input = () => {
        return(
            <div className="input">
                <input type="text" ref={textInput}/>
                <button onClick={changeEditMode}><IoClose/></button>
                <button onClick={updateText}><IoCheckmarkSharp/></button>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="profile">
                <div className="right">
                    <img className="progile--img" src={user.photos[0].value} alt="profileImg"/>
                </div>
                <div className="left">
                    { isInEditMode ? <Input/> :
                    <div className="profile--name" onDoubleClick={changeEditMode}>{textValue}</div>}
                    <p className="profile--username">{user.username}</p>
                    {user._json.bio && <p>{user._json.bio}</p>}
                    <div className="profile--info">
                        <p><IoLocationSharp className="profile--icon"/>{user._json.location}</p>
                        <p><IoMailOutline className="profile--icon"/>{user.emails[0].value}</p>
                    </div>
                    {user._json.company && <p><BiBuildings className="profile--icon"/>{user._json.company}</p>}
                    <a className="profile--button" href={user.profileUrl}>Github profile</a>   
                    <div className="profile--links">
                        <Link className="link" to="/repositories">My Repositories</Link>
                        <Link className="link" to="/users">Other Users</Link>      
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Home
