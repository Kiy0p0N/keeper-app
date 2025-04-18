import { useState } from 'react';
import '../style/InputArea.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
    // State to store current note input
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    // State to control input expansion
    const [isExpanded, setIsExpanded] = useState(false);

    // Expands input area when user clicks on textarea
    function expandInput() {
        setIsExpanded(true);
    }

    // Updates note state when user types
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value // Update title or content dynamically
            };
        });
    }

    // Adds note and clears the form
    function onCreate(event) {
        event.preventDefault(); // Prevent default form submission

        props.addNote(note); // Send note to parent
        setNote({ title: "", content: "" }); // Clear inputs
    }

    return (
        <div className="input-container">
            <form className="input-area">
                {/* Title input - visible only when expanded */}
                <input 
                    type={isExpanded ? "text" : "hidden"} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={handleChange} 
                    maxLength={20} 
                />

                {/* Content input - triggers expansion on click */}
                <textarea 
                    type="text" 
                    name="content" 
                    placeholder="Take a note..." 
                    value={note.content} 
                    onChange={handleChange}
                    onClick={expandInput}
                    rows={isExpanded ? 3 : 1} 
                />
                
                {/* Submit button with animation and Material icon */}
                <Zoom in={isExpanded}>
                    <Fab type="submit" onClick={onCreate}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;
