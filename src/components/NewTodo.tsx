import { FC, FormEvent, useRef } from "react";
import "./NewTodo.css";

interface newTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: FC<newTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enterdText = textInputRef.current!.value;
    if (enterdText) {
      props.onAddTodo(enterdText);
    }
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="text-todo"></label>
        <input type="text" id="text-todo" ref={textInputRef} />
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  );
};

export default NewTodo;
