import { Link } from 'react-router-dom'

// Wuphf logo component with vector image and text, links to home page
const Wuphf = () => {
    return(
      <>
      <Link to="/home">
        <svg 
            /* Vector image for the Wuphf logo */
            width="60" 
            height="60" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0006 0H29.3993C34.9418 0 39.3999 4.52599 39.3999 10.1529V29.8471C39.3999 35.474 34.9418 40 29.3993 40H10.0006C4.45809 40 0 35.474 0 29.8471V10.1529C0 4.52599 4.45809 0 10.0006 0Z" fill="#EFE7DC"/>
            <path d="M5.30153 22.1407C5.18104 21.2844 5.663 20.4282 6.38593 20.0612C7.95229 19.0826 9.88011 18.9603 11.567 19.6942C12.1694 20.0612 12.7718 20.3059 13.3743 20.7952C13.9767 21.1621 14.2177 22.0184 13.8562 22.7523C13.3743 23.6086 12.8923 24.3426 12.1694 25.0765C10.844 26.789 8.43424 27.0337 6.62691 25.6881C6.50642 25.5658 6.26544 25.4435 6.14495 25.1988C5.54251 24.3426 5.18104 23.2416 5.30153 22.1407Z" fill="black"/>
            <path d="M25.664 17.6147C24.9411 17.4924 24.3387 17.4924 23.7362 17.2477C23.1338 17.0031 22.8928 16.3915 23.0133 15.6575C23.3747 13.945 24.8206 12.7217 26.5075 12.3548C28.3148 11.9878 30.1221 12.9664 30.9655 14.6789C31.086 14.9236 30.8451 15.4129 30.8451 15.7798H30.6041V14.8012L29.3992 16.2691C28.6763 17.0031 27.7123 17.3701 26.6279 17.2477C26.146 17.2477 26.0255 16.8808 26.0255 16.3915C26.0255 15.7798 26.0255 15.2905 26.146 14.6789C26.2665 14.1896 26.5075 13.578 26.7484 13.0887C26.0255 12.7217 25.0616 13.3334 24.3387 14.5566C23.8567 15.5352 24.2182 16.3915 25.664 17.6147Z" fill="black"/>
            <path d="M22.6518 31.3149C20.6035 31.9265 18.5551 33.0274 16.2659 32.5381C15.9044 32.4158 15.5429 32.2935 15.1815 32.1712C13.4946 31.4372 11.6873 30.9479 9.87994 30.8256C8.43408 30.5809 7.1087 30.0916 5.90381 29.3577C6.14479 29.2354 6.38576 29.2354 6.62674 29.2354C7.83163 28.9907 9.15701 29.2354 10.3619 29.7247C11.8078 30.4586 13.2536 30.8256 14.6995 31.6819C15.6634 32.0488 16.7478 32.1712 17.7117 31.8042C18.7961 31.5595 19.76 31.3149 20.8444 31.0702C21.4469 31.0702 22.0493 31.0702 22.6518 31.0702V31.3149Z" fill="black"/>
            <path d="M13.2538 10.8867C12.8924 9.78577 11.567 9.17415 10.4826 9.66344C10.3621 9.66344 10.3621 9.66344 10.2416 9.78577C9.27769 10.1527 8.79573 11.009 8.67524 11.9876C8.67524 12.1099 8.67524 12.3546 8.55476 12.4769C8.31378 13.5778 8.67525 13.9448 9.75965 14.0671C10.1211 14.0671 10.4826 14.0671 10.844 14.0671C11.9284 14.0671 12.8924 13.3332 13.2538 12.2322C13.3743 11.8653 13.3743 11.376 13.2538 10.8867ZM10.3621 13.8225C9.63916 13.7001 9.1572 13.0885 9.1572 12.4769C9.27769 11.2537 10.1211 10.2751 11.326 10.1527C9.39818 11.009 9.63916 12.3546 10.3621 13.8225Z" fill="black"/>
        </svg>
        <svg
            /* Vector image for the Wuphf logo */
            height="30" 
            width="200"
            overflow="visible"
            >
            <text 
            x="15" 
            y="25" 
            fill = "var(--accent)" 
            fontSize = "50"
            className = "svgText">
            <tspan fontSize="70">W</tspan>uphf</text>
        </svg> 
        </Link>
      </>
    )
  }
  
  export default Wuphf;