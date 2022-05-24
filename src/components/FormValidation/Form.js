import styles from "./Form.module.css";
import useValid from "../hooks/use-valid";
const Form = (props) => {
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    isValid: nameIsValid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useValid((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    isValid: emailIsValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useValid((value) => value.includes("@"));

  let FormISValid = false;

  if (nameIsValid && emailIsValid) {
    FormISValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      return;
    }
    props.onAddName(enteredName, enteredEmail);
    console.log(enteredName, enteredEmail);
    nameReset();

    emailReset();
  };
  const nameInputClass = nameInputIsInvalid
    ? `${styles["invalid"]}`
    : `${styles["form-control"]}`;
  const emailInputClass = emailInputIsInvalid
    ? `${styles["invalid"]}`
    : `${styles["form-control"]}`;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={enteredName}
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className={styles["error-text"]}>Name Must Not be Empty</p>
      )}
      <div className={emailInputClass}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={enteredEmail}
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
      </div>
      {emailInputIsInvalid && (
        <p className={styles["error-text"]}>Enter Valid Email</p>
      )}

      <div className={styles["form-actions"]}>
        <button disabled={!FormISValid}>Submit</button>
      </div>

      {props.items.map((item) => (
        <ul key={item.id}>
          <li>
            {item.text}
            {item.email}
          </li>
        </ul>
      ))}
    </form>
  );
};

export default Form;
