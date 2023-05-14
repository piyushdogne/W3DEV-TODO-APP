import { GrAddCircle } from "react-icons/gr";

const Form = () => {
  return (
    <form className="flex justify-between bg-teal-700 p-4 rounded-lg">
      <input
        className="border w-full text-lg rounded-tl-lg rounded-bl-lg p-[3px]"
        type="text"
        placeholder="Plans for today"
      />
      <button className="p-[3px] bg-white border-none outline-0">
        <GrAddCircle size={30} color="white" />
      </button>
    </form>
  );
};

export default Form;
