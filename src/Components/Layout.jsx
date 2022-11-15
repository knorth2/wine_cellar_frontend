import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function Layout({ children, user, wine, logout }) {
  let location = useLocation();

  return (
    <div>
      {children}
      {location.pathname === '/about' || location.pathname === '/wine' || location.pathname === '/faq' ?
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