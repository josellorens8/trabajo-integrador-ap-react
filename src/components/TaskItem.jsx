import { FaCheckSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function TaskItem({ tarea, manejarEstado, onEliminarTarea }) {
    return (
        <>
            <p>{tarea.tarea}</p>
            <div className="tareas__iconos">
                <FaCheckSquare
                    onClick={() => manejarEstado(tarea.id)} />
                <FaTrash onClick={() => onEliminarTarea(tarea.id)} />
            </div>
        </>
    );
}

export default TaskItem;