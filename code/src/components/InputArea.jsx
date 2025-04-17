import { useState } from 'react';
import '../style/InputArea.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
    // Local state to store the current note input
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [isExpanded, setIsExpanded] = useState(false)

    function expandInput() {
        setIsExpanded(true);
    }

    // Handle changes in input fields and update corresponding state
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value // Dynamically update either title or content
            };
        });
    }

    // Trigger the addNote function and reset input fields
    function onCreate(event) {
        event.preventDefault(); // Prevent form from submitting/reloading the page

        props.addNote(note); // Call parent function to add new note
        setNote({ title: "", content: "" }); // Clear input fields after adding
    }

    return (
        <div className="input-container">
            <form className="input-area">
                {/* Input for the note's title */}
                <input 
                    type={isExpanded ? "text" : "hidden"} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={handleChange} 
                    maxLength={20} 
                />

                {/* Textarea for the note's content */}
                <textarea 
                    type="text" 
                    name="content" 
                    placeholder="Take a note..." 
                    value={note.content} 
                    onChange={handleChange}
                    onClick={expandInput}
                    rows={isExpanded ? 3 : 1} 
                />
                
                {/* Button to trigger note creation */}
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
