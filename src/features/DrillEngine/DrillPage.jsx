import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DrillSetup from './DrillSetup'; // DrillSetup 컴포넌트를 불러옵니다.
import { questionsBySubject, filterOptionsBySubject } from '@/data/index.js'; // 절대 경로 사용
import { SUBJECTS } from '@/data/subjects.js'; // 절대 경로 사용

export default function DrillPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    // URL에 subject가 없으면 기본값으로 'econ'을 사용합니다.
    const initialSubject = queryParams.get('subject') || 'econ';

    const [currentSubject, setCurrentSubject] = useState(initialSubject);

    // URL이 변경될 때마다 currentSubject 상태를 업데이트합니다.
    useEffect(() => {
        const subjectFromURL = queryParams.get('subject') || 'econ';
        if (subjectFromURL !== currentSubject) {
            setCurrentSubject(subjectFromURL);
        }
    }, [location.search, currentSubject]);

    const handleStartDrill = (filteredQuestions) => {
        const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
        // 드릴 세션 페이지로 이동할 때 현재 과목 정보를 함께 전달합니다.
        navigate('/drill/session', { state: { questions: shuffled, subject: currentSubject } });
    };
    
    // 현재 과목에 대한 정보를 가져옵니다.
    const subjectInfo = SUBJECTS[currentSubject] || SUBJECTS['econ'];

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg text-white border border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                 <h1 className="text-3xl font-bold flex items-center gap-3 mb-4 sm:mb-0">
                    <subjectInfo.logo className={`w-8 h-8 ${subjectInfo.theme.primary}`} />
                    <span>{subjectInfo.name} Drill</span>
                 </h1>
                 {/* --- 다른 과목으로 전환하는 버튼 부분을 삭제했습니다 --- */}
            </div>
            
            {/* DrillSetup에 현재 과목에 맞는 props를 전달합니다. */}
            <DrillSetup
                key={currentSubject} 
                onStartDrill={handleStartDrill}
                questions={questionsBySubject[currentSubject]}
                filterOptions={filterOptionsBySubject[currentSubject]}
            />
        </div>
    );
}