import React, { Component }
from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

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
                    <Footer/>
                
                
                </div>
                );
    }
}

export default App;
