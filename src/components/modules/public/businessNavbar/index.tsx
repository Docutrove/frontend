import { Link } from "react-router-dom";
import { Icon } from "../../ui/Icon";
import '../businessNavbar/index.scss'

export default function businessNavbar() {
    return (
        <div className="business--registration--nav">
        <div className="business--registration--nav--content">
                <Link to="/">
                     <Icon name="logo-light" className="nav-logo" />
                 </Link>

             <button className='home--button'>Back To Home</button>
        </div>
     </div>
    )}