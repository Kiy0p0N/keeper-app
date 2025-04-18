import '../style/Note.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    // Call parent delete function with this note's ID
    function onDelete() {
        props.delNote(props.id);
    }
    
    return (
        <div className="note">
            {/* Note title */}
            <h1>{props.title}</h1>
            
            {/* Note content */}
            <p>{props.content}</p>

            {/* Delete button with Material icon */}
            <div className="delete-container">
                <button onClick={onDelete}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
}

export default Note;
