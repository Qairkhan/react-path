import React from "react";

const TextareaCastom = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
        )
}



export {TextareaCastom}