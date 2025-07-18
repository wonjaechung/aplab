import React, { useState } from 'react';
import DrillSetup from './DrillSetup';
import PracticeSession from './PracticeSession';

export default function DrillEngine({ questions, filterOptions }) {
  const [drillQuestions, setDrillQuestions] = useState(null);

  const startDrill = (filteredQuestions) => {
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    setDrillQuestions(shuffled);
  };

  if (drillQuestions) {
    return <PracticeSession questions={drillQuestions} onBack={() => setDrillQuestions(null)} />;
  }

  return <DrillSetup onStartDrill={startDrill} questions={questions} filterOptions={filterOptions} />;
}