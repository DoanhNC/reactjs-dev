import React, { Component }
from 'react';
class Search extends Component {
    render() {
        return (
                <div>
                    <form className="navbar-form navbar-right" action="/action_page.php">
                        <div className="col-lg-12">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Thông tin tìm kiếm..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Tìm kiếm</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                );
    }
}

export default Search;



