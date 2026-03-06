const Line = (props) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.emoji);
      }}
      onMouseOver={() => {
        props.setCurrentHover(props.index);
      }}>
      <span>{props.emoji}</span>
      <span>{props.name}</span>
      {props.currentHover === props.index && (
        <span className="copy">Click to copy!</span>
      )}
    </button>
  );
};

export default Line;
