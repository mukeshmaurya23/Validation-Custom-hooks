import useValid from "../hooks/use-valid";
const BasicForm = (props) => {
  const {
    value: enterFirstName,
    hasError: firstNameInputIsInvalid,
    isValid: firstNameIsValid,
    reset: firstNameReset,
    valueInputBlurHandler: firstNameBlurHandler,
    valueInputChangeHandler: firstNameChangeHandler,
  } = useValid((value) => value.trim() !== "");
  const {
    value: enterLastName,
    hasError: lastNameInputIsInvalid,
    isValid: lastNameIsValid,
    reset: lastNameReset,
    valueInputBlurHandler: lastNameBlurHandler,
    valueInputChangeHandler: lastNameChangeHandler,
  } = useValid((value) => value.trim() !== "");

  const {
    value: enterEmail,
    hasError: emailInputIsInvalid,
    isValid: emailIsValid,
    reset: emailReset,
    valueInputBlurHandler: emailBlurHandler,
    valueInputChangeHandler: emailChangeHandler,
  } = useValid((value) => value.includes("@"));
  let formValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
    console.log(enterFirstName, enterLastName, enterEmail);
  };
  const FirstInputClass = firstNameInputIsInvalid ? "invalid" : "form-control";
  const lastInputClass = lastNameInputIsInvalid ? "invalid" : "form-control";
  const emailInputClass = emailInputIsInvalid ? "invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={FirstInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enterFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {firstNameInputIsInvalid && (
          <p className="error-text">FirstName Must Not be Empty</p>
        )}
        <div className={lastInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enterLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      {lastNameInputIsInvalid && (
        <p className="error-text">LastName Must Not be Empty</p>
      )}
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enterEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Email Must be proper</p>
      )}
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
