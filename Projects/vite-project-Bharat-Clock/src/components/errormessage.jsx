const Errormessage = ({ items, message }) => {
  return (
    <>
      {message && (
        <p className="text-red-500 font-medium text-center">{message}</p>
      )}
    </>
  );
};
export default Errormessage;
