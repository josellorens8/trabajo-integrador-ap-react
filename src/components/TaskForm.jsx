function TaskForm({ onAgregarTarea }) {

    const manejoSubmit = (e) => {
        e.preventDefault();
        const todoForm = new FormData(e.target);
        const tarea = todoForm.get('tarea');
        onAgregarTarea(tarea)
        e.target.reset()
    }

    return (
        <form onSubmit={manejoSubmit}>
        <input className="form__input" type="text" name="tarea" id="tarea" aria-label="tarea" placeholder="Escriba una tarea..." required/>
        <input className="form__boton" type="submit" value="Agregar" />
        </form>
    );
}

export default TaskForm;