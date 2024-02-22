import React from 'react'
import '../assets/styles/globals.css'

export const metadata={
  title: 'Niperty | Find the perfect Rental',
  description :'Find your dream rental property',
  keyword:'rentals,find rentals,find properties',
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
<body>
    
        <div>{children}</div>
</body>
    </html>
  )
}

export default MainLayout