import React from "react";

const Hello = ()=>{

   // using JSX
    // return (
    //     <div>
    //         <h1>
    //             Hello Debjit
    //         </h1>
    //     </div>
    // )

    
    // without JSX
    return React.createElement('div',
    {
        id : 'hello',
        className: 'dummyClass'
    },
    React.createElement('h1',null,'Hola Debjit!!'))
}

export default Hello