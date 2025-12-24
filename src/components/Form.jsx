import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState("")

  // console.log("Name", name)
  // console.log("Email", email)
  // console.log("Message", message)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Form Submitted by ${name}`);
      setName("")
      setEmail("")
      setMessage("")
    }

  }

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim())newErrors.name = "Name is required!"
    if (!email.trim())newErrors.email = "Email is required!"
    if (!message.trim())newErrors.message = "Message is required!"
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    
  }
  return (
    <form action="" onSubmit={handleSubmit} className='max-w-md mx-auto space-y-3 bg-white text-black p-8 rounded'>
      {/* name */}
      <div>
        <label className='block mb-1 font-semibold'>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' placeholder='Input Your Name' className='border rounded p-2 mt-2' />
        {
          errors.name && <p className='text-red-500 text-sm italic'>{errors.name}</p>
        }
      </div>
      {/* email */}
      <div>
        <label className='block mb-1 font-semibold'>Email: </label>
        <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input Your Email' className='border rounded p-2' />
        {
          errors.email && <p className='text-red-500 text-sm italic'>{errors.email}</p>
        }
      </div>
      {/* message */}
      <div>
        <label className='block mb-1 font-semibold'>Message: </label>
        <textarea type="message" id='message' name='message' rows="4" cols="23" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Input Your Message' className='border rounded p-2' />
        {
          errors.message && <p className='text-red-500 text-sm italic'>{errors.message}</p>
        }
      </div>

      {/* button */}
      <button type='submit' className='p-2 bg-blue-600 rounded text-white'>Submit</button>
    </form>
  )
}

export default Form
