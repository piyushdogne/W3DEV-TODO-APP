import { GrAddCircle } from "react-icons/gr";

const Form = () => {
  return (
    <form className="flex justify-between bg-teal-700 p-4 rounded-lg">
      <input className="border w-full text-lg rounded-md p-[3px]" type="text" placeholder="Plans for today" />
      <button className="border p-4 ml-2 bg-slate-300 text-gray-300">
        <GrAddCircle size={30} />
      </button>
    </form>
  );
};

export default Form;
