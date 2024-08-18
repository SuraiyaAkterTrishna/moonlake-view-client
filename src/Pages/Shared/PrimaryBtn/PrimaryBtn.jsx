import './PrimaryBtn.css';
const PrimaryBtn = ({children}) => {
    return (
        <button className="primary-btn">{children}</button>
    );
};

export default PrimaryBtn;