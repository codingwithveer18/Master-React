const Display = ({ value }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="w-11/12 p-2 text-2xl m-2 rounded-lg "
        value={value}
        readOnly
      />
    </div>
  );
};
export default Display;
