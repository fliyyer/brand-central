import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ variant, onClick, children }) => {
    return (
        <button onClick={onClick} className={`${variant}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string.isRequired // Pastikan variant sebagai properti yang diperlukan
}

export default Button
