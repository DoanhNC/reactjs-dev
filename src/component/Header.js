import React, { Component }
from 'react';
import Search from './Header/Search';

class Header extends Component {
    render() {
        return (
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">WebSiteName</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                            </ul>
                            <Search onClickSearch={this.props.onClickSearch}/>
                        </div>
                    </nav>
                </div>

                );
    }
}

export default Header;



