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
            news:JSON,
            filtered:JSON
        }
    }

    //getting data from child component
    filterNews(keywords){
        

    }

    //passing data to newslist through props
    render(){
        return(
            <div>
                <Header newsSearch={keywords=>{
                    this.filterNews(keywords)
                }}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));