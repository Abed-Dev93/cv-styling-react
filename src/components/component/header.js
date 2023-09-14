import React from 'react'
import Profile from "/home/oem/Desktop/cv-styling-react/src/assets/110x110.png"

const header = () => {
  return (
    <header class="identity">
        <h1 class="student-name">student name</h1>
        <h3 class="student-hobbies">codes and sleeps</h3>
        <img class="student-image" alt="profile" src={ Profile }/>
    </header>
  )
}

export default header