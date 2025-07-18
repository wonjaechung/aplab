// src/data/index.js

import { econQuestions } from './econQuestions';
import { statsQuestions } from './statsQuestions';

// This is the only declaration of questionsBySubject
export const questionsBySubject = {
    econ: econQuestions,
    stats: statsQuestions,
};

const generateFilterOptions = (questions) => {
    if (!questions || questions.length === 0) {
        return { years: [], tags: [], difficulties: [] };
    }
    
    const allTags = new Set();
    questions.forEach(q => {
        if (q.tags && Array.isArray(q.tags)) {
            q.tags.forEach(tag => allTags.add(tag));
        }
    });

    return {
        years: [...new Set(questions.map(q => q.year))].sort((a, b) => b - a),
        tags: Array.from(allTags).sort(),
        difficulties: ['쉬움', '중간', '어려움'],
    };
};

export const filterOptionsBySubject = {
    econ: generateFilterOptions(econQuestions),
    stats: generateFilterOptions(statsQuestions),
};