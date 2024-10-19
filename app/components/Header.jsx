import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <header>
        <nav className='space-x-4'>
            <Link href="/">Home</Link>
            <Link href="/login">login</Link>
            <Link href="/register">register</Link>
            <Link href="/admin/vieworders">View Orders</Link>
            <Link href="/admin/viewuser">View User</Link>
            <Link href="/user/order">order</Link>
            <Link href="/about">about</Link>
            <Link href="/user/profile">profile</Link>
        </nav>
    </header>
  )
}

export default Header