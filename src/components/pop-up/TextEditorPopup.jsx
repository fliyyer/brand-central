import React, { useState } from 'react';

const TextEditorPopup = ({ initialValue, onSave, onCancel }) => {
    const [text, setText] = useState(initialValue);

    const handleSave = () => {
        onSave(text);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-500">
            <div className="bg-white p-4 w-72 rounded-lg shadow-md">
                <textarea
                    className="w-full resize-none border rounded-md p-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="mt-4 flex justify-center">
                    <button
                        className="px-4 py-2 bg-primary-color text-text-board-color font-medium rounded-md hover:bg-blue-600 mr-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 font-medium text-gray-600 rounded-md hover:bg-gray-400"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextEditorPopup;
