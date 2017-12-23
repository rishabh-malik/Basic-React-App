import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';

const App=()=>{
    return (
     <div> 
         <Header/>  
        <h1>Hello</h1>
     </div>   
    )
}

ReactDOM.render(<App />, document.getElementById('root'));