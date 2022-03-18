const Results = (props) => {
    const { users } = props;
     console.log(users);
    const count = users && users.total_count;
    const listUsers = users ? (
      users.items.map(item => {
        return (
          <div>
            <li><a className="link" href={item.html_url}>{item.login}</a></li>
          </div>
        )
      }) 
      ) : (
        <p>No user found</p>
      )
    
    return (
      <div>
        {users && <h4>Total count of found users: {count}</h4>}
        <ul className="users--list">
          {listUsers}
        </ul>
      </div>
    )
}

export default Results