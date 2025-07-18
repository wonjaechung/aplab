import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Languages } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { saveDrillResult } from '@/api/drill';
import { RenderQuestionText, ExplanationRenderer } from '@/components/practice/Renderers';
import * as StatCharts from '@/components/charts/StatCharts';

export default function PracticeSession({ questions, onBack }) {
    const { currentUser } = useAuth();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionStatuses, setQuestionStatuses] = useState([]);
    const [lang, setLang] = useState('ko');

    useEffect(() => {
        setQuestionStatuses(questions.map(() => ({ status: 'unanswered', selected: null })));
    }, [questions]);

    const currentQuestion = questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestionIndex];

    if (!currentQuestion || !currentStatus) {
        return <div className="text-center text-white p-8">Loading...</div>;
    }

    const handleAnswerClick = (selectedIndex) => {
        if (currentStatus.status !== 'unanswered') return;
        const isCorrect = currentQuestion.answerOptions[selectedIndex].isCorrect;
        const newStatuses = [...questionStatuses];
        newStatuses[currentQuestionIndex] = {
            status: isCorrect ? 'correct' : 'incorrect',
            selected: selectedIndex
        };
        setQuestionStatuses(newStatuses);
        if (currentUser) {
            saveDrillResult(currentUser.uid, currentQuestion.id, isCorrect);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            alert("드릴 세션이 끝났습니다!");
            onBack();
        }
    };
    
    const showFeedback = currentStatus.status !== 'unanswered';

    const renderChart = (q) => {
        let ChartComponent;
        // 경제 문제의 LineChart를 GenericLineChart로 렌더링하도록 수정
        if (q.chartType === 'LineChart') {
            ChartComponent = StatCharts['GenericLineChart'];
        } else {
            ChartComponent = StatCharts[q.chartType];
        }
        
        return ChartComponent ? <div className="my-6 p-4 bg-gray-800 rounded-lg border border-gray-700">{<ChartComponent data={q.chartData} />}</div> : null;
    };

    const getButtonClass = (option, index) => {
        let base = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ease-in-out flex items-center text-gray-200";
        if (showFeedback) {
            if (option.isCorrect) return `${base} bg-green-900/50 border-green-500 font-bold`;
            if (currentStatus.selected === index) return `${base} bg-red-900/50 border-red-500`;
            return `${base} bg-gray-800/50 border-gray-700 cursor-not-allowed opacity-60`;
        }
        return `${base} bg-gray-800 border-gray-700 hover:bg-gray-700/80 hover:border-blue-500 cursor-pointer`;
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg text-white border border-gray-700/50">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-300 bg-blue-900/50">
                    {currentQuestion.year} / Q{currentQuestion.questionNumber} / {currentQuestion.difficulty}
                </span>
                <button onClick={onBack} className="text-sm text-gray-400 hover:text-white hover:underline">드릴 종료</button>
            </div>
            <div className="text-lg md:text-xl font-medium text-gray-200 mb-6 leading-relaxed">
                <RenderQuestionText text={currentQuestion.questionText} />
            </div>
            {renderChart(currentQuestion)}
            <div className="space-y-3">
                {currentQuestion.answerOptions.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={getButtonClass(option, index)}>
                        <span className="flex items-center justify-center w-6 h-6 mr-4 font-bold text-sm border-2 border-gray-500 rounded-full flex-shrink-0">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option.text}</span>
                    </button>
                ))}
            </div>
            {showFeedback && (
                <div className="mt-6">
                    <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                        <ExplanationRenderer explanation={currentQuestion.explanation} lang={lang} onLangToggle={() => setLang(l => l === 'ko' ? 'en' : 'ko')} />
                    </div>
                    <button onClick={handleNextQuestion} className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700">
                        {currentQuestionIndex === questions.length - 1 ? "결과 보기" : "다음 문제"}
                    </button>
                </div>
            )}
        </div>
    );
}