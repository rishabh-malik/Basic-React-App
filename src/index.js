import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
//importing json file
import JSON from './db.json';

class App extends Component{

    constructor(props){
        super(props);

        this.state={
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));