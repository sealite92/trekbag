import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAll,
  handleResetToInitial,
  handleMarkAllComplete,
  handleMarkAllInComplete,
}) {
  return (
    <div className="button-group">
      <Button onClick={handleMarkAllComplete} buttonType="secondary">
        {" "}
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllInComplete} buttonType="secondary">
        {" "}
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        {" "}
        Reset to initials
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAll}>
        {" "}
        Remove all items
      </Button>
    </div>
  );
}
