import { useState } from 'react';
import '../style/InputArea.css';

function InputArea(props) {
    // Local state to store the current note input
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

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
                    type="text" 
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
                    rows={3} 
                />
                
                {/* Button to trigger note creation */}
                <div className="button">
                    <button type="submit" onClick={onCreate}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InputArea;
