import '../style/Note.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    // Trigger delete callback passed from parent with this note's ID
    function onDelete() {
        props.delNote(props.id);
    }
    
    return (
        <div className="note">
            {/* Display note title */}
            <h1>{props.title}</h1>
            
            {/* Display note content */}
            <p>{props.content}</p>

            {/* Delete button triggers onDelete handler */}
            <div className="delete-container">
                <button onClick={onDelete}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
}

export default Note;
