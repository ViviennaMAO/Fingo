import { useState, useEffect } from 'react'
import './App.css'
import SkillTree from './components/SkillTree'
import ExerciseOverlay from './components/ExerciseOverlay'

const VIEWS = {
    MAP: 'map',
    LEADERBOARD: 'leaderboard',
    PROFILE: 'profile',
    EXERCISE: 'exercise'
}

function App() {
    const [currentView, setCurrentView] = useState(VIEWS.MAP)
    const [selectedLesson, setSelectedLesson] = useState(null)
    const [luffaReady, setLuffaReady] = useState(false)
    const [stats, setStats] = useState({ hearts: 5, streak: 3, xp: 120 })

    useEffect(() => {
        if (window.wx && window.wx.miniProgram) {
            setLuffaReady(true)
        } else {
            document.addEventListener('LuffaJSBridgeReady', () => {
                setLuffaReady(true)
            }, false)
        }
    }, [])

    const handleSelectLesson = (lesson) => {
        setSelectedLesson(lesson)
        setCurrentView(VIEWS.EXERCISE)
    }

    const handleCompleteExercise = () => {
        setStats(prev => ({ ...prev, xp: prev.xp + 10 }))
        setCurrentView(VIEWS.MAP)
        setSelectedLesson(null)

        // Notify Luffa native layer if needed
        if (luffaReady) {
            window.wx.miniProgram.postMessage({ data: { action: 'exercise_complete', lessonId: selectedLesson.id } })
        }
    }

    return (
        <div className="app-container">
            <header className="glass-header">
                <h1>Fingo</h1>
                <div className="stats">
                    <span className="stat-item" title="Hearts">❤️ {stats.hearts}</span>
                    <span className="stat-item" title="Streak">🔥 {stats.streak}</span>
                    <span className="stat-item xp-badge" title="XP">✨ {stats.xp}</span>
                </div>
            </header>

            <main className="main-content">
                {currentView === VIEWS.MAP && (
                    <SkillTree onSelectLesson={handleSelectLesson} />
                )}

                {currentView === VIEWS.LEADERBOARD && (
                    <div className="placeholder-view">
                        <h2>Leaderboard</h2>
                        <p>Coming soon...</p>
                    </div>
                )}

                {currentView === VIEWS.PROFILE && (
                    <div className="placeholder-view">
                        <h2>User Profile</h2>
                        <p>Coming soon...</p>
                    </div>
                )}
            </main>

            {currentView === VIEWS.EXERCISE && selectedLesson && (
                <ExerciseOverlay
                    lesson={selectedLesson}
                    onComplete={handleCompleteExercise}
                    onClose={() => setCurrentView(VIEWS.MAP)}
                />
            )}

            {currentView !== VIEWS.EXERCISE && (
                <nav className="bottom-nav">
                    <button
                        className={`nav-item ${currentView === VIEWS.MAP ? 'active' : ''}`}
                        onClick={() => setCurrentView(VIEWS.MAP)}
                    >
                        <span className="nav-icon">🗺️</span>
                        <span className="nav-label">Learn</span>
                    </button>
                    <button
                        className={`nav-item ${currentView === VIEWS.LEADERBOARD ? 'active' : ''}`}
                        onClick={() => setCurrentView(VIEWS.LEADERBOARD)}
                    >
                        <span className="nav-icon">🏆</span>
                        <span className="nav-label">Leagues</span>
                    </button>
                    <button
                        className={`nav-item ${currentView === VIEWS.PROFILE ? 'active' : ''}`}
                        onClick={() => setCurrentView(VIEWS.PROFILE)}
                    >
                        <span className="nav-icon">👤</span>
                        <span className="nav-label">Profile</span>
                    </button>
                </nav>
            )}
        </div>
    )
}

export default App
