import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const ImageCropPopup = ({ image, onSave, onCancel }) => {
    const [editor, setEditor] = useState(null);
    const [zoom, setZoom] = useState(1);

    const handleSave = () => {
        if (editor) {
            const croppedImage = editor.getImageScaledToCanvas().toDataURL();
            onSave(croppedImage);
        }
    };

    const handleZoomChange = (e) => {
        const newZoom = parseFloat(e.target.value);
        setZoom(newZoom);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-50 z-50">
            <div className="bg-[#f4f4f4] p-4 w-96 rounded-lg shadow-lg">
                {image && (
                    <>
                        <div className="mb-4">
                            <AvatarEditor
                                ref={(ref) => setEditor(ref)}
                                image={image}
                                width={330}
                                height={300}
                                border={10}
                                color={[255, 255, 255, 0.6]}
                                scale={zoom}
                            />
                        </div>
                        <div className="mb-4 flex space-x-3 items-center justify-center">
                            <label className="block text-sm font-medium text-text-board-color">
                                Zoom:
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="3"
                                step="0.01"
                                value={zoom}
                                onChange={handleZoomChange}
                            />
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                className="bg-primary-color w-[90px] text-text-board-color px-5 py-2 rounded"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-300 text-text-board-color w-[90px] px-5 py-2 rounded"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageCropPopup;
