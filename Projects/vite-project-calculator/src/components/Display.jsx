const Display = ({ value }) => {
  return (
    <div className="flex justify-center w-full">
      <input
        type="text"
        className="w-full p-2 text-2xl mt-2 mb-4 rounded-md bg-neutral-300 border-2 text-black"
        value={value}
        readOnly
      />
    </div>
  );
};
export default Display;
