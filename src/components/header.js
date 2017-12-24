import React,{Component} from 'react';

// const Header=()=>{
//     return <div>Header</div>
// }

//class based component
class Header extends Component{

    constructor(props){
        super(props);

        //creating a state in react
        //state is like a database
        this.state={
            keywords:''
        }
    }

    inputChange(event){
        //changing state
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value);
        //console.log(event.target.value)
    }

    //react provides this component
    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <p>Search News:</p><input onChange={this.inputChange.bind(this)}/>
            </header>
        )

    }
}

// exporting component
export default Header;