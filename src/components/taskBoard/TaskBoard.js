import React, { useState } from 'react'
import TaskInserted from '../taskInserter/TaskInserter'
import TaskList from '../taskList/TasksList'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function TaskBoard(){
    const [tasks,setTasks] = useState(() => {
        const item = window.localStorage.getItem("tasks");
        return item ? JSON.parse(item) : [];
    })

    const setValue = (value) => {
        try {
            setTasks(value);
            window.localStorage.setItem("tasks", JSON.stringify(value));
        } catch (error) {
          console.error(error);
        }
      };
    

    function handleClick(task){
        var t = [...tasks,task]
        tasks.push(t)
        setValue(t)
    }

    function handleDelete(task){
        var index = tasks.indexOf(task)
        tasks.splice(index, 1);
        setValue([...tasks])
    }

    return (
        <div className="taskBoard">
            <Row className="justify-content-md-center">
                <h1>Todo List</h1>
            </Row>
            <Row className="justify-content-md-center border border-dark">
                <Col md={5}>
                    <Row className="justify-content-md-center">
                        <TaskList tasks={tasks} handleDeleteClick={handleDelete}/>
                    </Row>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <TaskInserted handleClick={handleClick}/>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default TaskBoard;

 

