import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>
            Page not found
        </h1>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound