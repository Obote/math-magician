import "./Calculator.css";

function Calculator() {
  return (
    <>
      <div className="calc">
        <input type="text" placeholder="0" id="answer"></input>
        <input type="button" value="9"></input>
        <input type="button" value="8"></input>
        <input type="button" value="7"></input>
        <input type="button" value="6"></input>
        <input type="button" value="5"></input>
        <input type="button" value="4"></input>
        <input type="button" value="3"></input>
        <input type="button" value="2"></input>
        <input type="button" value="1"></input>

        <input type="button" value="0"></input>
        <input type="button" value="+"></input>
        <input type="button" value="-"></input>
        <input type="button" value="/"></input>
        <input type="button" value="*"></input>
        <input type="button" value="%"></input>
      </div>
    </>
  );
}
export default Calculator;
