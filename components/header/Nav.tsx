'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MenuToggle from './MenuToggle'
import ListDropdown from './ListDropdown'
export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav initial={false} animate={open ? 'open' : 'closed'}>
      <MenuToggle toggle={() => setOpen(!open)} />
      <ul className={` d-flex gap-5  `}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/shop-detail">Shop Detail</Link>
        </li>
        <li>
          <ListDropdown />
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  )
}
