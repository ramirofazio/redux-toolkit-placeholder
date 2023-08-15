import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header";
import Email from "./components/Email";
import { addUser } from "./redux/userSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Email />
      <Header />
    </div>
  );
}

export default App;
