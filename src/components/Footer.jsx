import React from 'react'

function Footer(props) {
    const { position } = props

    return (
        <footer className={`text-center text-sm py-9 font-inter text-white ${position}`}>
            <h1>© 2023 Brandcentral | Developed by Ray White Indonesia</h1>
        </footer>
    )
}

export default Footer
