import Form from "./components/Form";
import { FormEventHandler } from "react";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { db } from "./components/Firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

interface TodoType {
  text?: string;
  completed?: boolean;
  id: string;
}

const App = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  //Create Todo
  const createTodo: FormEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  //Read Todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr: TodoType[] = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update Todo
  const toggleComplete = async (todo: TodoType) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //Delete Todo
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="h-screen w-screen p-4 bg-slate-900 overflow-y-scroll">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 p-2">
          A DEV'S TODO LIST
        </h1> */}
        {/* Don't use caps inside of text as it's bad for accessibility, instead write generally and then use css to capitalize */}
        <h1 className="text-3xl font-bold text-center text-gray-800 p-2 uppercase">
          W3dev&apos;s to-do list
        </h1>
        <Form createTodo={createTodo} input={input} setInput={setInput} />
        <ul>
          {todo.map((todos, index) => (
            <Todo
              key={index}
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className="text-center">
          {todo.length && todo.length === 1
            ? "You have one task left"
            : `You have ${todo.length} tasks left`}
        </p>
      </div>
    </div>
  );
};

export default App;
