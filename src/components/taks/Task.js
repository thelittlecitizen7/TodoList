import React from 'react'

function Task(props){
  

    return (
        <div>
            <input type="checkbox" key={props.index} defaultChecked={props.isDone}></input>
            <label>{props.task} </label>
            <input type="button" value="Delete" onClick={() => {props.onDelete()}}></input>
        </div>
    )

}
export default Task