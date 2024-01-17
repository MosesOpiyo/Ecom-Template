const Navbar = () => {
    const majorNavStyle = {
        color:'black',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize:'12px',
        padding:'15px'
    }
    const minorNavStyle = {
        color:'black',
        textTransform: 'uppercase',
        fontSize:'12px',
        padding:'15px'
    }
    const inputStyle = {
        height:'30px',
    }
    const iconStyle = {
        size:'20px'
    }
    const spacing = {
        marginLeft:'50px',
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding:'25px',position:'fixed',width:'100%' }}>
        <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" style={majorNavStyle} href="#">men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={majorNavStyle} href="#">women</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={majorNavStyle} href="#">kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={minorNavStyle} href="#">sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={minorNavStyle} href="#">lifestyle</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={minorNavStyle} href="#">sale</a>
            </li>
          </ul>
        </div>
        <div className="end">
        <form class="form-inline my-2 my-lg-0">
        <input style={inputStyle} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        </div>
        <div className="buttons" style={spacing}>
        <a href="" class="cart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ color:'black',paddingBottom:'5px' }} fill="currentColor"  viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg></a>
        <button style={{ marginLeft:'20px',border:'0' }} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
      </nav>  
    )
}
export default Navbar