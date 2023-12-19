import './Style/button.css';

function Button(props){
    return (
        <>
        <a href="#">
            <button className="btn">
                {props.btnName}
            </button>
        </a>
        </>
    );
}

export default Button;
