import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import ClassComp from "./Components/ClassComp";
import Posts from "./Components/Posts";
import ComponentA from "./Components/ComponentA";
import { createContext, useState } from "react";
import Forms from "./Components/Forms";
import ClassLC from "./Components/ClassLC";
import FuncLC from "./Components/FuncLC";
import ApiComp from "./Components/ApiComp";
import UseReducerHook from "./Components/UseReducerHook";
import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";
import SignInForm from "./Components/SignInForm";
import ThemeToggle from "./Components/ThemeToggle";
import Counter from "./HOC/Counter";
import Hover from "./HOC/Hover";
import Todoss from "./HOC/Todoss";
import Postss from "./HOC/Postss";

export const messageContext = createContext(null);

function App() {
  const [mount, setMount] = useState(true);
  return (
    <div className="App">
      {/* <FirstComponent/> */}
      {/* <FirstComponent
        name="Sam"
        age={10}
        isValid={true}
        arr={[1, 2, 3]}
        // obj={{
        //   user: "user1",
        //   key: "val"
        // }}
      >
        {{
          user: "user1",
          key: "val"
        }}
      </FirstComponent> */}
      {/* <div>
        Inner text
      </div>
      <Posts/> */}
      {/* <Posts/> */}
      {/* <messageContext.Provider value={"A message from App.js"} >
        <ComponentA />
      </messageContext.Provider> */}
      {/* <Forms/>
      <SignInForm/> */}
      {/* {mount && <FuncLC />}
      <button onClick={() => setMount(!mount)}>(Un)Mount</button>
      <FuncLC/> */}
      {/* <ApiComp/> */}
      {/* <UseReducerHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <ThemeToggle/> */}

      {/* <Counter name="Ankush"/>
      <Hover/> */}
      <Todoss/>
      <Postss/>
     
    </div>
  );
}

export default App;
