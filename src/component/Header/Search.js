import React, { Component }
from 'react';
class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            'strSearch': ''
        };
        this.btnSearch = this.btnSearch.bind(this);
        this.btnClear = this.btnClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    btnSearch(){
        this.props.onClickSearch(this.state.strSearch);
    };
    btnClear(){
        this.setState({strSearch: ''});
        this.props.onClickSearch(this.state.strSearch);
    }
    handleChange(event){
      this.setState({strSearch: event.target.value});
    };
    render() {
        return (
                <div>
                    <form className="navbar-form navbar-right" action="/action_page.php">
                        <div className="col-lg-12">
                            <div className="input-group">
                                <input type="text" className="form-control" value={this.state.strSearch} onChange={this.handleChange} placeholder="Thông tin tìm kiếm..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={this.btnSearch}>Tìm kiếm</button>
                                    <button className="btn btn-warning" type="button" onClick={this.btnClear}>Xóa</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                );
    }
}

export default Search;



