import { Link } from 'react-router-dom'

const Footer = () => {
    return(
      <>
        <div class = "footer">
          <div class = "footerContent"> 
            <div class = "footerText">Wuphf [Placeholder]</div>
            
            <div>
              <Link class = "footerText" to="/privacy">Privacy Policy</Link>
              <Link class = "footerText" to="/tos">Terms of Service</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;