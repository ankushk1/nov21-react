import React from 'react'
import { useLocation } from 'react-router-dom';

const ContactInfo = () => {

  const location = useLocation()
  console.log(location);

  return (
    <div>ContactInfo</div>
  )
}

export default ContactInfo