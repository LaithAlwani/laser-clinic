import React from 'react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <>
    <h2>Let's Get in Touch</h2>
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text"  placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
      <button>Submit</button>
    </form>
    </>
  )
}
