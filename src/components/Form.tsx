import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FormEventHandler } from "react";

interface FormPropTypes {
  createTodo: FormEventHandler;
  input: string;
  setInput: (input: string) => void;
}

const Form = ({ createTodo, input, setInput }: FormPropTypes) => {
  return (
    <form onSubmit={createTodo} className="flex justify-between bg-zinc-300 p-4 rounded-lg items-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full text-lg rounded-lg p-[3px]"
        type="text"
        placeholder="Plans for today"
      />
      <button className="ml-2 rounded-lg text-gray-800">
        <AddCircleIcon />
      </button>
    </form>
  );
};

export default Form;
