import React from 'react';

const newsList=(props)=>{
    //console.log(props);
    //loop through items in json
    //map is like a for loop
    const items=props.news.map((item)=>{
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    })
    return(
        <div>
        {items}
        </div>
    )
}

export default newsList;