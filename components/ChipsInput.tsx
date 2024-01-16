

import React, { useState, useCallback } from 'react';
import { debounce } from "@/utils/debounce";
import { Chip, ListItem } from '@/utils/types';
import { Items } from '@/utils';
import FilteredItemsList from './FilteredItemsList';

interface ChipsInputProps { }

const ChipsInput: React.FC<ChipsInputProps> = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [chips, setChips] = useState<Chip[]>([]);
    const [availableItems, setAvailableItems] = useState<ListItem[]>(Items);
    const [showItems, setShowItems] = useState<boolean>(false);
    const [highlightedChip, setHighlightedChip] = useState<number | null>(null);


    const handleInputChangeDebounced = useCallback(
        debounce((value: string) => {
            setInputValue(value);
            setShowItems(true);
        }, 100),
        []
    );


    const handleInputFocus = () => {
        if (chips.length > 0) {
            setHighlightedChip(chips[chips.length - 1].id);
        }
    };

    const handleInputBlur = () => {
        setHighlightedChip(null);
    };


    const filteredItems = availableItems.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleChipClick = (item: ListItem) => {
        const newChips = [...chips, { id: chips.length + 1, label: item.title, email: item.email, color: item.color }];
        const newAvailableItems = availableItems.filter((i) => i.id !== item.id);

        setChips(newChips);
        setAvailableItems(newAvailableItems);
        setInputValue('');
        setShowItems(false);
    };

    const handleChipRemove = (id: number, label: string, email: string, color: string) => {
        const newChips = chips.filter((chip) => chip.id !== id);
        const newAvailableItems = [...availableItems, { id, title: label, email, color }];

        setChips(newChips);
        setAvailableItems(newAvailableItems);
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && inputValue === '' && chips.length > 0) {
            e.preventDefault();
            const lastChip = chips[chips.length - 1];
            handleChipRemove(lastChip.id, lastChip.label, lastChip.email, lastChip.color);
        }
    };

    return (
        <>
            {chips.map((chip) => (
                <div
                    key={chip.id}
                    className={`bg-gray-200 text-black rounded-full px-3 py-1 ml-2 mb-2 flex items-center ${highlightedChip === chip.id ? 'bg-orange-50 text-white' : ''
                        }`}
                >
                    <div className={`bg-blue-70 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold`}>
                        {chip.label[0].toUpperCase()}
                    </div>
                    {chip.label}
                    <button onClick={() => handleChipRemove(chip.id, chip.label, chip.email, chip.color)} className="ml-2">
                        &times;
                    </button>
                </div>
            ))}


            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChangeDebounced(e.target.value)}
                onKeyDown={handleBackspace}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="outline-none focus:outline-none flex-1"
                onClick={() => setShowItems(true)}
            />

            {showItems && (
                <FilteredItemsList items={filteredItems} onChipClick={handleChipClick} />
            )}


        </>
    );
};

export default ChipsInput;
