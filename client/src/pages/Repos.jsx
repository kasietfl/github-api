import Repo from "../components/Repo"

import axios from "axios"
import { useEffect, useState } from "react"

const Repos = (props) => {
  const [repos, setRepos] = useState([])
  const { user } = props;
  console.log(user.username);

  useEffect(() =>{
    async function getRepos() {
      try{
        const result = await axios(`https://api.github.com/users/${user.username}/repos`)
        setRepos(result)
      }catch(err){
        console.log(err)
      }
    }
    getRepos();
  },[user]);

    return (
      <div className="wrapper">
        <div className="repos">
          <div className="repos--public">
            <h1 className="repos--title">Public Repositories</h1>
            <Repo repos={repos}/>
          </div>
          {/* <div className="repos--private">
            <h1 className="repos--title">Private Repositories</h1>
          </div> */}
        </div>
      </div>
    )
  
}

export default Repos