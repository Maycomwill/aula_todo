import { useParams } from "react-router-dom"

function UniqueTodo() {
  const params = useParams();
  const id = params.todoId
  return (
    <div>Todo: {id}</div>
  )
}

export default UniqueTodo