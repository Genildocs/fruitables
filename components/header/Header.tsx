'use client'
import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { IoPeopleSharp } from '@react-icons/all-files/io5/IoPeopleSharp'
import { ImCart } from '@react-icons/all-files/im/ImCart'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'

export default function Header() {
  return (
    <header>
      <div className="d-flex">
        <div>
          <Link href={'/'}>
            {' '}
            <h1 className="heading font-extrabold text-2xl sm:text-5xl text-primary-color">
              Fruitables
            </h1>
          </Link>
        </div>
        <div>
          <Nav />
        </div>
        <div className="d-flex hidden sm:flex gap-5  ">
          <div>
            <FaSearch className="h-[16px] w-[16px] text-primary-color" />
          </div>
          <ImCart className="h-[28px] w-[32px] text-primary-color" />
          <IoPeopleSharp className="h-[28px] w-[32px] text-primary-color" />
        </div>
      </div>
    </header>
  )
}
