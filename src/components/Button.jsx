import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ text, styles, handler }) => {
  return (
    <button className={`btn ${styles}`} type="submit" onClick={handler}>
      {text}
    </button>
  );
};

// def props
Button.defaultProps = {
  text: "Click",
  styles: "btn",
  handler: () => {},
};

// propTypes
Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default Button;
