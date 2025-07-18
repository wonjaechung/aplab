import { econQuestions } from './econQuestions';
import { statsQuestions } from './statsQuestions';

export const questionsBySubject = {
    econ: econQuestions,
    stats: statsQuestions,
};

const generateFilterOptions = (questions) => {
    if (!questions || questions.length === 0) {
        return { years: [], tags: {}, difficulties: [] };
    }
    const tags = questions.reduce((acc, q) => {
        if (q.tags) {
            const { family, type } = q.tags;
            if (!acc[family]) {
                acc[family] = new Set();
            }
            acc[family].add(type);
        }
        return acc;
    }, {});

    Object.keys(tags).forEach(family => {
        tags[family] = Array.from(tags[family]).sort();
    });

    return {
        years: [...new Set(questions.map(q => q.year))].sort((a, b) => b - a),
        tags: tags,
        difficulties: ['쉬움', '중간', '어려움'],
    };
};

export const filterOptionsBySubject = {
    econ: generateFilterOptions(econQuestions),
    stats: generateFilterOptions(statsQuestions),
};