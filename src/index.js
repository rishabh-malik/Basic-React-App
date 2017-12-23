import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
import NewsList from './components/news_list';
//importing json file
import JSON from './db.json';

class App extends Component{

    constructor(props){
        super(props);

        this.state={
            news:JSON
        }
    }

    //passing data to newslist through props
    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));