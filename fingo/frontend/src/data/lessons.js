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
            // 基础计量 (Basic Calculations)
            {
                id: 'lesson_2_1',
                title: 'Present Value',
                icon: '💰',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Present Value" (PV)?',
                        options: [
                            'The future amount of money',
                            'The current worth of future cash flows',
                            'The interest rate',
                            'The inflation rate'
                        ],
                        correctIndex: 1,
                        explanation: 'Present Value is the current worth of a future sum of money, given a specified rate of return. It answers: "What is $X in the future worth today?"'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If interest rates INCREASE, the present value of future cash flows:',
                        options: [
                            'Increases',
                            'Decreases',
                            'Stays the same',
                            'Becomes zero'
                        ],
                        correctIndex: 1,
                        explanation: 'Higher discount rates mean future money is worth less today. PV = FV / (1+r)^n, so as r increases, PV decreases.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'You will receive $1,100 in one year. If the interest rate is 10%, what is the present value?',
                        options: [
                            '$1,100',
                            '$1,000',
                            '$990',
                            '$1,210'
                        ],
                        correctIndex: 1,
                        explanation: 'PV = $1,100 / (1 + 0.10) = $1,100 / 1.10 = $1,000. The $1,100 next year is equivalent to $1,000 today at 10% interest.'
                    }
                ]
            },
            {
                id: 'lesson_2_2',
                title: 'Future Value',
                icon: '⏳',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Future Value" (FV)?',
                        options: [
                            'Money received today',
                            'The value of current money at a future date',
                            'The discount rate',
                            'The bond price'
                        ],
                        correctIndex: 1,
                        explanation: 'Future Value is what a current sum of money will be worth at a specified future date, given a rate of return. FV = PV × (1+r)^n.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'You invest $1,000 at 5% annual interest for 2 years (compounded). What is the future value?',
                        options: [
                            '$1,050',
                            '$1,100',
                            '$1,102.50',
                            '$1,000'
                        ],
                        correctIndex: 2,
                        explanation: 'FV = $1,000 × (1.05)² = $1,000 × 1.1025 = $1,102.50. Compounding means you earn interest on interest.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these investments by future value after 10 years (lowest to highest), all starting with $1,000:',
                        items: ['2% annual rate', '5% annual rate', '8% annual rate', '10% annual rate'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_2_3',
                title: 'Discounting',
                icon: '📉',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Discounting" in finance?',
                        options: [
                            'Getting a price reduction',
                            'Converting future values to present values',
                            'Selling bonds at a loss',
                            'Reducing interest rates'
                        ],
                        correctIndex: 1,
                        explanation: 'Discounting is the process of determining the present value of future cash flows by applying a discount rate. It\'s the reverse of compounding.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The "discount rate" represents:',
                        options: [
                            'The inflation rate only',
                            'The opportunity cost of capital / required return',
                            'The bank\'s fee',
                            'The tax rate'
                        ],
                        correctIndex: 1,
                        explanation: 'The discount rate reflects the time value of money and risk. It represents the return you could earn on alternative investments of similar risk.'
                    },
                    {
                        type: 'sort',
                        question: 'Order by present value of $10,000 received in 5 years (highest PV first):',
                        items: ['Discount rate: 2%', 'Discount rate: 5%', 'Discount rate: 8%', 'Discount rate: 12%'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_2_4',
                title: 'Maturity',
                icon: '📅',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is "Maturity" (到期日) of a bond?',
                        options: [
                            'When the bond was issued',
                            'The date when principal is repaid and bond expires',
                            'When interest payments begin',
                            'The bond\'s credit rating date'
                        ],
                        correctIndex: 1,
                        explanation: 'Maturity is the date when the bond issuer must repay the principal (face value) to the bondholder. The bond ceases to exist after maturity.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Longer maturity bonds typically have:',
                        options: [
                            'Lower interest rate risk',
                            'Higher interest rate risk',
                            'No interest rate risk',
                            'Fixed prices'
                        ],
                        correctIndex: 1,
                        explanation: 'Longer maturity = more sensitivity to interest rate changes. A 30-year bond will lose more value than a 2-year bond when rates rise.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these bonds by typical maturity length:',
                        items: ['Treasury Bills (T-Bills)', 'Treasury Notes', 'Treasury Bonds', 'Perpetual Bonds'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            // 工具与收益 (Instruments & Returns)
            {
                id: 'lesson_2_5',
                title: 'Yield to Maturity',
                icon: '🎯',
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
                        explanation: 'YTM is the total return anticipated if a bond is held until maturity, accounting for coupon payments, price paid, and face value received.'
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
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If a bond is trading at a DISCOUNT (below face value), then YTM is:',
                        options: [
                            'Lower than the coupon rate',
                            'Higher than the coupon rate',
                            'Equal to the coupon rate',
                            'Zero'
                        ],
                        correctIndex: 1,
                        explanation: 'When price < face value, you gain from both coupons AND price appreciation at maturity, so YTM > coupon rate.'
                    }
                ]
            },
            {
                id: 'lesson_2_6',
                title: 'Coupon Bonds',
                icon: '🎫',
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
                        question: 'A bond has a face value of $1,000 and a 6% annual coupon rate. What is the annual coupon payment?',
                        options: [
                            '$6',
                            '$60',
                            '$600',
                            '$106'
                        ],
                        correctIndex: 1,
                        explanation: 'Annual coupon = Face value × Coupon rate = $1,000 × 6% = $60 per year.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'What is a "Discount Bond" (贴现债券)?',
                        options: [
                            'A bond sold at a reduced price due to low quality',
                            'A zero-coupon bond sold below face value',
                            'A bond with variable coupons',
                            'A bond that matures early'
                        ],
                        correctIndex: 1,
                        explanation: 'A Discount Bond (like T-Bills) pays no coupons and is sold at a discount to face value. Your return comes entirely from price appreciation.'
                    }
                ]
            },
            {
                id: 'lesson_2_7',
                title: 'Rate of Return',
                icon: '📊',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The "Rate of Return" on a bond includes:',
                        options: [
                            'Only coupon payments',
                            'Only price changes',
                            'Coupon payments AND price changes',
                            'Only the face value'
                        ],
                        correctIndex: 2,
                        explanation: 'Rate of Return = (Coupon payment + Price change) / Initial price. It captures both income (coupons) and capital gains/losses.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'You buy a bond for $950, receive $50 in coupons, and sell it for $980. What is your rate of return?',
                        options: [
                            '5.26%',
                            '8.42%',
                            '3.16%',
                            '10%'
                        ],
                        correctIndex: 1,
                        explanation: 'Return = ($50 coupon + $30 price gain) / $950 = $80 / $950 = 8.42%'
                    },
                    {
                        type: 'sort',
                        question: 'Order these bond scenarios by rate of return (lowest to highest):',
                        items: ['Price fell, low coupon', 'Price stable, medium coupon', 'Price rose, medium coupon', 'Price rose, high coupon'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            // 宏观因素 (Macro Factors)
            {
                id: 'lesson_2_8',
                title: 'Nominal vs Real Rates',
                icon: '💵',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is the "Nominal Interest Rate"?',
                        options: [
                            'The rate adjusted for inflation',
                            'The stated rate without inflation adjustment',
                            'The central bank rate only',
                            'The real purchasing power gain'
                        ],
                        correctIndex: 1,
                        explanation: 'The Nominal Interest Rate is the stated rate you see quoted (e.g., 5% on your savings account). It does NOT account for inflation.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'What is the "Real Interest Rate"?',
                        options: [
                            'The rate before taxes',
                            'The nominal rate minus expected inflation',
                            'The highest available rate',
                            'The government bond rate'
                        ],
                        correctIndex: 1,
                        explanation: 'Real Interest Rate = Nominal Rate - Inflation. It measures the true increase in purchasing power of your money.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If the nominal rate is 6% and inflation is 4%, the real interest rate is approximately:',
                        options: [
                            '10%',
                            '2%',
                            '4%',
                            '24%'
                        ],
                        correctIndex: 1,
                        explanation: 'Real rate ≈ Nominal rate - Inflation = 6% - 4% = 2%. Your actual purchasing power only grows by about 2%.'
                    }
                ]
            },
            {
                id: 'lesson_2_9',
                title: 'Fisher Equation',
                icon: '📐',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Fisher Equation states that:',
                        options: [
                            'Nominal rate = Real rate + Expected inflation',
                            'Real rate = Nominal rate + Inflation',
                            'Inflation = Nominal rate × Real rate',
                            'Interest = Principal × Time'
                        ],
                        correctIndex: 0,
                        explanation: 'Fisher Equation: i = r + πᵉ, where i = nominal rate, r = real rate, πᵉ = expected inflation. Lenders demand compensation for expected inflation.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'According to the Fisher Effect, if expected inflation rises by 2%, nominal rates should:',
                        options: [
                            'Fall by 2%',
                            'Rise by 2%',
                            'Stay the same',
                            'Fall by 1%'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fisher Effect predicts a one-to-one relationship: higher expected inflation leads to proportionally higher nominal rates to maintain real returns.'
                    },
                    {
                        type: 'sort',
                        question: 'Order by expected nominal interest rate (assuming 2% real rate):',
                        items: ['Expected inflation: 1%', 'Expected inflation: 3%', 'Expected inflation: 5%', 'Expected inflation: 8%'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_2_10',
                title: 'Inflation Expectations',
                icon: '🔮',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Why do inflation expectations matter for interest rates?',
                        options: [
                            'They don\'t matter',
                            'Lenders demand higher rates to compensate for expected purchasing power loss',
                            'Inflation always equals interest rates',
                            'Only central banks care about inflation'
                        ],
                        correctIndex: 1,
                        explanation: 'If lenders expect 3% inflation, they\'ll demand at least 3% nominal interest just to maintain purchasing power, plus a real return on top.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'TIPS (Treasury Inflation-Protected Securities) protect investors from:',
                        options: [
                            'Default risk',
                            'Unexpected inflation',
                            'Interest rate changes',
                            'Currency risk'
                        ],
                        correctIndex: 1,
                        explanation: 'TIPS adjust their principal value with inflation, guaranteeing a real return regardless of actual inflation outcomes.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The "breakeven inflation rate" can be calculated by:',
                        options: [
                            'Dividing GDP by money supply',
                            'Nominal Treasury yield minus TIPS yield',
                            'Adding all interest rates together',
                            'Central bank announcement'
                        ],
                        correctIndex: 1,
                        explanation: 'Breakeven inflation = Nominal yield - TIPS yield. This market-implied measure shows what inflation rate would make you indifferent between the two bonds.'
                    }
                ]
            },
            // 风险与结构 (Risk & Structure)
            {
                id: 'lesson_2_11',
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
                id: 'lesson_2_12',
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
                    },
                    {
                        type: 'sort',
                        question: 'Order yield curve shapes from most bullish to most bearish economic signal:',
                        items: ['Steep upward slope', 'Normal upward slope', 'Flat curve', 'Inverted curve'],
                        correctOrder: [0, 1, 2, 3]
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

    // 4. 中央银行与货币政策 (Central Banking & Monetary Policy)
    {
        id: 'unit_4',
        title: 'Central Banking & Policy',
        description: 'Master how central banks control money and implement policy.',
        color: '#ce82ff',
        lessons: [
            // 第13章 中央银行与联邦储备体系
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
                            'Price stability and maximum employment (dual mandate)',
                            'Fund government spending',
                            'Regulate all businesses'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fed has a dual mandate: maintain price stability (control inflation around 2%) and achieve maximum sustainable employment.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The FOMC (Federal Open Market Committee) consists of:',
                        options: [
                            'Only the Fed Chair',
                            '7 Board Governors + 5 Reserve Bank Presidents (rotating)',
                            'All 12 Reserve Bank Presidents',
                            'Congressional appointees only'
                        ],
                        correctIndex: 1,
                        explanation: 'FOMC has 12 voting members: 7 Board of Governors + NY Fed President (permanent) + 4 rotating regional Fed Presidents.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The Federal Reserve System was established in:',
                        options: [
                            '1776',
                            '1913',
                            '1929',
                            '1971'
                        ],
                        correctIndex: 1,
                        explanation: 'The Federal Reserve Act of 1913 created the Fed in response to the Panic of 1907, establishing America\'s central bank.'
                    }
                ]
            },
            {
                id: 'lesson_4_2',
                title: 'Fed Independence',
                icon: '⚖️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Why is central bank independence important?',
                        options: [
                            'It\'s not important',
                            'Prevents political pressure to print money before elections',
                            'Makes the Fed more profitable',
                            'Speeds up decision making'
                        ],
                        correctIndex: 1,
                        explanation: 'Independence prevents politicians from pressuring the central bank to stimulate the economy short-term (especially before elections) at the cost of long-term inflation.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Paul Volcker\'s fight against inflation in the early 1980s demonstrated:',
                        options: [
                            'Political pressure always wins',
                            'Fed independence allows unpopular but necessary policies',
                            'Inflation is impossible to control',
                            'Interest rates don\'t affect inflation'
                        ],
                        correctIndex: 1,
                        explanation: 'Volcker raised rates to 20% despite recession and political pressure, successfully breaking 1970s inflation. This showed the value of Fed independence.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If a president publicly pressures the Fed Chair to cut rates, markets typically:',
                        options: [
                            'Celebrate the good news',
                            'Worry about Fed credibility and long-term inflation',
                            'Ignore it completely',
                            'Expect immediate rate cuts'
                        ],
                        correctIndex: 1,
                        explanation: 'Political pressure on the Fed raises concerns about monetary policy credibility, potentially leading to higher inflation expectations and bond yields.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these Fed Chairs chronologically:',
                        items: ['Paul Volcker', 'Alan Greenspan', 'Ben Bernanke', 'Jerome Powell'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            // 第14章 货币供给过程
            {
                id: 'lesson_4_3',
                title: 'Money Supply Process',
                icon: '💵',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The three main participants in the money supply process are:',
                        options: [
                            'Congress, President, Treasury',
                            'Central bank, commercial banks, depositors',
                            'Stock market, bond market, forex market',
                            'IMF, World Bank, BIS'
                        ],
                        correctIndex: 1,
                        explanation: 'Money supply is created through interactions between: (1) Central bank (sets monetary base), (2) Banks (create deposits through lending), (3) Depositors (affect currency/deposit ratio).'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The Money Supply Process involves:',
                        options: [
                            'Only the central bank printing money',
                            'Central bank monetary base + commercial bank lending multiplier',
                            'Government spending only',
                            'Foreign exchange trading'
                        ],
                        correctIndex: 1,
                        explanation: 'M = m × MB. Money supply equals the money multiplier (m) times the monetary base (MB). Banks multiply the base through fractional reserve lending.'
                    },
                    {
                        type: 'sort',
                        question: 'Order by liquidity (most liquid first):',
                        items: ['M0 (Currency in circulation)', 'M1 (+ Demand deposits)', 'M2 (+ Savings, small time deposits)', 'M3 (+ Large time deposits)'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_4_4',
                title: 'Fed Balance Sheet',
                icon: '📋',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'On the Fed\'s balance sheet, which is an ASSET?',
                        options: [
                            'Currency in circulation',
                            'Bank reserves',
                            'Government securities (Treasuries)',
                            'Reverse repos'
                        ],
                        correctIndex: 2,
                        explanation: 'Fed ASSETS: Government bonds, MBS, loans to banks. LIABILITIES: Currency, bank reserves, Treasury General Account (TGA), Reverse Repo (ON RRP).'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The formula for US Dollar liquidity is approximately:',
                        options: [
                            'GDP minus Debt',
                            'Fed Balance Sheet - TGA - ON RRP',
                            'M2 plus M3',
                            'Total bank deposits'
                        ],
                        correctIndex: 1,
                        explanation: 'Net liquidity ≈ Fed Assets - TGA (Treasury\'s checking account) - ON RRP (overnight reverse repo). This measures actual reserves available to the banking system.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'When the Treasury General Account (TGA) balance INCREASES, liquidity in the banking system:',
                        options: [
                            'Increases',
                            'Decreases',
                            'Stays the same',
                            'Becomes negative'
                        ],
                        correctIndex: 1,
                        explanation: 'Higher TGA means Treasury is holding more cash at the Fed (from taxes/bond sales), draining reserves from the banking system and reducing liquidity.'
                    }
                ]
            },
            {
                id: 'lesson_4_5',
                title: 'Money Multiplier',
                icon: '✖️',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is the money multiplier?',
                        options: [
                            'The interest rate times deposits',
                            'The ratio of money supply to monetary base',
                            'The number of banks in the system',
                            'The inflation rate'
                        ],
                        correctIndex: 1,
                        explanation: 'Money multiplier (m) = M/MB. It shows how much the money supply expands for each dollar of monetary base. Depends on reserve ratio and currency preferences.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If the reserve requirement is 10%, what is the simple deposit multiplier?',
                        options: [
                            '1',
                            '5',
                            '10',
                            '100'
                        ],
                        correctIndex: 2,
                        explanation: 'Simple multiplier = 1/rr = 1/0.10 = 10. In theory, $1 of reserves can support $10 of deposits through repeated lending.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The actual money multiplier is typically LESS than the simple multiplier because:',
                        options: [
                            'Banks are dishonest',
                            'People hold cash and banks hold excess reserves',
                            'The Fed makes mistakes',
                            'Inflation erodes it'
                        ],
                        correctIndex: 1,
                        explanation: 'Currency held by public (doesn\'t get re-deposited) and excess reserves (banks choose not to lend all) reduce the effective multiplier.'
                    }
                ]
            },
            // 第15章 货币政策工具
            {
                id: 'lesson_4_6',
                title: 'Fed Funds Market',
                icon: '🎯',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'What is the Federal Funds Rate?',
                        options: [
                            'The rate the Fed charges taxpayers',
                            'The overnight interbank lending rate for reserves',
                            'The mortgage rate',
                            'The Treasury bond yield'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fed Funds Rate is the interest rate banks charge each other for overnight loans of reserves. The Fed targets this rate as its main policy tool.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The Fed controls the Fed Funds Rate by:',
                        options: [
                            'Directly setting it by law',
                            'Adjusting the supply of reserves through open market operations',
                            'Asking banks nicely',
                            'Setting bank profits'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fed targets the rate by managing reserve supply. More reserves → lower Fed Funds Rate. Fewer reserves → higher rate.'
                    },
                    {
                        type: 'sort',
                        question: 'Order these rates from typically lowest to highest:',
                        items: ['Interest on Reserves (IOR)', 'Fed Funds Rate', 'Discount Rate', 'Prime Rate'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_4_7',
                title: 'Conventional Tools',
                icon: '🔧',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Open Market Operations (OMO) refers to:',
                        options: [
                            'Opening new markets',
                            'Fed buying/selling government securities',
                            'Bank lending to public',
                            'Stock market trading'
                        ],
                        correctIndex: 1,
                        explanation: 'OMO is the Fed\'s primary tool: buying bonds injects reserves (expansionary), selling bonds drains reserves (contractionary).'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The Discount Rate is:',
                        options: [
                            'The rate banks charge customers',
                            'The rate the Fed charges banks for borrowing at the discount window',
                            'The inflation rate',
                            'The Treasury bill rate'
                        ],
                        correctIndex: 1,
                        explanation: 'The Discount Rate is the Fed\'s "lender of last resort" rate. It\'s typically above the Fed Funds Rate to discourage overuse.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Reserve requirements as a policy tool are:',
                        options: [
                            'The most frequently used tool',
                            'Rarely changed and now effectively zero in the US',
                            'Set by Congress',
                            'Different for each bank'
                        ],
                        correctIndex: 1,
                        explanation: 'The Fed reduced reserve requirements to 0% in March 2020. They\'re rarely used as a policy tool due to their disruptive effects on bank operations.'
                    }
                ]
            },
            {
                id: 'lesson_4_8',
                title: 'Unconventional Tools (QE)',
                icon: '🚀',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Quantitative Easing (QE) involves:',
                        options: [
                            'Raising interest rates',
                            'Large-scale asset purchases when rates are near zero',
                            'Reducing the money supply',
                            'Increasing reserve requirements'
                        ],
                        correctIndex: 1,
                        explanation: 'QE is used when rates hit the zero lower bound. The Fed buys long-term bonds and MBS to lower long-term rates and inject liquidity.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Quantitative Tightening (QT) means:',
                        options: [
                            'Buying more bonds',
                            'Letting bonds mature without reinvesting or selling them',
                            'Printing more money',
                            'Lowering interest rates'
                        ],
                        correctIndex: 1,
                        explanation: 'QT shrinks the Fed\'s balance sheet by not reinvesting maturing securities, draining reserves from the system. It\'s the reverse of QE.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Why did REPO rates spike in September 2019, alarming markets?',
                        options: [
                            'Banks had too much cash',
                            'Reserve scarcity caused overnight funding stress',
                            'The economy was too strong',
                            'Inflation was too low'
                        ],
                        correctIndex: 1,
                        explanation: 'The 2019 repo spike showed reserves had become scarce after QT. The Fed had to inject emergency liquidity, revealing the "ample reserves" floor system limits.'
                    },
                    {
                        type: 'sort',
                        question: 'Order Fed actions from most expansionary to most contractionary:',
                        items: ['Quantitative Easing (QE)', 'Rate cuts', 'Rate hikes', 'Quantitative Tightening (QT)'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            // 第16章 货币政策战略与战术
            {
                id: 'lesson_4_9',
                title: 'Policy Goals',
                icon: '🎯',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Fed\'s inflation target is:',
                        options: [
                            '0%',
                            '2% (average over time)',
                            '5%',
                            'No specific target'
                        ],
                        correctIndex: 1,
                        explanation: 'Since 2012, the Fed has explicitly targeted 2% inflation (PCE). In 2020, it adopted "average inflation targeting" allowing temporary overshoots.'
                    },
                    {
                        type: 'multiple_choice',
                        question: '"Maximum employment" in the Fed\'s mandate means:',
                        options: [
                            '0% unemployment',
                            'The lowest unemployment sustainable without causing inflation',
                            '5% unemployment exactly',
                            'Everyone working full-time'
                        ],
                        correctIndex: 1,
                        explanation: 'Maximum employment is the highest employment level that doesn\'t trigger accelerating inflation. The Fed considers it a "broad-based and inclusive goal."'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The argument FOR price stability as the primary goal is:',
                        options: [
                            'Inflation helps workers',
                            'Low, stable inflation provides a foundation for sustainable growth',
                            'Central banks can\'t affect inflation',
                            'Employment is more important'
                        ],
                        correctIndex: 1,
                        explanation: 'Price stability anchors expectations, reduces uncertainty, and creates conditions for sustainable employment and growth. It\'s the foundation for other goals.'
                    }
                ]
            },
            {
                id: 'lesson_4_10',
                title: 'Inflation Targeting',
                icon: '🎯',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'Inflation targeting as a monetary policy strategy involves:',
                        options: [
                            'Keeping inflation exactly at 0%',
                            'Publicly announcing an inflation target and adjusting policy to achieve it',
                            'Targeting money supply growth',
                            'Targeting exchange rates'
                        ],
                        correctIndex: 1,
                        explanation: 'Inflation targeting means setting a clear numerical target (e.g., 2%), communicating it, and adjusting policy to hit that target. Most major central banks use this framework.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The shift from monetary targeting to interest rate targeting occurred because:',
                        options: [
                            'Interest rates are easier to measure',
                            'The relationship between money supply and inflation became unstable',
                            'Congress mandated it',
                            'Banks requested it'
                        ],
                        correctIndex: 1,
                        explanation: 'Financial innovation made money velocity unstable, breaking the link between money supply and inflation. Interest rate targeting proved more effective.'
                    },
                    {
                        type: 'sort',
                        question: 'Order the evolution of Fed monetary policy strategy:',
                        items: ['Gold standard era', 'Money supply targeting (1970s-80s)', 'Interest rate targeting', 'Inflation targeting with forward guidance'],
                        correctOrder: [0, 1, 2, 3]
                    }
                ]
            },
            {
                id: 'lesson_4_11',
                title: 'Asset Bubbles',
                icon: '🫧',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The debate over whether central banks should target asset prices centers on:',
                        options: [
                            'Asset prices are easy to predict',
                            'Difficulty identifying bubbles vs. fundamentals in real-time',
                            'Central banks always know the right price',
                            'Asset prices don\'t affect the economy'
                        ],
                        correctIndex: 1,
                        explanation: 'The challenge: How do you know it\'s a bubble until it bursts? Greenspan argued we can\'t identify bubbles; post-2008 view is we should "lean against the wind."'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'The 2008 financial crisis taught central banks that:',
                        options: [
                            'Asset bubbles don\'t matter',
                            'Financial stability should be part of the policy framework',
                            'Only inflation matters',
                            'Regulation is unnecessary'
                        ],
                        correctIndex: 1,
                        explanation: '2008 showed that financial instability can devastate the real economy even with low inflation. Macroprudential policy and financial stability are now key concerns.'
                    },
                    {
                        type: 'multiple_choice',
                        question: '"Leaning against the wind" in monetary policy means:',
                        options: [
                            'Ignoring asset prices',
                            'Raising rates somewhat to cool potentially dangerous asset price increases',
                            'Always keeping rates low',
                            'Targeting exchange rates'
                        ],
                        correctIndex: 1,
                        explanation: 'Leaning against the wind = modestly tightening policy when asset prices rise too fast, even if inflation is low. It\'s a preventive approach to bubbles.'
                    }
                ]
            },
            {
                id: 'lesson_4_12',
                title: 'Taylor Rule',
                icon: '📏',
                questions: [
                    {
                        type: 'multiple_choice',
                        question: 'The Taylor Rule suggests the Fed should set rates based on:',
                        options: [
                            'Stock market performance',
                            'Inflation gap and output gap',
                            'Bank profits',
                            'Presidential requests'
                        ],
                        correctIndex: 1,
                        explanation: 'Taylor Rule: i = r* + π + 0.5(π - π*) + 0.5(y - y*). Rates respond to inflation above/below target and output above/below potential.'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'If inflation is 4% (target 2%) and output is at potential, the Taylor Rule suggests:',
                        options: [
                            'Cut rates',
                            'Raise rates above neutral',
                            'Keep rates unchanged',
                            'Start QE'
                        ],
                        correctIndex: 1,
                        explanation: 'With inflation 2% above target, the rule says raise rates by 1.5× the gap (2% × 0.5 = 1% above neutral for inflation, plus the inflation rate itself).'
                    },
                    {
                        type: 'multiple_choice',
                        question: 'Stagflation (high inflation + recession) creates a dilemma because:',
                        options: [
                            'It never happens',
                            'Fighting inflation (raise rates) worsens unemployment; fighting unemployment (cut rates) worsens inflation',
                            'The Fed has too many tools',
                            'Both problems solve themselves'
                        ],
                        correctIndex: 1,
                        explanation: 'Stagflation forces a painful choice: Volcker chose to crush inflation first (accepting recession). The Taylor Rule struggles when both gaps have opposite signs.'
                    },
                    {
                        type: 'sort',
                        question: 'Order Fed responses from most dovish to most hawkish:',
                        items: ['QE + zero rates', 'Rate cuts', 'Hold rates steady', 'Rate hikes + QT'],
                        correctOrder: [0, 1, 2, 3]
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
