const Repo = (props) => {
  const {repos} = props;

  const listRepos = repos.length !== 0 ? (
    repos.data.map((item) => {
      return (
        <div className="repo" key={item.id}>
          <h2 className="repo--title">{item.name}</h2>
          <a className="repos--link" href={item.html_url}>Open repository in Github</a>
          <div className="repos--owner">
            <a className="link" href={item.owner.html_url}>Owner: {item.owner.login}</a>
          </div>
        </div>
        )
    })
  ) : (
      <li>No repo found</li>
  )

  return (
    <div>{listRepos}</div>
  )
}

export default Repo