import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PracticeSession from './PracticeSession';

export default function DrillSessionPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // DrillPage에서 navigate로 전달한 state를 받습니다.
    const questions = location.state?.questions;
    const subject = location.state?.subject || 'econ';

    const handleEndDrill = () => {
        navigate(`/drill?subject=${subject}`);
    };

    if (!questions || questions.length === 0) {
        return (
            <div className="text-white text-center p-8">
                <p>풀 문제가 없습니다. 드릴 설정으로 돌아가세요.</p>
                <button 
                    onClick={handleEndDrill} 
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    돌아가기
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            <PracticeSession questions={questions} onBack={handleEndDrill} />
        </div>
    );
}