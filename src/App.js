import React, { Component }
from 'react';
import './App.css';
// fontawesome
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    ;
    render() {
        return (
                <div className="App">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
                );
    }
}

export default App;
