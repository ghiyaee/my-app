function Child(props) {
    return (
      <div>
        <h1>manoochehr</h1>
        <button onClick={()=> props.changeWord('manoochehr')}>click</button>
      </div>
    );
}
export default Child;