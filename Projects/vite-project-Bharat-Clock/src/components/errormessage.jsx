const Errormessage = ({ items, message }) => {
  return (
    <>
      {items.length === 0 && (
        <h3 className="text-white text-xl text-center">No time zone</h3>
      )}
      {message && (
        <p className="text-red-500 font-medium text-center">{message}</p>
      )}
    </>
  );
};
export default Errormessage;
