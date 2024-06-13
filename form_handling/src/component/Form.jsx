import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password:""
    })
    function handleInputChange(e) {  
        setFormData((currData)=>{
         return{ ...currData,[e.target.name]:e.target.value  }
        })
    }
    function handleSubmit (e){
         e.preventDefault();
         console.log(formData)
         setFormData({
             fullName: "",
             userName: "",
             password:""
         })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='enter your name'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    name='fullName'
                    id='fullName' />
                    <br/><br/>
                <input
                    placeholder='enter your userName'
                    value={formData.userName}
                    onChange={handleInputChange}
                    name='userName'
                    id='userName' />
                    <br/><br/>
                    <input
                    placeholder='enter your passwaord'
                    type='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    name='password'
                    id='password' />
                    <br/><br/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Form
