import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { useEffect } from "react"
import './App.css'

function obtenerTareasDesdeStorage(){
  const tareasAlmacenadas = window.localStorage.getItem("tareas");
  const tareas = JSON.parse(tareasAlmacenadas);
  return tareas ? tareas : [];
}

function App() {

  const [tareas, setTareas] = useState(obtenerTareasDesdeStorage())
  useEffect(() => {
    window.localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const manejoAgregarTarea = (tarea) => {
    const nuevaTarea = {
      id: self.crypto.randomUUID(),
      tarea: tarea,
      completada: false
    };
    setTareas([...tareas, nuevaTarea]);
  }

  const  manejoEstado = (id) => {
    const tareasModificadas = tareas.map(t => 
      t.id === id?
      {...t, completada: !t.completada }
      :
      t
      );

      setTareas([...tareasModificadas])
  }

  const  eliminarTarea = (id) => {
    const listaFiltrada = tareas.filter(t =>
      t.id !== id);
      setTareas([...listaFiltrada])
  }

  return (
    <div className="app__form">
      <TaskForm onAgregarTarea={(tarea) => manejoAgregarTarea(tarea)} />
      <TaskList tareas={tareas} manejarEstado={(id) => manejoEstado(id)}
      onEliminarTarea={(id) => eliminarTarea(id)} />
    </div>
  )
}

export default App
