import Results from "../components/Results"

import { useState } from "react"
import axios from "axios"

const Users = () => {
    const [searchInput, setSearchInput] = useState('')
    const [users, setUsers] = useState('')

    function handleChange(e){
        setSearchInput(e.target.value)
    }

    async function handleClick(){
        // console.log(searchInput)

        try{
            const result = await axios(`https://api.github.com/search/users?q=${searchInput}+in:user&per_page=20`)
            setUsers(result)
        }catch(err){
            console.log(err)
        }  
    }

    return (
        <div className="wrapper">
            <div className="users">
                <div className="users--info">
                    <h1 className="users--title">Search for other users</h1>
                    <div className="input">
                        <input 
                        className="search"
                            type="text" 
                            placeholder="Search" 
                            value={searchInput}
                            onChange={handleChange} 
                        />
                        <button className="search--btn" onClick={handleClick}>Search</button>
                    </div>
                    <Results users={users.data}/>
                </div>
            </div>
        </div>
    )
}

export default Users