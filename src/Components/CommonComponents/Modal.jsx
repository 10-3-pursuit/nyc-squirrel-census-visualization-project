const Modal = ({ isOpen, onCancel }) => {

  const message = `Click to close Map of Squirrels in Central Park, NYC`;

  // maybe get different map to match palette better
  const centralParkMap = "https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714944061/centralParkMap_myimem.jpg"

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <header className="modal-header">
                        <span className="close" onClick={onCancel}>&times; {message}</span>
                    </header>
                    <img className="h-auto w-auto max-w-[50vw] max-h-[50vh]
                    rounded-3xl duration-300 ease-in-out transform hover:scale-105 rotate-90" src={centralParkMap} alt="SquirrelMap"/>
                    <p>{message}</p>
                    <button onClick={onCancel}>Back to Squirrels</button>
                </div>
            </div>
        )
    );
}

export default Modal;