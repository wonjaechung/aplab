import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getStudyPlan, saveStudyPlan } from '../../api/studyPlan';

export default function StudyPlanWidget({ className = '', style = {} }) {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (currentUser) {
      setStatus('Loading...');
      getStudyPlan(currentUser.uid).then(savedNotes => {
        setNotes(savedNotes || '');
        setStatus('');
      }).catch(() => setStatus(''));
    }
  }, [currentUser]);

  const handleSave = () => {
    if (!currentUser) return;
    setStatus('Saving...');
    saveStudyPlan(currentUser.uid, notes)
      .then(() => setStatus('Saved!'))
      .catch(() => setStatus('Save failed.'))
      .finally(() => setTimeout(() => setStatus(''), 2000));
  };

  return (
    <div className={`bg-card border border-border-color rounded-xl p-6 h-full flex flex-col ${className}`} style={style}>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-text-primary">Study Notes</h2>
            <span className="text-xs text-text-tertiary h-4">{status}</span>
        </div>
        <textarea 
            className="flex-grow w-full bg-secondary border border-border-color text-text-primary rounded-md p-3 resize-none focus:ring-2 focus:ring-accent-primary outline-none transition" 
            value={notes} 
            onChange={e => setNotes(e.target.value)} 
            placeholder="Write your study plans and notes here..." 
        />
        <button onClick={handleSave} className="w-full mt-4 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors py-2">
            Save Notes
        </button>
    </div>
  );
}