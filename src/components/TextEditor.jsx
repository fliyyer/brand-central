import React, { useState } from 'react';

function TextEditor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // Lakukan sesuatu dengan teks yang diedit
    console.log('Teks yang diedit:', text);
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buka Editor Teks
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h2 className="text-xl font-semibold mb-4">Editor Teks</h2>
              <textarea
                rows="4"
                value={text}
                onChange={handleTextChange}
                className="w-full border p-2 mb-4 rounded"
              ></textarea>
              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Simpan
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextEditor;
