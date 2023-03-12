import { FC, FormEvent, useRef } from "react";

const NewTodo: FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enterdText = textInputRef.current!.value;
    console.log(enterdText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="text-todo"></label>
        <input type="text" id="text-todo" ref={textInputRef} />
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  );
};

export default NewTodo;
