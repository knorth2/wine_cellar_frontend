import { useLocation, useParams } from 'react-router-dom';
import Footer from './Footer';

export default function Layout({ children, user, wine, logout }) {
  let location = useLocation();
  // let { id } = useParams();

  return (
    <div>
      {children}
      {location.pathname === '/about' || location.pathname === '/wine'  ?
        <Footer
          user={user}
          wine={wine}
          logout={logout}
        />
        : null
      }
    </div>
  )
}