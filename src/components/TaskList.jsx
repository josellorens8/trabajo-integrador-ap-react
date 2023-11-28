import './TasksStyles.css'
import TaskItem from "./TaskItem";

function TaskList({ tareas, manejarEstado, onEliminarTarea }) {

    return (
        <>
            <ul className="tareas__container">
                {tareas.map(t =>
                    <li className={`${t.completada ? "completada" : null} tareas__tarea`} key={t.id}>
                        <TaskItem tarea={t} manejarEstado={manejarEstado} onEliminarTarea={onEliminarTarea}/>
                    </li>
                    )}
            </ul>
       
        </>
    );
}

export default TaskList;