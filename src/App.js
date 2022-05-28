import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// let name="Vipin";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"></Navbar>
      <div className="container my-3">
      <TextForm heading="Enter Text"></TextForm>
      </div>
    </>
  );
}

export default App;

// /*
// notes
// use camel case in jsx
// htmlFor
// tabIndex

// only one element can be returned in reurn function
// jsx fregment- <> </>


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with us
//         </a>
//       </header>
//     </div>

// Babel compiles JSX down to React.createElement() calls.



// <nav>
//         <li>Home</li>
//         <li>contact</li>
//         <li>About</li>
//       </nav>
//       // {/* <h1>hello {name}</h1> */}
//       // // <div className="container">
//       // //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam adipisci
//       // //   unde eos voluptatem vero voluptates ex enim repellendus suscipit
//       // //   excepturi? Nihil aspernatur minima vero ipsam debitis soluta impedit
//       // //   voluptatem explicabo? Corporis nemo sit, neque ipsum placeat ut, dolore
//       // //   adipisci nihil quod et distinctio delectus commodi laboriosam unde,
//       // //   doloribus natus sapiente facilis possimus facere qui ex. Voluptas, cum
//       // //   quasi. Incidunt, laborum!
//       // // </div>


