import React from 'react'
import propTypes from 'prop-types'

const Button = ({ props, children }) => {
    const { variants, onClick } = props
    return (
        <button onClick={onClick} className={`px-2 ${variants}`}>{children}</button>
    )
}

Button.propTypes = {
    children: propTypes.string,
    onClick: propTypes.func
}
export default Button
