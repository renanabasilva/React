import styles from "./MenuLink.module.css"
import { NavLink } from "react-router-dom"
// import { Link, useLocation } from "react-router-dom"


export default function MenuLink({children, to}) {

  // const localizacao = useLocation()

  return (
    // <Link 
    //   className={`${styles.link} ${localizacao.pathname === to && styles.linkDestacado}`} 
    //   to={to}
    // >
    //   {children}
    // </Link>
    <NavLink 
      className={({isActive}) => `${styles.link} ${isActive && styles.linkDestacado} `} 
      to={to} 
      end
    >
      {children}
    </NavLink>
  )
}