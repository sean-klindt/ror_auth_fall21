import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const MainNavbar = ({ user, handleLogout, history }) => {
  
  const rightNavItems = () => {
    if (user) {
      // links for when the user is logged in
      return (
        <>
          <li onClick={() => handleLogout(history)}>
            Logout
          </li>
        </>
      )
    } else {
      // links for when the user is not logged in
      return(
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  
  return(
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...value} {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedMainNavbar);