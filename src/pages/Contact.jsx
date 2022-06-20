import React from 'react'

export default function Contact() {
  const handleSubmit = () => {
    console.log("submit")
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" />
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
  )
}
