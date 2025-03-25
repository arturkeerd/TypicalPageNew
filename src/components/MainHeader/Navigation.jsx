import './Navigation.css' 
import Button from '../UI/Button'

import AuthContext from '../../store/auth_context'

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => (
        <nav className="nav">
          <ul>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/users">Admin</a>
            </li>
            {ctx.loggedIn && (
              <li>
                <Button onClick={ctx.onLogout}>Logout</Button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </AuthContext.Consumer>
  )
}

export default Navigation