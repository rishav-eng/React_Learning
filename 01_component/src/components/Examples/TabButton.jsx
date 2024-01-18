export default function TabButton({children,onSelect,isSelected}) {
    console.log('TabButton component executing')
    return (
        // click event apply
        //applying dynamic styling on button
        <li>
            <button className={isSelected?'active':undefined} onClick={onSelect}>{children}</button>  
        </li>
    );
}