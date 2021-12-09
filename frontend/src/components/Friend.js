import Pic from './Pic'


// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Friend = ({data}) => {
    return(
        <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0 0 0' }}>
            <Pic picture={data.picture} userId={data._id} /> 
            <div style={{padding: '0 0 0 10px'}}>
                { data.name }
            </div>
        </div>
    )
  }
  
  export default Friend;