import './index.css'

import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <ul>
    <li>
      <Link className="link" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="link" to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default withRouter(Header)
