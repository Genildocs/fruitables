'use client'
import React from 'react'
import { Dropdown } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Flowbite } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-transparent  ',
    },
    size: {
      sm: 'text-[1rem] ',
    },
  },
}

export default function ListDropdown() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Dropdown
        label="pages"
        dismissOnClick={false}
        color="primary "
        size={'sm'}
      >
        <Dropdown.Item>Cart</Dropdown.Item>
        <Dropdown.Item>Checkout</Dropdown.Item>
        <Dropdown.Item>Testimonial</Dropdown.Item>
        <Dropdown.Item>404 page</Dropdown.Item>
      </Dropdown>
    </Flowbite>
  )
}
