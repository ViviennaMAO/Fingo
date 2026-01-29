export const UNITS = [
    // 1. 金融体系基石 (Introduction & Overview)
    {
        id: 'unit_1',
        title: 'Financial System Foundations',
        description: 'Understand the building blocks of financial markets.',
        color: '#58cc02',
        lessons: [
            {
                id: 'lesson_1_1',
                title: 'Financial Markets',
                icon: '🧱',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is the PRIMARY function of financial markets?',
                        options: [
                            'To make banks profitable',
                            'To channel funds from savers to borrowers',
                            'To print money',
                            'To regulate the economy'
                        ],
                        correctIndex: 1,
                        explanation: 'Financial markets channel funds from those with surplus (savers) to those with shortages (borrowers), enabling efficient allocation of capital.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'What does "Aggregate Output" measure?',
                        options: [
                            'Total stock market value',
                            'Total production of goods and services in an economy',
                            'Total bank deposits',
                            'Total government spending'
                        ],
                        correctIndex: 1,
                        explanation: 'Aggregate Output (often measured by GDP) represents the total value of all goods and services produced in an economy.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these financial intermediaries by typical asset size (smallest to largest):',
                        items: ['Credit Unions', 'Mutual Funds', 'Commercial Banks', 'Central Banks'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_1_2',
                title: 'Financial Intermediaries',
                icon: '🏢',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Which is NOT a type of financial intermediary?',
                        options: [
                            'Commercial banks',
                            'Insurance companies',
                            'Stock exchanges',
                            'Pension funds'
                        ],
                        correctIndex: 2,
                        explanation: 'Stock exchanges are financial markets, not intermediaries. Intermediaries like banks, insurance companies, and pension funds transform assets and manage risks.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'What is "Financial Innovation"?',
                        options: [
                            'Building new bank branches',
                            'Development of new financial products and services',
                            'Increasing bank profits',
                            'Government regulation of finance'
                        ],
                        correctIndex: 1,
                        explanation: 'Financial Innovation refers to the creation of new financial instruments, technologies, markets, and institutions (e.g., ETFs, mobile payments, cryptocurrency).'
                    }
                ]
            },
            {
                id: 'lesson_1_3',
                title: 'Financial Crises',
                icon: '⚠️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What typically triggers a financial crisis?',
                        options: [
                            'Low unemployment',
                            'Asset price bubbles bursting and bank failures',
                            'Strong economic growth',
                            'High savings rates'
                        ],
                        correctIndex: 1,
                        explanation: 'Financial crises are often triggered by asset bubbles bursting, leading to bank failures, credit freezes, and economic downturns.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these events in a typical financial crisis sequence:',
                        items: ['Asset bubble forms', 'Bubble bursts', 'Bank runs occur', 'Economic recession'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            }
        ]
    },

    // 2. 金融市场与利率 (Financial Markets)
    {
        id: 'unit_2',
        title: 'Interest Rates & Bonds',
        description: 'Master the mathematics of money and risk.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'lesson_2_1',
                title: 'Yield to Maturity',
                icon: '📈',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What does Yield to Maturity (YTM) represent?',
                        options: [
                            'The coupon rate of a bond',
                            'The total return if held to maturity',
                            'The current market price',
                            'The face value of a bond'
                        ],
                        correctIndex: 1,
                        explanation: 'YTM is the total return anticipated if a bond is held until maturity, accounting for coupon payments and price changes.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'When interest rates RISE, bond prices typically:',
                        options: [
                            'Rise',
                            'Fall',
                            'Stay the same',
                            'Become unpredictable'
                        ],
                        correctIndex: 1,
                        explanation: 'Bond prices and interest rates have an inverse relationship. When rates rise, existing bonds with lower rates become less attractive, lowering their prices.'
                    }
                ]
            },
            {
                id: 'lesson_2_2',
                title: 'Bond Types',
                icon: '📜',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is a "Coupon Bond"?',
                        options: [
                            'A bond that pays no interest',
                            'A bond with periodic interest payments',
                            'A bond backed by coupons',
                            'A short-term government bond'
                        ],
                        correctIndex: 1,
                        explanation: 'A Coupon Bond pays periodic interest (coupons) to the holder, plus the face value at maturity.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'A zero-coupon bond is sold at:',
                        options: [
                            'Premium (above face value)',
                            'Par (at face value)',
                            'Discount (below face value)',
                            'Variable price'
                        ],
                        correctIndex: 2,
                        explanation: 'Zero-coupon bonds pay no interest but are sold at a discount. The return comes from the difference between purchase price and face value at maturity.'
                    }
                ]
            },
            {
                id: 'lesson_2_3',
                title: 'Risk Premium',
                icon: '⚡',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Risk Premium"?',
                        options: [
                            'The base interest rate',
                            'Extra return demanded for taking on additional risk',
                            'Insurance cost',
                            'Government subsidy'
                        ],
                        correctIndex: 1,
                        explanation: 'Risk Premium is the additional return investors require to hold a risky asset instead of a risk-free asset (like government bonds).'
                    },
                    {
                        type: 'sort',
                        question: 'Order these bonds by typical risk premium (lowest to highest):',
                        items: ['US Treasury Bonds', 'Investment-Grade Corporate', 'High-Yield (Junk) Bonds', 'Emerging Market Bonds'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_2_4',
                title: 'Term Structure',
                icon: '🎢',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What does the "Term Structure of Interest Rates" show?',
                        options: [
                            'How rates change over time',
                            'Relationship between rates and maturity lengths',
                            'Bank lending rates',
                            'Inflation expectations only'
                        ],
                        correctIndex: 1,
                        explanation: 'The Term Structure (or Yield Curve) shows the relationship between interest rates and different maturity periods for similar bonds.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'An inverted yield curve often signals:',
                        options: [
                            'Strong economic growth ahead',
                            'Potential recession',
                            'Rising inflation',
                            'Stock market boom'
                        ],
                        correctIndex: 1,
                        explanation: 'An inverted yield curve (short-term rates higher than long-term) has historically been a reliable predictor of economic recessions.'
                    }
                ]
            }
        ]
    },

    // 3. 金融机构及其管理 (Financial Institutions)
    {
        id: 'unit_3',
        title: 'Banking & Information',
        description: 'Explore how banks work and information problems.',
        color: '#ff9600',
        lessons: [
            {
                id: 'lesson_3_1',
                title: 'Adverse Selection',
                icon: '🎭',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Adverse Selection" in finance?',
                        options: [
                            'Choosing bad investments',
                            'High-risk borrowers are more likely to seek loans',
                            'Banks selecting wrong employees',
                            'Market timing failures'
                        ],
                        correctIndex: 1,
                        explanation: 'Adverse Selection occurs BEFORE a transaction: those most likely to produce bad outcomes (high-risk borrowers) are most eager to take loans.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Which helps reduce adverse selection?',
                        options: [
                            'Higher interest rates',
                            'Credit screening and collateral requirements',
                            'Less regulation',
                            'Anonymous lending'
                        ],
                        correctIndex: 1,
                        explanation: 'Credit screening, collateral, and information disclosure help lenders identify good borrowers and reduce adverse selection.'
                    }
                ]
            },
            {
                id: 'lesson_3_2',
                title: 'Moral Hazard',
                icon: '😈',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'When does "Moral Hazard" occur?',
                        options: [
                            'Before signing a contract',
                            'After a transaction, when one party takes more risk',
                            'During market crashes',
                            'When banks fail'
                        ],
                        correctIndex: 1,
                        explanation: 'Moral Hazard occurs AFTER a transaction: borrowers may take excessive risks because they\'re using someone else\'s money.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'How can banks reduce moral hazard?',
                        options: [
                            'Offering lower rates',
                            'Monitoring borrowers and restrictive covenants',
                            'Lending to everyone',
                            'Removing collateral requirements'
                        ],
                        correctIndex: 1,
                        explanation: 'Banks reduce moral hazard through monitoring, loan covenants (restrictions on borrower behavior), and requiring equity stakes.'
                    }
                ]
            },
            {
                id: 'lesson_3_3',
                title: 'Conflicts of Interest',
                icon: '⚖️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'A "Conflict of Interest" in finance occurs when:',
                        options: [
                            'Two banks compete',
                            'An entity has multiple interests that could corrupt decisions',
                            'Interest rates conflict',
                            'Borrowers disagree with lenders'
                        ],
                        correctIndex: 1,
                        explanation: 'Conflicts of Interest arise when financial institutions have competing interests that may compromise their duty to clients (e.g., analysts promoting stocks their bank underwrites).'
                    },
                    {
                        type: 'sort',
                        question: 'Order these by severity of potential conflict of interest:',
                        items: ['Independent financial advisor', 'Bank selling own products', 'Rating agency paid by issuers', 'Auditor also consulting'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_3_4',
                title: 'Asset Transformation',
                icon: '🔄',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Asset Transformation" by banks?',
                        options: [
                            'Converting currency',
                            'Turning illiquid assets into liquid liabilities',
                            'Changing loan terms',
                            'Trading stocks for bonds'
                        ],
                        correctIndex: 1,
                        explanation: 'Banks transform assets by taking short-term deposits (liquid) and making long-term loans (illiquid), providing liquidity to depositors while funding borrowers.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Why is maturity transformation risky for banks?',
                        options: [
                            'It reduces profits',
                            'Short-term depositors may withdraw while long-term loans remain',
                            'It increases taxes',
                            'Regulators prohibit it'
                        ],
                        correctIndex: 1,
                        explanation: 'Maturity mismatch creates liquidity risk: if many depositors withdraw simultaneously (bank run), the bank may not have enough liquid assets.'
                    }
                ]
            }
        ]
    },

    // 4. 中央银行与货币政策 (Central Banking)
    {
        id: 'unit_4',
        title: 'Central Banking & Policy',
        description: 'Learn how central banks control money and economy.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'lesson_4_1',
                title: 'The Federal Reserve',
                icon: '🏛️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is the primary mandate of the Federal Reserve?',
                        options: [
                            'Maximize stock prices',
                            'Price stability and maximum employment',
                            'Fund government spending',
                            'Regulate all businesses'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fed has a dual mandate: maintain price stability (control inflation) and achieve maximum sustainable employment.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The FOMC (Federal Open Market Committee) is responsible for:',
                        options: [
                            'Printing currency',
                            'Setting monetary policy and interest rates',
                            'Regulating banks',
                            'Collecting taxes'
                        ],
                        correctIndex: 1,
                        explanation: 'The FOMC sets the target federal funds rate and directs open market operations, making key monetary policy decisions.'
                    }
                ]
            },
            {
                id: 'lesson_4_2',
                title: 'Money Supply',
                icon: '💵',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Money Supply Process involves:',
                        options: [
                            'Only the central bank printing money',
                            'Central bank actions and commercial bank lending',
                            'Government spending only',
                            'Foreign exchange trading'
                        ],
                        correctIndex: 1,
                        explanation: 'Money supply is determined by central bank monetary base AND commercial banks creating money through lending (money multiplier effect).'
                    },
                    {
                        type: 'sort',
                        question: 'Order by liquidity (most liquid first):',
                        items: ['M0 (Currency)', 'M1 (+ Checking)', 'M2 (+ Savings)', 'M3 (+ Large Deposits)'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_4_3',
                title: 'Open Market Operations',
                icon: '📊',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'When the Fed buys government bonds, it:',
                        options: [
                            'Decreases money supply',
                            'Increases money supply',
                            'Has no effect on money supply',
                            'Only affects bond prices'
                        ],
                        correctIndex: 1,
                        explanation: 'When the Fed buys bonds, it pays with newly created money, injecting reserves into the banking system and expanding money supply.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'To fight high inflation, the Fed would typically:',
                        options: [
                            'Buy bonds and lower rates',
                            'Sell bonds and raise rates',
                            'Print more money',
                            'Lower reserve requirements'
                        ],
                        correctIndex: 1,
                        explanation: 'To combat inflation, the Fed uses contractionary policy: selling bonds (reducing money supply) and raising interest rates to cool the economy.'
                    }
                ]
            },
            {
                id: 'lesson_4_4',
                title: 'Reserve Requirements',
                icon: '🏦',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What are "Required Reserves"?',
                        options: [
                            'Money banks must hold and not lend out',
                            'Emergency government funds',
                            'Foreign currency holdings',
                            'Bank profits set aside'
                        ],
                        correctIndex: 0,
                        explanation: 'Required Reserves are the minimum amount of deposits banks must hold (not lend), either as vault cash or deposits at the Fed.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If reserve requirements DECREASE, the money multiplier:',
                        options: [
                            'Decreases',
                            'Increases',
                            'Stays the same',
                            'Becomes negative'
                        ],
                        correctIndex: 1,
                        explanation: 'Lower reserve requirements mean banks can lend more of each deposit, increasing the money multiplier and potentially expanding money supply.'
                    }
                ]
            }
        ]
    },

    // 5. 国际金融 (International Finance)
    {
        id: 'unit_5',
        title: 'International Finance',
        description: 'Navigate global capital flows and exchange rates.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'lesson_5_1',
                title: 'Foreign Exchange',
                icon: '🌐',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Foreign Exchange (Forex) market is:',
                        options: [
                            'The smallest financial market',
                            'The largest and most liquid financial market',
                            'Only for governments',
                            'Closed on weekends'
                        ],
                        correctIndex: 1,
                        explanation: 'The Forex market trades over $6 trillion daily, making it the world\'s largest and most liquid financial market, operating 24/5.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'What determines exchange rates in a floating system?',
                        options: [
                            'Government decree',
                            'Supply and demand for currencies',
                            'Gold reserves',
                            'Fixed international agreement'
                        ],
                        correctIndex: 1,
                        explanation: 'In a floating exchange rate system, currency values are determined by market forces of supply and demand.'
                    }
                ]
            },
            {
                id: 'lesson_5_2',
                title: 'Exchange Rate Dynamics',
                icon: '💱',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'If US interest rates rise relative to Europe, the USD typically:',
                        options: [
                            'Depreciates',
                            'Appreciates',
                            'Stays unchanged',
                            'Becomes volatile'
                        ],
                        correctIndex: 1,
                        explanation: 'Higher US rates attract foreign capital seeking better returns, increasing demand for USD and causing appreciation.'
                    },
                    {
                        type: 'sort',
                        question: 'Order factors by their typical impact on currency strength:',
                        items: ['High inflation (negative)', 'Trade surplus (positive)', 'Political stability (positive)', 'High interest rates (positive)'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_5_3',
                title: 'Purchasing Power Parity',
                icon: '🍔',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Purchasing Power Parity (PPP) theory suggests:',
                        options: [
                            'All countries have equal GDP',
                            'Exchange rates adjust so identical goods cost the same across countries',
                            'Governments set fair prices',
                            'Inflation is always equal globally'
                        ],
                        correctIndex: 1,
                        explanation: 'PPP theory states that exchange rates should equalize prices of identical goods across countries (e.g., Big Mac Index).'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Why does PPP often fail in the short run?',
                        options: [
                            'Central banks are too powerful',
                            'Trade barriers, transportation costs, and non-traded goods',
                            'It\'s a wrong theory',
                            'Currencies are always correctly valued'
                        ],
                        correctIndex: 1,
                        explanation: 'PPP fails short-term due to trade barriers, transport costs, non-tradable services, and sticky prices. It works better long-term.'
                    }
                ]
            },
            {
                id: 'lesson_5_4',
                title: 'Eurodollars',
                icon: '🌍',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What are "Eurodollars"?',
                        options: [
                            'European currency',
                            'US dollars held in banks outside the US',
                            'Digital euros',
                            'Euro-denominated bonds'
                        ],
                        correctIndex: 1,
                        explanation: 'Eurodollars are US dollar-denominated deposits held at foreign banks or foreign branches of US banks, outside Fed regulation.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Why are Eurodollar markets important?',
                        options: [
                            'They\'re not important',
                            'They provide offshore dollar funding and set global interest rate benchmarks',
                            'They only matter to Europe',
                            'They\'re illegal'
                        ],
                        correctIndex: 1,
                        explanation: 'The Eurodollar market is crucial for global dollar funding, and historically set LIBOR, a key global interest rate benchmark.'
                    }
                ]
            }
        ]
    },

    // 6. 货币理论 (Monetary Theory)
    {
        id: 'unit_6',
        title: 'Monetary Theory',
        description: 'Understand how money affects the economy.',
        color: '#ffc800',
        lessons: [
            {
                id: 'lesson_6_1',
                title: 'Quantity Theory',
                icon: '🧮',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Quantity Theory of Money equation (MV = PY) states that:',
                        options: [
                            'Money supply equals GDP',
                            'Money times velocity equals price level times output',
                            'More money means less inflation',
                            'Velocity is always 1'
                        ],
                        correctIndex: 1,
                        explanation: 'MV = PY: Money supply (M) times velocity (V) equals price level (P) times real output (Y). This links money to nominal GDP.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If velocity is stable and output is fixed, increasing money supply leads to:',
                        options: [
                            'Lower prices',
                            'Higher prices (inflation)',
                            'No change',
                            'Higher real output'
                        ],
                        correctIndex: 1,
                        explanation: 'With stable V and fixed Y, increasing M must increase P (inflation). This is the core insight of monetarism.'
                    }
                ]
            },
            {
                id: 'lesson_6_2',
                title: 'IS-LM Model',
                icon: '📐',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The IS curve shows combinations of:',
                        options: [
                            'Inflation and savings',
                            'Interest rates and output where goods market is in equilibrium',
                            'Investment and stocks',
                            'Income and spending only'
                        ],
                        correctIndex: 1,
                        explanation: 'The IS (Investment-Savings) curve shows all combinations of interest rates and output where the goods market is in equilibrium.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Expansionary fiscal policy (more government spending) shifts the IS curve:',
                        options: [
                            'Left (down)',
                            'Right (up)',
                            'No shift',
                            'Makes it vertical'
                        ],
                        correctIndex: 1,
                        explanation: 'More government spending increases demand, shifting IS right, leading to higher output and interest rates in equilibrium.'
                    }
                ]
            },
            {
                id: 'lesson_6_3',
                title: 'AD-AS Model',
                icon: '📊',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Aggregate Demand (AD) curve slopes downward because:',
                        options: [
                            'People buy more at higher prices',
                            'Lower prices increase real wealth and reduce interest rates, boosting spending',
                            'Supply always exceeds demand',
                            'It follows the law of supply'
                        ],
                        correctIndex: 1,
                        explanation: 'Lower prices increase real money balances (wealth effect) and reduce interest rates, both stimulating spending and output.'
                    },
                    {
                        type: 'sort',
                        question: 'Order the effects of expansionary monetary policy:',
                        items: ['Money supply increases', 'Interest rates fall', 'Investment and consumption rise', 'AD shifts right, output increases'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_6_4',
                title: 'Transmission Mechanism',
                icon: '⚙️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The "Transmission Mechanism" in monetary policy refers to:',
                        options: [
                            'How banks send money',
                            'How central bank actions affect the real economy',
                            'Electronic payment systems',
                            'Communication between central banks'
                        ],
                        correctIndex: 1,
                        explanation: 'The Transmission Mechanism describes how monetary policy changes (like rate cuts) flow through financial markets to affect spending, investment, and output.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Which is NOT a traditional monetary policy transmission channel?',
                        options: [
                            'Interest rate channel',
                            'Exchange rate channel',
                            'Social media channel',
                            'Asset price channel'
                        ],
                        correctIndex: 2,
                        explanation: 'Traditional channels include interest rates, exchange rates, asset prices, and credit. Social media is not a formal transmission mechanism.'
                    },
                    {
                        type: 'sort',
                        question: 'Order the interest rate transmission channel steps:',
                        items: ['Fed lowers policy rate', 'Market interest rates fall', 'Borrowing increases', 'Investment and spending rise'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            }
        ]
    }
];
