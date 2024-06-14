import React, { useState } from 'react'
const AnotherForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    EnterComment: ""
  })

  function handleInputSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form)
    let formobj = Object.fromEntries(formData.entries())
    console.log(formobj)
    setFormData({
      name: "",
      username: "",
      password: "",
      EnterComment: ""
    })
  }
  
  function handleInputChange(e) {
    let { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <input
          placeholder='name'
          name="name"
          onChange={handleInputChange}
          value={formData.name} />
        <br /><br />
        <input
          placeholder='username'
          name="username"
          onChange={handleInputChange}
          value={formData.username} />
        <br /><br />
        <input
          type='password'
          placeholder='password'
          name="password"
          onChange={handleInputChange}
          value={formData.password} />
        <br /><br />
        <textarea
          type='text'
          placeholder='Enter Comment'
          name='EnterComment'
          onChange={handleInputChange}
          value={formData.EnterComment}>
        </textarea>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AnotherForm
