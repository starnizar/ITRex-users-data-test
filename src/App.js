import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {hideLoader, setUsers} from "./redux/actions";
import UsersData from "./components/UsersData";
import UserAdditionalInfo from "./components/UserAdditionalInfo";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    (async function getUsersInfo() {
      const response = await fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
      const result = await response.json()
      setTimeout(()=>{
        dispatch(setUsers(result))
        dispatch(hideLoader())
      }, 1500)
    })()

  }, [dispatch])

  return (
    <div className="App">
      <UsersData />
      <UserAdditionalInfo />
    </div>
  );
}

export default App;
