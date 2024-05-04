import styles from "./Buttons.module.css";

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
    <div className={styles.buttonsContainer}>
      {buttons.map((btn) => (
        <button className={styles.button} onClick={() => onbtnclick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
