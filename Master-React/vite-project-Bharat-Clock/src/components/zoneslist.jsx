import styles from "./items.module.css";
const Item = ({ country, handleonclick, bought }) => {
  // let { country } = props;
  // & ({country}) are same
  // const buttonclicked = (event) => {
  //   console.log(event);
  //   console.log(`See you in ${country}`);
  // };
  return (
    <li
      className={`${styles["cn-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["cn-span"]}>{country}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleonclick}
        // onClick={() => buttonclicked(country)}
        // or we can do this
        //-- Anonymous function -- onClick={() => (country)}
        // or we can do this
        //-- onClick={buttonclicked} -- just passing the reference
      >
        See
      </button>
    </li>
  );
};
export default Item;
