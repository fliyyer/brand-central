import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TitleOptionsPopup = ({ isOpen, onSelect, onClose }) => {
    const [mapTypes, setMapTypes] = useState({});

    useEffect(() => {
        if (isOpen) {
            axios.get('https://brandcentralapi.raywhite.co.id/banner3/create', {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            }).then((response) => {
                setMapTypes(response.data.map_types);
            });
        }
    }, [isOpen]);

    const mapTypeOptions = Object.keys(mapTypes);

    return isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-4 text-center w-60 rounded-lg border-t border-[#3a3a3a] shadow-lg">
                <p className="text-lg font-semibold mb-4">Title</p>
                <ul>
                    {mapTypeOptions.map((option) => (
                        <li key={option} className="mb-2 text-left">
                            <button
                                className="text-gray-700 font-medium hover:text-[#3a3a3a] transition duration-300"
                                onClick={() => {
                                    onSelect(mapTypes[option]);
                                    onClose();
                                }}
                            >
                                {mapTypes[option]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) : null;
};

export default TitleOptionsPopup;
