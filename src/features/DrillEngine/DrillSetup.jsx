import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const AccordionSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 hover:bg-gray-700/50 transition-colors"
            >
                <span className="font-semibold text-gray-200">{title}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 border-t border-gray-700">{children}</div>}
        </div>
    );
};

export default function DrillSetup({ onStartDrill, questions, filterOptions }) {
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);

    const handleToggle = (setter, value) => {
        setter(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]));
    };

    const countFiltered = () => {
        if (!questions) return 0;
        return questions.filter(q =>
            (selectedYears.length === 0 || selectedYears.includes(q.year)) &&
            (selectedTypes.length === 0 || (q.tags && selectedTypes.includes(q.tags.type))) &&
            (selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty))
        ).length;
    };

    const handleStart = () => {
        const filtered = questions.filter(q =>
            (selectedYears.length === 0 || selectedYears.includes(q.year)) &&
            (selectedTypes.length === 0 || (q.tags && selectedTypes.includes(q.tags.type))) &&
            (selectedDifficulties.length === 0 || selectedDifficulties.includes(q.difficulty))
        );
        onStartDrill(filtered);
    };

    return (
        <div className="space-y-4">
            <AccordionSection title={`TESTS (${filterOptions.years.length})`}>
                <div className="flex flex-wrap gap-2">
                    {filterOptions.years.map(year => (
                        <button key={year} onClick={() => handleToggle(setSelectedYears, year)} className={`px-3 py-1 border rounded-md transition-colors ${selectedYears.includes(year) ? 'bg-blue-600 border-blue-500 text-white' : 'border-gray-600 hover:bg-gray-700'}`}>
                            {year}
                        </button>
                    ))}
                </div>
            </AccordionSection>

            <AccordionSection title="QUESTION TYPES">
                {Object.entries(filterOptions.tags).map(([family, types]) => (
                    <div key={family} className="mb-4 last:mb-0">
                        <h4 className="font-semibold text-gray-400 mb-3">{family}</h4>
                        <div className="flex flex-wrap gap-2">
                            {types.map(type => (
                                <button key={type} onClick={() => handleToggle(setSelectedTypes, type)} className={`px-3 py-1 border rounded-md transition-colors ${selectedTypes.includes(type) ? 'bg-blue-600 border-blue-500 text-white' : 'border-gray-600 hover:bg-gray-700'}`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </AccordionSection>
            
            <AccordionSection title="DIFFICULTY">
                <div className="flex flex-wrap gap-2">
                    {filterOptions.difficulties.map(diff => (
                         <button key={diff} onClick={() => handleToggle(setSelectedDifficulties, diff)} className={`px-3 py-1 border rounded-md transition-colors ${selectedDifficulties.includes(diff) ? 'bg-blue-600 border-blue-500 text-white' : 'border-gray-600 hover:bg-gray-700'}`}>
                            {diff}
                         </button>
                    ))}
                </div>
            </AccordionSection>
            
            <div className="pt-4">
                <button onClick={handleStart} disabled={countFiltered() === 0} className="w-full text-lg font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed p-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
                    <Search />
                    <span>Drill {countFiltered()} Questions</span>
                </button>
            </div>
        </div>
    );
}