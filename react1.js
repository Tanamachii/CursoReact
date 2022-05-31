//Boton que suma en react
function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment)
      return (
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
   function Display(props) {
    return (
      <div>{props.message}</div>
    );
   }
  
  function App(){
    const [counter,setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
      <>    
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>
        <Display message={counter}/>
      </>
    );
  }
  
  ReactDOM.render(
    <App></App>
    ,
    document.getElementById('mountNode'),
  );