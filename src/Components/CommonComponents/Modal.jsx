
import { useEffect, useState } from 'react'; // Import useEffect and useState

const Modal = ({ isOpen, onCancel }) => {

  const message = "Map of Squirrels in Central Park, NYC";

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <header className="modal-header"> {/* corrected class attribute */}
                        <span className="close" onClick={onCancel}>&times;</span> {/* corrected class attribute */}
                    </header>
                    <img src="https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714944061/centralParkMap_myimem.jpg" alt="SquirrelMap" className='SquirrelMap'/>
                    <p>{message}</p>
                    {/* <button onClick={onConfirm} className="delete-button">Confirm</button> */}
                    <button onClick={onCancel}>Back to Squirrels</button>
                </div>
            </div>
        )
    );
}

export default Modal;