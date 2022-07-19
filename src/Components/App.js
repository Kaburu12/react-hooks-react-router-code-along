import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Login from "../Login";
import NavBar from "../NavBar";

function App() {
  return (
    //in react-router-dom version 6 and above this is what works and there's no need of using the prop "exact"
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={ <Login />}/>
        <Route path="/" element={ <Home />}/>
      </Routes>
    </div>
  );
}

export default App;

// in react-router-dom version 5 the following code works

// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Login from "./Login";
// import NavBar from "./NavBar";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route exact path="/about">
//           <About />
//         </Route>
//         <Route exact path="/login">
//           <Login />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;