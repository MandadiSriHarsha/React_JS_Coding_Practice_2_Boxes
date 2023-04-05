const Box = (props) => {
  const { className, text } = props;
  return <div className={className}>{text}</div>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-card">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
