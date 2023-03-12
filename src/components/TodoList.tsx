import { FC } from "react";
import "./TodoList.css";
interface todoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: FC<todoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
