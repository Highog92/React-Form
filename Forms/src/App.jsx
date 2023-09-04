import './App.css'

function App() {

  function saveFormData(event) {
    
    event.preventDefault()
    console.log(event.target.Name.value);
    console.log(event.target.LastName.value);
    console.log(event.target.Phone.value);
    console.log(event.target.Email.value);
    console.log(event.target.Comment.value);

  }


  return (
    <>
      <form onSubmit={(event) => saveFormData(event)}>
        <label htmlFor="Name">Name</label>
        <input name="Name" />

        <label htmlFor="Lastname">Lastname</label>
        <input name="LastName" />

        <label htmlFor="Name">Phone</label>
        <input name="Phone" />

        <label htmlFor="Name">Email</label>
        <input name="Email" />

        <label htmlFor="Comment">Commentary</label>
        <textarea name="Comment" id="" cols="30" rows="10"></textarea>

        <input type="Radio" />
        <input type="Radio" />
        <input type="Radio" />

        <button type='submit'>Send</button>
        <button>Reset</button>
      </form>

      <div>
        Input værdier  {saveFormData}
      </div>



    </>
  )
}

export default App
