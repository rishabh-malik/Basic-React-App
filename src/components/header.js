import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// const Header=()=>{
//     return <div>Header</div>
// }

//class based component
class Header extends Component{
    //react provides this component
    render(){
        return(
            <header>
                <div classname="logo">Logo</div>
                <input/>
            </header>
        )

    }
}

// exporting component
export default Header;