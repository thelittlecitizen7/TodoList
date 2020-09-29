import React from 'react'

function TaskInserted(props){

    function handlerButtonClick(){
        var taskText = document.getElementById("task")
        
        props.handleClick({taskText : taskText.value , isDone : false })
    }

    return (
        <div>
              <input type="text" id="task"></input>
              <input type="submit" value="Insert task" onClick={handlerButtonClick}></input>
        </div>
    )
}

export default TaskInserted;