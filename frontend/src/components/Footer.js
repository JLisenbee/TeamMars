import { Link } from 'react-router-dom'
import Wuphf from '../components/Wuphf'
import { ReactComponent as Twitter } from '../logos/twitter.svg';
import { ReactComponent as Git } from '../logos/github.svg';
import { ReactComponent as Discord } from '../logos/discord.svg';
import "../css/footer.css";


// Footer for the login, TOS, and Privacy Policy pages.
// Contains the Wuphf logo on the left of the pages and
// internal and external links on the right
const Footer = () => {
    return(
      <>
        <div className = "footer">
          <div className = "footerContent"> 
            <div className = "footerLink">
              <Wuphf />
            </div>
            
            <div className = "footerLink">
              <Link className = "footerText" to="/privacy">Privacy Policy</Link>
              <Link className = "footerText" to="/tos">Terms of Service</Link>
              <a href='https://twitter.com/UMBC'><Twitter /></a>
              <a href='https://github.com/JLisenbee/TeamMars'><Git /></a>
              <a href='https://discord.gg/bVtMPMe'><Discord /></a>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;