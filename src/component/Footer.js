import React, { Component }
from 'react';
import Links from './Footer/Links';
class Footer extends Component {
    render() {
        return (
                <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-4 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <Links/>
                            <Links/>
                            <Links/>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fa fa-facebook"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fa fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fa fa-google-plus"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fa fa-linkedin"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fa fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
                    </div>
                </footer>

                );
    }
}

export default Footer;



