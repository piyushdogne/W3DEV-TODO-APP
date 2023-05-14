import AddCircleIcon from "@mui/icons-material/AddCircle";

const Form = () => {
  return (
    <form className="flex justify-between bg-teal-700 p-4 rounded-lg">
      <input
        className="border w-full text-lg rounded-tl-lg rounded-bl-lg p-[3px]"
        type="text"
        placeholder="Plans for today"
      />
      <button className="p-[3px] bg-gray-700 border-none outline-0 px-2 rounded-tr-lg rounded-br-lg text-white">
        <AddCircleIcon />
      </button>
    </form>
  );
};

export default Form;
