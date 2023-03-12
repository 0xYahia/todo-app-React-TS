import { FC } from "react";
interface todoListProps {
  items: { id: string; text: string }[];
}
const TodoList: FC<todoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
