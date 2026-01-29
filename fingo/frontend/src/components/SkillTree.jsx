import React from 'react';
import './SkillTree.css';
import { UNITS } from '../data/lessons';

const SkillTree = ({ onSelectLesson }) => {
    return (
        <div className="skill-tree-container">
            {UNITS.map((unit, unitIndex) => (
                <div key={unit.id} className="unit-section">
                    <div className="unit-header" style={{ backgroundColor: unit.color }}>
                        <h2>{unit.title}</h2>
                        <p>{unit.description}</p>
                    </div>

                    <div className="lesson-path">
                        {unit.lessons.map((lesson, lessonIndex) => {
                            // Zig-zag pattern implementation
                            const offset = (lessonIndex % 3) * 40 - 40;

                            return (
                                <div
                                    key={lesson.id}
                                    className={`lesson-node ${lesson.locked ? 'locked' : ''}`}
                                    style={{ transform: `translateX(${offset}px)` }}
                                    onClick={() => !lesson.locked && onSelectLesson(lesson)}
                                >
                                    <div className="node-outer">
                                        <div className="node-inner">
                                            {lesson.locked ? '🔒' : lesson.icon}
                                        </div>
                                    </div>
                                    <span className="lesson-label">{lesson.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillTree;
