import React, { Component }
from 'react';
import './App.css';
// fontawesome
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import items from './data/data';

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
        return (
                <div className="App">
                    <Header onClickSearch={this.handleSearch}/>
                    <Content items={this.state.items}/>
                    <Footer/>
                </div>
                );
    }
}

export default App;
