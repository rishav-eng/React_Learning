const reactDescription = ["fundamental", "crucial", "core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
custom component - Component should be uppercase and to make the difference b/w built in html tags
 and custom component, react uses uppercase naming convention for custom component
*/
function Header() {
  /* Good practice to keep all the calculation logic outside of JSX and store in variable.
   after that use the same variable below JSX. 
  */
  const description = reactDescription[genRandomInt(3)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>

        {/* Dynamic values should be enclosed inside '{}'. if we want to access or perform dynamic
         calculation inside JSX */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}


function App() {

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </>
  )
}

export default App;
