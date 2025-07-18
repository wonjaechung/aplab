import React from 'react';
import { Languages, Check, AlertCircle } from 'lucide-react';

export const RenderQuestionText = ({ text }) => {
    const parts = text.split('\n\n');
    return (
        <div>
            {parts.map((part, index) => {
                if (part.startsWith('|') && part.endsWith('|')) {
                    const rows = part.split('\n').filter(row => row.trim() !== '' && !row.startsWith('|---'));
                    const header = rows[0].split('|').slice(1, -1).map(h => h.trim());
                    const body = rows.slice(1).map(r => r.split('|').slice(1, -1).map(c => c.trim()));
                    return (
                        <div key={index} style={{margin: '1rem 0', overflowX: 'auto'}}>
                            <table style={{minWidth: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0'}}>
                                <thead style={{backgroundColor: '#f8fafc'}}>
                                    <tr>{header.map((h, i) => <th key={i} style={{padding: '0.5rem 1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a'}}>{h}</th>)}</tr>
                                </thead>
                                <tbody style={{backgroundColor: 'white'}}>
                                  {body.map((row, i) => <tr key={i} style={{borderTop: '1px solid #e2e8f0'}}>{row.map((cell, j) => <td key={j} style={{padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#475569'}}>{cell}</td>)}</tr>)}
                                </tbody>
                            </table>
                        </div>
                    );
                }
                const specialChars = /(x̄|μ|σ|p̂|H₀|Hₐ|≠|<|>|≤|≥|√)/g;
                const textParts = part.split(specialChars);
                return (
                    <p key={index} style={{marginBottom: '0.5rem'}}>
                        {textParts.map((subPart, subIndex) => {
                            if (subPart.match(specialChars)) return <span key={subIndex} style={{fontFamily: 'monospace'}}>{subPart}</span>;
                            return <span key={subIndex}>{subPart}</span>;
                        })}
                    </p>
                );
            })}
        </div>
    );
};

export const ExplanationRenderer = ({ explanation, lang, onLangToggle }) => {
    const langData = explanation[lang];
    if (!langData) return <p>{explanation}</p>;
    return (
        <div style={{fontSize: '0.875rem', lineHeight: 1.6}}>
             <button onClick={onLangToggle} style={{float: 'right', fontSize: '0.75rem', padding: '2px 6px', border: '1px solid #ccc', borderRadius: '99px'}}>
                <Languages size={14} style={{display: 'inline-block', marginRight: '4px'}}/> {lang === 'ko' ? 'EN' : '한'}
            </button>
            <h4 style={{fontWeight: 'bold', color: '#1e293b'}}>{langData.concept}</h4>
            <div style={{paddingLeft: '1rem', borderLeft: '2px solid #a5b4fc', marginTop: '0.75rem'}}>
                <h5 style={{fontWeight: '600', color: '#334155', marginBottom: '0.25rem'}}>단계별 풀이</h5>
                <ul style={{paddingLeft: '1.25rem', listStyleType: 'decimal', margin: 0}}>
                    {langData.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
            </div>
            {langData.distractors && langData.distractors.length > 0 && (
                 <div style={{paddingLeft: '1rem', borderLeft: '2px solid #fca5a5', marginTop: '0.75rem'}}>
                    <h5 style={{fontWeight: '600', color: '#334155', marginBottom: '0.25rem'}}>오답 분석</h5>
                    {langData.distractors.map((d, i) => <p key={i} style={{margin: '0.25rem 0'}}>{d}</p>)}
                </div>
            )}
             <div style={{paddingLeft: '1rem', borderLeft: '2px solid #d1d5db', marginTop: '0.75rem'}}>
                <h5 style={{fontWeight: '600', color: '#334155', marginBottom: '0.25rem'}}>핵심 개념</h5>
                <p style={{margin: 0}}>{langData.summary}</p>
            </div>
        </div>
    );
};