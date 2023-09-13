import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './features/dataSlice';

function App() {
  const data = useSelector((state)=>state.api);
  const dispatch = useDispatch();
  if(data.loading){
    return (<h1>loading...</h1>)
  }
  if(data.error != null){
    return (<h3>{data.error}</h3>)
  }
  return (
    <div className="App">
      <h1>Hello Parent Component</h1>
      <button onClick={()=>dispatch(getData())} >Click Me !!!</button>
      {
        data.users.map((value)=>(
          <p key={value.id} >{value.title}</p>
        ))
      }
    </div>
  );
}

export default App;
