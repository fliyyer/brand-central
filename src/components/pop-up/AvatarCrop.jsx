import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar-edit'

const AvatarCrop = () => {
    const [src, setSrc] = useState(null)
    const [preview, setPreview] = useState(null)

    const onClose = () => {
        setPreview(null)
    }

    const onCrop = view => {
        setPreview(view)
    }
    return (
        <div>
            <Avatar
                width={400}
                height={300}
                onClose={onClose}
                onCrop={onCrop}
                src={src}
            />
            {preview && <img src={preview} />}
        </div>
    )
}

export default AvatarCrop
