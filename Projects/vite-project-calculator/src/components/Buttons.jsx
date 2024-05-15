const Buttons = ({ onbtnclick }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5 bg-slate-300">
      {buttons.map((btn) => (
        <button
          className="text-2xl m-2 bg-slate-100 p-2 hover:bg-slate-50 rounded-lg"
          onClick={() => onbtnclick(btn)}
          key={btn}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
