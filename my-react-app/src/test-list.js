import React from "react";

function ListComponent(props){
    const myList = [
        {
            id: 'p',
            name: 'php'

        },
        {
            id: 'j',
            name: 'javascript'

        },
        {
            id: 'c',
            name: 'c++'

        },
        {
            id: 'py',
            name: 'python'

        }
    ]

    const listItems = myList.map((item) => <li key={item.id}>{item.name}</li>)
    return(
        <ul>{listItems}</ul>
    )
}

export default ListComponent;