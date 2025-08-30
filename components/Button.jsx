import clsx from 'clsx'
import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button
      className={clsx(
        `rounded-xl bg-orange-600 px-5 py-4 text-center text-xl
           font-bold uppercase tracking-wide text-white transition-colors
           duration-150 hover-bg-orange-700 md:text-2xl`, className)}
    >
      {children}
    </button>
  )
}

export default Button