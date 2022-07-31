import React from 'react'
import { Link, useLocation } from "react-router-dom";
  

const Navbar = (props)=>{
    // handleQuery = async()=>{
    //     let query = await document.getElementById('querySearch').value;
    //     console.log("in handleQuery")
    //     //let query = "xx";
    //     //alert(query);
    //     //return (<Link className="nav-link" to='query'></Link>)
    //     this.props.handleSearch(query);
    // }
    let location = useLocation();
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Meow</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/">About</Link></li> */}
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/business' ? "active" : ""}`} to="/business">business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/entertainment' ? "active" : ""}`} to="/entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/health' ? "active" : ""}`} to="/health">health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/science' ? "active" : ""}`} to="/science">science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/sports' ? "active" : ""}`} to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/technology' ? "active" : ""}`} to="/technology">technology</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/query' ? "active" : ""}`} to="/query">search</Link></li>
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" id="querySearch" onChange={event => props.setQuery(event.target.value)}  placeholder="Search" type="search" aria-label="Search" />
                            <span className="nav-item"><Link className="nav-link" to="/query">search</Link></span>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
    export default Navbar;

    //<button className="btn btn-outline-success"  type="submit" >Search</button>
    // type="search" 
// type="submit" onClick={()=>{<Link className="nav-link" to="/query">technology</Link>}}