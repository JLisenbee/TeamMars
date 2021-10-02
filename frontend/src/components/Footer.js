import { Link } from 'react-router-dom'
import Wuphf from '../components/Wuphf'
import { ReactComponent as Twitter } from '../logos/twitter.svg';
import { ReactComponent as Git } from '../logos/github.svg';
import { ReactComponent as Discord } from '../logos/discord.svg';

// Footer for the login, TOS, and Privacy Policy pages.
// Contains the Wuphf logo on the left of the pages and
// internal and external links on the right
const Footer = () => {
    return(
      <>
        <div class = "footer">
          <div class = "footerContent"> 
            <div class = "footerText">
              <Wuphf />
            </div>
            
            <div>
              <Link class = "footerText" to="/privacy">Privacy Policy</Link>
              <Link class = "footerText" to="/tos">Terms of Service</Link>
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