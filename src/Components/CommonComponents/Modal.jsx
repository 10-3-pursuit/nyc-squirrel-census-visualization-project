const Modal = ({ isOpen, onCancel }) => {

  const message = `Click to close Map of Squirrels in Central Park, NYC`;

  // maybe get different map to match palette better
  const centralParkMap = "https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714944061/centralParkMap_myimem.jpg"

    return (
        isOpen && (
        <div className="flex justify-center items-center modal">
            <div className="flex justify-center items-center bg-mint/50 rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-lg bg-opacity-70 p-5 h-auto w-auto">
              <div className="grid grid-cols-3 h-full w-full">
                {/* <div className="modal-content"> */}
                    <header className="modal-header">
                        <button className="bg-black/80 hover:text-red text-white font-bold py-2 px-4 rounded-xl inline-block text-3xl" style={{ fontFamily: 'Poetsen One, sans-serif', fontStyle: 'normal' }} onClick={onCancel}>&times;</button>
                    </header>
                    <img className="h-auto w-auto max-w-[80vw] max-h-[80vh] duration-300 ease-in-out transform hover:rotate-90 py-10" src={centralParkMap} alt="SquirrelMap"/>
                    {/* <p>{message}</p> */}
                    <br/>
                    <button className="bg-black/80 hover:bg-dark-teal hover:text-mint text-white font-bold py-4 px-4 rounded-xl inline-block text-2xl"
                    style={{ fontFamily: 'Silkscreen, sans-serif', fontStyle: 'normal' }} onClick={onCancel}>Back to Squirrels</button>
                </div>
            </div>
        </div>
        )
    );
}

export default Modal;