import React, { Component }
from 'react';
import './App.css';
// fontawesome
import 'font-awesome/css/font-awesome.min.css'; 
import 'react-bootstrap-modal/lib/css/rbm-patch.css'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import items from './data/data';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'strSearch' : '',
            'items': items
        };
        this.handleSearch = this.handleSearch.bind(this);
    };
    handleSearch(value){
        this.setState({
            'strSearch' : value
        });
    }
    render() {
        let search = this.state.strSearch;
//        this.state.items = _.filter(this.state.items, function(o) {
//            return _.includes(o.nameGroup, search);
//        });
        return (
                <div className="App">
                    <Header onClickSearch={this.handleSearch}/>
                    <Content items={this.state.items}/>
                    <Footer/>
                </div>
              );
    }
}
require('./redux/elements.js');
export default App;
