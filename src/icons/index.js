import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './icon.css';

const iconTypes = { 
    "check": (color) => 
    <CheckSVG  
    className="Icon-svg" 
    fill={color} />,


    "delete": (color) => 
    <DeleteSVG 
    className="Icon-svg" 
    fill={color} />
}


function Icons ({ type, color, onClick }) {
    return (
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
};

export { Icons };