import React,{Component} from 'react';
import ReactDOM from 'react-dom';

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

        //console.log(event.target.value)
    }

    //react provides this component
    render(){
        return(
            <header>
                <div classname="logo">Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
            </header>
        )

    }
}

// exporting component
export default Header;