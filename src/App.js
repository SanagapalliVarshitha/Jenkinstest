import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])

  const addNote = async () => {
    await axios.post("http://localhost:5000/add-note", { text })
    fetchNotes()
    setText("")
  }

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes")
    setNotes(res.data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div style={{padding:"20px"}}>
      <h2>Notes App</h2>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Write note"
      />

      <button onClick={addNote}>Add</button>

      <h3>All Notes</h3>

      {notes.map((n)=>(
        <p key={n._id}>{n.text}</p>
      ))}

    </div>
  )
}

export default App