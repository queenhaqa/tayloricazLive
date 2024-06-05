export const WordCell = ({ word, isVisible = false, losingWord = false }) => {
  return (
    <div className={`${!losingWord ? isVisible && "animate-appear" : "animate-appear-lose" } border color-gree`}>
      <p
        className={`${
          isVisible ? "visible"  : "invisible"
        } `}
      >
        {word}
      </p>
    </div>
  );
};
