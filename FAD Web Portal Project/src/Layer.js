import React from 'react'
import Headi from './Headi';
import Foot from './Foot';
export default function Layer({children}) {
  return (
    <div>
      <Headi/>
      {children}
      <Foot/>
    </div>
  )
}
