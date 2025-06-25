import { useState } from 'react';
import data from './data'
import './style.css'
export default function AccordianSup() {
    const [selected, setSelected] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isMultiEnabled, setIsMultiEnabled] = useState(false);
    const handleSelected = (itemId) => {
        console.log(itemId)
        console.log(isMultiEnabled)
        // console.log(selectedItems)
        if (isMultiEnabled) {
            // Multi selection
            if (selectedItems.includes(itemId)) {
                setSelectedItems(selectedItems.filter(id => id !== itemId));
            } else {
                setSelectedItems([...selectedItems, itemId]);
            }
        } else {
            // Single selection
            setSelectedItems(
                selectedItems[0] === itemId ? [] : [itemId]
            );
        }
    }
    console.log(selectedItems)
    return (
        <div className="acc-wrapper">
            <button onClick={() => setIsMultiEnabled(!isMultiEnabled)}>
                {isMultiEnabled ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((dataItem, index) => {
                            const isOpen = isMultiEnabled
                                ? selectedItems.includes(dataItem.id)
                                : selectedItems[0] === dataItem.id;
                            return (
                                <div key={index} className="item">
                                    <div onClick={() => handleSelected(dataItem.id)} className="title">
                                        <h3>{dataItem.question}</h3>
                                        <span>{isOpen ? "-" : "+"}</span>
                                    </div>
                                    {
                                        isOpen && <div className='acc-content'>{dataItem.answer}</div>
                                    }
                                </div>
                            );
                        })
                        : <div>No data found!</div>
                }
            </div>

        </div>
    );
}