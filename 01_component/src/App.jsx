import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { useState } from 'react';

function App() {
  //react state hook will return an array with two elements and destructing.
  const [selectedTopic, setTopic] = useState();

  console.log('App component executing');

  // event handler implementation in react
  function clickHandler(selected_component) {
    setTopic(selected_component); //react Hooks method - app fucntion called again
    console.log(selectedTopic); // print previous state as at this stage we are previous app fucntion
  }


  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {/* custom component attribute props - passing attribute props using spread operator 
            and object destrucring method */}
            {CORE_CONCEPTS.map(concept =>
              <CoreConcept key={concept.title} {...concept} /> /* array of data dynamically */
            )}

          </ul>
        </section>

        {/* custom component attribute props - content b/w closing and opening tag same like html */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components' ? true : undefined}
              onSelect={() => clickHandler("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx' ? true : undefined} 
            onSelect={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props' ? true : undefined} 
            onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state' ? true : undefined} 
            onSelect={() => clickHandler("state")}>State</TabButton>
          </menu>

          {/* accessing content on button click of tab pane and showing repective content using state hook */}
          {!selectedTopic ?  /* conditional rendering */
            <p>Please select a topic</p>
            :
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
        </section>
      </main>
    </>
  )
}

export default App;
