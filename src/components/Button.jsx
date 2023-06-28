const Button = (props) => {
  return (
    <button
      {...props}
      style={{
        padding: "4px 8px",
        backgroundColor: "#a9a9a9",
        border: "none",
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
