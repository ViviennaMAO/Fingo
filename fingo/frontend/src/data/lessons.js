export const UNITS = [
    {
        id: 'unit_1',
        title: 'Macro Basics 101',
        description: 'Understand the language of the markets.',
        color: '#58cc02',
        lessons: [
            {
                id: 'lesson_1_1',
                title: 'Interest Rates',
                icon: '📈',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What happens when a central bank raises interest rates?',
                        options: [
                            'Borrowing becomes cheaper',
                            'Inflation usually slows down',
                            'Stock markets always go up',
                            'Currency value decreases'
                        ],
                        correctIndex: 1,
                        explanation: 'Higher rates make borrowing more expensive, which can reduce spending and slow down inflation.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these from lowest to highest risk:',
                        items: ['Government Bonds', 'Corporate Bonds', 'Small-cap Stocks', 'Crypto Assets'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_1_2',
                title: 'Inflation 101',
                icon: '💸',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Which indicator is most commonly used to measure inflation?',
                        options: ['GDP', 'CPI', 'PMI', 'VIX'],
                        correctIndex: 1
                    }
                ]
            },
            {
                id: 'lesson_1_3',
                title: 'Yield Curves',
                icon: '🎢',
                locked: true
            }
        ]
    },
    {
        id: 'unit_2',
        title: 'RWA & Digital Gold',
        description: 'Bridging traditional assets and DeFi.',
        color: '#ffc800',
        lessons: [
            {
                id: 'lesson_2_1',
                title: 'Introduction to PAXG',
                icon: '🪙',
                locked: true
            }
        ]
    }
];
