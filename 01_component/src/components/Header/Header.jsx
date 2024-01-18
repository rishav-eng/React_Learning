import reactImg from '../../assets/react-core-concepts.png'; // image import statement
import '../Header/Header.css';

const reactDescription = ["fundamental", "crucial", "core"];
function genRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
custom component - Component should be uppercase and to make the difference b/w built in html tags
 and custom component, react uses uppercase naming convention for custom component
*/
export default function Header() {
    /* Good practice to keep all the calculation logic outside of JSX and store in variable.
     after that use the same variable below JSX. 
    */
    const description = reactDescription[genRandomInt(3)];
    return (
        <header>
            {/* setting html attributes dynamically and loading image files by import */}
            <img src={reactImg} alt="Stylized atom" />
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
