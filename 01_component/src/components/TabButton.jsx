export default function TabButton({children,onSelect}) {
    console.log('TabButton component executing')
    return (
        // click event apply
        <li>
            <button onClick={onSelect}>{children}</button>  
        </li>
    );
}