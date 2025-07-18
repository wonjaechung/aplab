import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ScatterChart, Scatter } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ padding: '8px', backgroundColor: 'rgba(50,50,50,0.8)', color: 'white', borderRadius: '4px', fontSize: '14px' }}>
                <p style={{ margin: 0 }}>{`${label}`}</p>
                <p style={{ margin: 0 }}>{`Value: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export const Histogram = ({ data }) => (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.values.map((v, i) => ({ name: data.labels[i], value: v }))} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }}><Label value={data.xAxisLabel} offset={-15} position="insideBottom" /></XAxis>
            <YAxis tick={{ fontSize: 12 }}><Label value={data.yAxisLabel} angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} /></YAxis>
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(79, 70, 229, 0.1)' }} />
            <Bar dataKey="value" fill="rgba(79, 70, 229, 0.8)" />
        </BarChart>
    </ResponsiveContainer>
);

export const CustomBoxPlot = ({ data }) => {
    const boxPlots = Object.entries(data).map(([key, value]) => ({...value, name: key}));
    const allValues = boxPlots.flatMap(d => [d.min, d.max]);
    const minVal = Math.min(...allValues);
    const maxVal = Math.max(...allValues);
    const range = maxVal - minVal;
    if (range === 0) return <div>Cannot create boxplot with zero range.</div>;
    const scale = (value) => ((value - minVal) / range) * 100;
    return (
        <div style={{width: '100%', padding: '1rem', boxSizing: 'border-box', userSelect: 'none'}}>
            {boxPlots.map((d) => (
                <div key={d.name} style={{marginBottom: '2rem'}}>
                    <p style={{fontSize: '0.875rem', fontWeight: '600', color: '#475569', marginBottom: '0.5rem'}}>{d.name}</p>
                    <div style={{position: 'relative', height: '3rem'}}>
                        <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '1px', backgroundColor: '#cbd5e1', left: `${scale(d.min)}%`, width: `${scale(d.max) - scale(d.min)}%`}}></div>
                        <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '1.5rem', width: '1px', backgroundColor: '#334155', left: `${scale(d.min)}%`}}></div>
                        <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '1.5rem', width: '1px', backgroundColor: '#334155', left: `${scale(d.max)}%`}}></div>
                        <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '2.5rem', backgroundColor: '#e0e7ff', border: '2px solid #818cf8', left: `${scale(d.q1)}%`, width: `${scale(d.q3) - scale(d.q1)}%`}}></div>
                        <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '2.5rem', width: '1px', backgroundColor: '#4f46e5', left: `${scale(d.median)}%`}}></div>
                    </div>
                </div>
            ))}
            <div style={{position: 'relative', height: '1px', backgroundColor: '#d1d5db', marginTop: '2.5rem'}}>
                {Array.from({length: Math.floor((maxVal - minVal) / 25) + 2}).map((_, i) => {
                    const val = Math.floor(minVal / 25) * 25 + i * 25;
                    if (val > maxVal + 25) return null;
                    return (
                        <div key={val} style={{position: 'absolute', bottom: '-1.25rem', left: `${scale(val)}%`, transform: 'translateX(-50%)'}}>
                            <div style={{height: '0.5rem', width: '1px', backgroundColor: '#9ca3af'}}></div>
                            <span style={{fontSize: '0.75rem', color: '#6b7280'}}>{val}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export const StemPlot = ({ data }) => {
    const allStems = [...Object.keys(data.female), ...Object.keys(data.male)].map(Number);
    const stems = Array.from(new Set(allStems)).sort((a, b) => a - b);
    return (
        <div style={{fontFamily: 'monospace', fontSize: '0.875rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', textAlign: 'center', gap: '1rem'}}>
                <div style={{fontWeight: 'bold', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem'}}>Female</div>
                <div></div>
                <div style={{fontWeight: 'bold', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem'}}>Male</div>
                {stems.map(stem => (
                    <React.Fragment key={stem}>
                        <div style={{textAlign: 'right', padding: '0.25rem 0'}}>{(data.female[stem] || '').split('').reverse().join(' ')}</div>
                        <div style={{textAlign: 'center', fontWeight: 'bold', color: '#64748b', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', padding: '0.25rem 0'}}>{stem}</div>
                        <div style={{textAlign: 'left', padding: '0.25rem 0'}}>{(data.male[stem] || '').split('').join(' ')}</div>
                    </React.Fragment>
                ))}
            </div>
            <div style={{textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: '#64748b', fontWeight: '600'}}>{data.key}</div>
        </div>
    );
};

export const ScatterPlot = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis type="number" dataKey="x" name={data.xAxisLabel} unit="" tick={{ fontSize: 12 }}>
                <Label value={data.xAxisLabel} offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="y" name={data.yAxisLabel} unit="" tick={{ fontSize: 12 }}>
                <Label value={data.yAxisLabel} angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
            <Scatter name="Data" data={data.points} fill="rgba(79, 70, 229, 0.8)" />
        </ScatterChart>
    </ResponsiveContainer>
);

export const SegmentedBarChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={200}>
        <BarChart layout="vertical" data={data} stackOffset="expand" margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide={true} tickFormatter={(tick) => `${tick * 100}%`} />
            <YAxis type="category" dataKey="name" width={60} stroke="#475569" tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
            <Legend />
            <Bar dataKey="Activity A" stackId="a" fill="#4f46e5" />
            <Bar dataKey="Activity B" stackId="a" fill="#818cf8" />
            <Bar dataKey="Activity C" stackId="a" fill="#c7d2fe" />
        </BarChart>
    </ResponsiveContainer>
);