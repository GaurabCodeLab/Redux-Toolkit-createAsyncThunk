import { getData } from "./features/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const response = useSelector((state) => state.apiData);
  if (response.loading) {
    return <h1>lOADING...</h1>;
  }

  return (
    <>
      <h1>Hello parent component</h1>
      {response.error ? (
        <h1>Error in fetching data</h1>
      ) : (
        response.data.map((value, index) => (
          <h3 key={index}> {value.title} </h3>
        ))
      )}
    </>
  );
}

export default App;
