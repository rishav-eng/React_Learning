import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from '../Wrapper/Section.jsx';
import Tabs from '../Wrapper/Tabs.jsx';

export default function Examples() {
    //react state hook will return an array with two elements and we are destructing for our use.
    const [selectedTopic, setTopic] = useState();

    // event handler implementation in react
    function clickHandler(selected_component) {
        setTopic(selected_component); //react Hooks method - app fucntion called again
        console.log(selectedTopic); // print previous state as at this stage we are previous fucntion cycle
    }

    {/* conditional rendering */ }
    let tabContent = (!selectedTopic) ? <p>Please select a Topic</p> : <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
        </pre>
    </div>

    return (
        <>
            {/* custom component attribute props - content b/w closing and opening tag same like html */}
            <Section title="Examples" id="examples">
                {/* Here we have created additional wrapper component
                Passing TabButton as a JSX value in button props and tabcontent as children props
                if we pass isSelcted and onSelect as props to Tabs component then it will create complexity
                and difficult to manage and Tabs component will not be able to use as common component. 
                this method is JSX slots 
                */}
                <Tabs
                    button={<>
                        {/* accessing content on button click of tab pane and showing repective content using state hook */}
                        <TabButton isSelected={selectedTopic === 'components' ? true : undefined}
                            onSelect={() => clickHandler("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx' ? true : undefined}
                            onSelect={() => clickHandler("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props' ? true : undefined}
                            onSelect={() => clickHandler("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state' ? true : undefined}
                            onSelect={() => clickHandler("state")}>State</TabButton>
                    </>}
                >{tabContent}</Tabs>  {/* conditional rendering */}
            </Section>
        </>
    )
}