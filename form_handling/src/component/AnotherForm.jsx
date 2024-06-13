import React from 'react'

const AnotherForm = () => {
function handleInputSubmit(e){
       e.preventDefault();
       let form = e.target;
       let formData = new FormData(form)
        let formobj = Object . fromEntries(formData.entries())
        console.log(formobj)
}
  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <input placeholder='name' name="name"/>
        <br/><br/> 
        <input placeholder='username' name="username"/>
        <br/><br/>
        <input type='password' placeholder='password' name="password"/>
        <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AnotherForm
