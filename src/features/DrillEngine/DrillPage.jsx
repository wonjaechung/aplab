import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DrillSetup from './DrillSetup'; // DrillSetup 컴포넌트를 불러옵니다.
import { questionsBySubject, filterOptionsBySubject } from '@/data/index.js'; // 절대 경로 사용
import { SUBJECTS } from '@/data/subjects.js'; // 절대 경로 사용

export default function DrillPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialSubject = queryParams.get('subject') || 'econ';

    const [currentSubject, setCurrentSubject] = useState(initialSubject);

    useEffect(() => {
        const subjectFromURL = queryParams.get('subject') || 'econ';
        if (subjectFromURL !== currentSubject) {
            setCurrentSubject(subjectFromURL);
        }
    }, [location.search]);

    const handleStartDrill = (filteredQuestions) => {
        const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
        navigate('/drill/session', { state: { questions: shuffled, subject: currentSubject } });
    };
    
    const subjectInfo = SUBJECTS[currentSubject] || SUBJECTS['econ'];

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg text-white border border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                 <h1 className="text-3xl font-bold flex items-center gap-3 mb-4 sm:mb-0">
                    <subjectInfo.logo className={`w-8 h-8 ${subjectInfo.theme.primary}`} />
                    <span>{subjectInfo.name} Drill</span>
                 </h1>
                 <div className="flex gap-1 bg-gray-900/50 p-1 rounded-lg border border-gray-700">
                    {Object.keys(SUBJECTS).map(key => (
                         <button 
                            key={key}
                            onClick={() => navigate(`/drill?subject=${key}`)} 
                            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors w-full sm:w-auto ${currentSubject === key ? `${SUBJECTS[key].theme.secondary} text-white` : 'text-gray-300 hover:bg-gray-700'}`}>
                            {SUBJECTS[key].name}
                        </button>
                    ))}
                 </div>
            </div>
            
            {/* DrillSetup에 올바른 props 전달 */}
            <DrillSetup
                key={currentSubject} 
                onStartDrill={handleStartDrill}
                questions={questionsBySubject[currentSubject]}
                filterOptions={filterOptionsBySubject[currentSubject]}
            />
        </div>
    );
}