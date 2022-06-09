import React, { Component } from 'react'
import { Link } from "react-router-dom";
  

export default class Navbar extends Component {
    handleQuery = async()=>{
        let query = await document.getElementById('querySearch').value;
        console.log("in handleQuery")
        //let query = "xx";
        //alert(query);
        //return (<Link className="nav-link" to='query'></Link>)
        this.props.handleSearch(query);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/">About</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" id="querySearch"  placeholder="Search" type="search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
// type="search"
// type="submit"