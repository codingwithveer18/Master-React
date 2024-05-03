import styles from "./countryinput.module.css";

const Countryinput = ({ handleonchange, handleonclick, onenter }) => {
  // const handleonchange = () => {
  //   console.log(event.target.value);
  // };
  return (
    <>
      <input
        className={styles.input}
        placeholder="Enter Country"
        type="text"
        // onChange={handleonchange}
        onKeyDown={onenter}
      />
      {/* <button
        className={`${styles.button} btn btn-info`}
        onClick={handleonclick}
      >
        Add
      </button> */}
    </>
  );
};
export default Countryinput;
