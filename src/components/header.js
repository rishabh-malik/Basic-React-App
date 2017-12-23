import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// const Header=()=>{
//     return <div>Header</div>
// }

//class based component
class Header extends Component{

    inputChange(event){
        console.log(event.target.value)
    }

    //react provides this component
    render(){
        return(
            <header>
                <div classname="logo">Logo</div>
                <input onChange={this.inputChange}/>
            </header>
        )

    }
}

// exporting component
export default Header;