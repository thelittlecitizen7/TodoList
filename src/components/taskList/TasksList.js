import React from 'react'
import Task from '../taks/Task'
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskList(props){

    function renderTaks(){
        var tasks = props.tasks;
        var tasksHtml = tasks.map((task,index) => {
                return (
                    <Task key={index} index={index} task={task.taskText} 
                    isDone={task.isDone} onDelete={() => props.handleDeleteClick(task)}/>
                )
        })
        return (
            <div id="tasks">
                {tasksHtml}
            </div>
            )
    }
    return (
        <div className="taskList">
            {renderTaks()}
        </div>
    )
}

export default TaskList;

 

