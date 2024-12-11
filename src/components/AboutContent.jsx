import React from 'react'
import '../styles/about.css'
import { Location, Mail, Phone } from 'grommet-icons'

export function AboutContent() {
    return (
      <>
        <div className='aboutContent'>
          <div className='imgPlaceholder'></div>
          <div className='textContentContainer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa accusantium minima ipsam? <br /><br />Molestias facilis ratione excepturi quisquam, quasi nesciunt qui voluptatibus, quod aliquam architecto in. Similique odio a possimus.<br />
            <br />Temporibus at asperiores eligendi quo id, sapiente odio iure consequuntur necessitatibus consectetur corporis, nesciunt omnis eius corrupti. <br />Impedit, doloribus repudiandae cum veniam exercitationem!</p>
            <div className='iconsAndContactDetails'>
              <div className='iconsContainer'>
                <Location color='#005aebc0' size='medium'/>
                <Mail color='#005aebc0' size='medium'/>
                <Phone color='#005aebc0' size='medium'/>
              </div>
              <div className='contactInfoContainer'>
                <p>Gothenburg</p>
                <p>kastanjekofta@gmail.com</p>
                <p>073-378 74 08</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }