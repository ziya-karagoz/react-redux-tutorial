import store from "./redux/store";
import "./App.css";
import { Provider } from "react-redux";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer></CakeContainer>
        <HooksIceCreamContainer></HooksIceCreamContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <NewCakeContainer></NewCakeContainer>
      </div>
    </Provider>
  );
}

export default App;
