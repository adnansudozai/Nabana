import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Image, FlatList } from 'react-native';
import { Header, ResponsiveText, Container, iconPath, AppTheme } from '../../../components/index';
import { wp, hp } from '../../../FontResponsiveness/FontResponsiveness';
import { ScrollView } from 'react-native-virtualized-view';
import { connect } from "react-redux";

const Home = (props) => {
    //     const popularcourses=[




    //         { 
    //             id: '1',
    //         image: iconPath.blockchainbaner
    //     },
    //     { 
    //         id: '2',
    //     image: iconPath.walletbaner
    // },
    // { 
    //     id: '3',
    // image: iconPath.Bitcoinbaner
    // },
    //     ]
    //     const recentlyadded=[
    //         { 
    //             id: '1',
    //         image: iconPath.introbitcoin
    //     },
    //     { 
    //         id: '2',
    //     image: iconPath.blockchaintech
    // },


    //     ]

    const recentlyadded = [
        {
            id: 1,
            homebaner: iconPath.introbitcoin,
            title: 'Cryptocurrency',
            name: 'Introduction to Cryptocurrency',
            image: iconPath.btcintro,
            // blankimage:iconPath.Blankcontent,
            content: [
                {

                    heading: 'Cryptocurrency',
                    content: 'A cryptocurrency is a form of digital currency that is decentralized and secured through the implementation of cryptography and decentralization.',
                    blankimage: iconPath.Cryptocurrency,
                }
                ,
                {

                    heading: 'Bitcoin',
                    content: 'The biggest and most popular cryptocurrency. ',
                    blankimage: iconPath.bitcoin,

                },

                {

                    heading: 'Blockchain Technology',
                    content: 'The technology utilized by cryptocurrencies to function. It functions like a collective ledger of transactions maintained by a decentralized network of computers.',
                    lotijason: require('../../../assets/Lotifiles/blockchain.json')
                },
                {

                    heading: 'Mining/Staking',
                    content: 'In essence, to maintain the integrity of the blockchain, it is secured by a network of computers. As a reward, the computers are awarded a certain amount of cryptocurrency. This process is called mining/staking (depending on the consensus mechanism used by the blockchain).',
                    lotijason: require('../../../assets/Lotifiles/crypto-mining.json')

                }
                ,
                {

                    heading: 'Types of Coins Based on Consensus Mechanism:',
                    pointHeading: 'Proof-of-work',
                    content: 'In this system, the miners compete against each other by solving complex mathematical problems to update the blockchain. The successful miner would then be awarded with coins.',
                    blankimage: iconPath.proofofwork,

                }

                ,
                {

                    heading: 'Types of Coins Based on Consensus Mechanism:',
                    pointHeading: 'Proof-of-sake',
                    content: 'in this system, the validators stake coins within the network to secure the blockchain. The more coins they stake, the higher their chance of being picked as the validator to update the blockchain and thus get awarded with coins.',
                    blankimage: iconPath.profofstake,


                }
                ,
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Stablecoins',
                    content: 'are centralized cryptocurrencies pegged to a real-world currency by assets or algorithms.',
                    blankimage: iconPath.stablecoin,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Memecoins',
                    content: 'are coins or tokens developed as jokes and inspired by internet memes.',
                    blankimage: iconPath.dogecoin,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Defi (Decentralized Finance)',
                    content: 'are coins or tokens meant to function as a currency that can be traded and leveraged.',
                    blankimage: iconPath.defidecentralized,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'DAO (Decentralized Autonomous Organization)',
                    content: 'are coins or tokens that function as shares in a traditional company where holders can cast votes on how the blockchain is run.',
                    blankimage: iconPath.daodecentralized,

                },
                {
                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'Moon',
                    content: 'Refers to the event when the price of a coin rapidly rises.',
                    blankimage: iconPath.moon,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'DYOR',
                    content: 'Abbreviation for “do your own research”',
                    blankimage: iconPath.Dyor,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'ATH',
                    content: 'Abbreviation for “all-time-high.” It is a term used to describe an asset’s price.',
                    blankimage: iconPath.Ath,


                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'ATL',
                    content: 'Abbreviation for “all-time-low.” It is also a term used to describe an asset’s price.',
                    blankimage: iconPath.Atl,


                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'FOMO',
                    content: 'Abbreviation for “fear of missing out.” It usually refers to the act of buying an asset because of the fear of missing out on it.',
                    blankimage: iconPath.fomo,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'HODL',
                    content: 'Abbreviation for “Hold on to dear life.” It is the act of not selling an asset despite unfavorable market conditions.',
                    blankimage: iconPath.Hodl,


                }





            ],

            Quiz: [
                {
                    id: 1,
                    question: 'This is an example of a cryptocurrency.',
                    options: [
                        {
                            option: 'Bitcoin',
                            iscorrect: true
                        },
                        {
                            option: 'Paypal',
                            iscorrect: false
                        },
                        {
                            option: 'Game tokens',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 2,
                    question: 'What do you call the underlying technology that makes cryptocurrency possible?',

                    options: [
                        {
                            option: 'Blockchain Technology',
                            iscorrect: true
                        },
                        {
                            option: 'Consensus Mechanism',
                            iscorrect: false
                        },
                        {
                            option: 'Distributive data chain',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 3,
                    question: 'This is a form of digital currency that is decentralized and does not rely on any single entity to function.',

                    options: [
                        {
                            option: 'Cryptocurrency',
                            iscorrect: true
                        },
                        {
                            option: 'Distributive ledger currency',
                            iscorrect: false
                        },
                        {
                            option: 'Decentralized money',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 4,
                    question: 'A set amount of Bitcoin is awarded to the entity that successfully updates its blockchain. What do you call this process?',

                    options: [
                        {
                            option: 'Mining',
                            iscorrect: true
                        },
                        {
                            option: 'Excavation',
                            iscorrect: false
                        },
                        {
                            option: 'Scalping',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 5,
                    question: 'What should you always do before choosing a cryptocurrency to invest in?',
                    options: [
                        {
                            option: 'Do your own research (DYOR)',
                            iscorrect: true
                        },
                        {
                            option: 'None',
                            iscorrect: false
                        },
                        {
                            option: 'Make sure it is at its all-time-high (ATH) before buying',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 6,
                    question: 'What definition best describes a meme coin?',
                    options: [
                        {
                            option: 'A coin made to make memes',
                            iscorrect: false
                        },
                        {
                            option: 'A coin inspired by memes and internet jokes',
                            iscorrect: true
                        },
                        {
                            option: 'A coin awarded to extraordinary memes',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 7,
                    question: 'What do you call the type of coins that are pegged to a real-world asset (ex. USD)?',
                    options: [
                        {
                            option: 'Proof-of-work Coins',
                            iscorrect: false
                        },
                        {
                            option: 'Proof-of-stake Coins',
                            iscorrect: false
                        },
                        {
                            option: 'Stablecoins',
                            iscorrect: true
                        },

                    ],
                },


            ]


        },
        {
            id: 2,
            homebaner: iconPath.blockchaintech,
            name: 'Introduction to Blockchain',
            title: 'Cryptocurrency',
            image: iconPath.blockchainlearn,
            // blankimage:iconPath.Blankcontent,
            content: [
                {

                    heading: 'Blockchain',
                    content: 'A decentralized distributed ledger that gets updated every time a transaction happens within the system. Miners or validators secure it and as an incentive, they are awarded coins for successfully updating the blockchain.',
                    lotijason: require('../../../assets/Lotifiles/introblockchain.json')

                }
                ,
                {

                    heading: 'Double Spending',
                    content: 'One of the main issues with digital currency. Double spending happens when a coin gets spent twice and thus duplicated. In cryptocurrencies, this problem is solved through the blockchain since every transaction that happens is recorded in it.',
                    blankimage: iconPath.Doublespending,

                },

                {

                    heading: 'Consensus Mechanisms',
                    content: 'To secure the blockchain, only selected entities can update it. The way these entities are selected is called the consensus mechanism. As of this writing, two of the most commonly used mechanisms are:',
                    blankimage: iconPath.consensus,



                },

                {
                    heading: 'Proof-of-work',
                    content: 'To be chosen as the entity to update the blockchain in a PoW system, the computer first needs to solve complex equations (mine) and compete with the other miners in the network. Some examples of coins that use this mechanism are Bitcoin and Ethereum.'
                    , blankimage: iconPath.blockchainproofofwork,

                },

                {

                    heading: 'Proof-of-sake',
                    content: 'To be chosen as the entity to update the blockchain in a PoS system, the computer first needs to stake the system’s native coin within the network. The more coins the validator staked, the more likely it is to be chosen to update the blockchain. Some examples of coins that use this mechanism are Cardano and Avalanche.'
                    , blankimage: iconPath.blockchainstacke,

                },
                {
                    heading: 'Mining',
                    content: 'The act of securing the blockchain by competing with other miners to update the ledger.',
                    lotijason: require('../../../assets/Lotifiles/introblockcrypto-mining.json')


                }
                ,
                {

                    heading: 'Staking',
                    content: 'The act of securing the blockchain by staking coins within the network to get a chance to update the ledger.'

                    , blankimage: iconPath.stacking,


                }
                ,
                {

                    heading: 'Validators',
                    content: 'Validators are individuals who have staked coins in a PoS blockchain and thus validate transactions.'
                    , blankimage: iconPath.validators,

                },

                {

                    heading: 'Hard Cap',
                    content: 'The hard cap is the maximum number of tokens that can be sold during an ICO crowdfunding.'
                    , blankimage: iconPath.hardcap,


                },
                {

                    heading: 'Coin Burning',
                    content: 'In cryptocurrencies with no hard cap, the blockchain usually removes coins from circulation and thus maintains the coin’s monetary value.'
                    , blankimage: iconPath.burning,

                }

            ],
            Quiz: [
                {
                    id: 1,
                    question: 'Cryptocurrencies rely on blockchain technology to work. Which of the following uses it?',
                    options: [
                        {
                            option: 'Bitcoin',
                            iscorrect: false
                        },
                        {
                            option: 'Ethereum',
                            iscorrect: false
                        },
                        {
                            option: 'All of the Above',
                            iscorrect: true
                        },

                    ],

                },
                {
                    id: 2,
                    question: 'Which of the following is NOT a crypto consensus mechanism?',

                    options: [
                        {
                            option: 'Proof-of-work',
                            iscorrect: false
                        },
                        {
                            option: 'Proof-of-distribution',
                            iscorrect: true
                        },
                        {
                            option: 'Proof-of-stake',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 3,
                    question: 'Bitcoin uses a proof-of-work consensus mechanism. ',

                    options: [
                        {
                            option: 'True',
                            iscorrect: true
                        },
                        {
                            option: 'False',
                            iscorrect: false
                        }

                    ],
                },
                {
                    id: 4,
                    question: 'There are only 21 million Bitcoins in existence. Besides buying, how can you obtain one?',

                    options: [
                        {
                            option: 'Mining',
                            iscorrect: true
                        },
                        {
                            option: 'Duplicate an existing one',
                            iscorrect: false
                        },
                        {
                            option: 'Code one',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 5,
                    question: 'What do you call the computers that secure Bitcoin’s blockchain?',
                    options: [
                        {
                            option: 'Ledgers',
                            iscorrect: false
                        },
                        {
                            option: 'Miners',
                            iscorrect: true
                        },
                        {
                            option: 'Sentinels',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 6,
                    question: 'In a proof-of-work coin you can earn crypto by mining. However, in a proof-of-stake coin, you can earn by  ____________',
                    options: [
                        {
                            option: 'Staking',
                            iscorrect: true
                        },
                        {
                            option: 'Mining',
                            iscorrect: false
                        },
                        {
                            option: 'Accounting',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 7,
                    question: 'Which of the following uses a Proof-of-work consensus mechanism?',
                    options: [
                        {
                            option: 'Cardano',
                            iscorrect: false
                        },
                        {
                            option: 'Avalanche',
                            iscorrect: false
                        },
                        {
                            option: 'Bitcoin',
                            iscorrect: true
                        },

                    ],
                },


            ]





        },

    ]

    const popularcourses = [
        {
            id: 1,
            homebaner: iconPath.Bitcoinbaner,
            name: 'Introduction to Cryptocurrency',
            image: iconPath.btcintro,
            title: 'Cryptocurrency',
            // blankimage:iconPath.Blankcontent,
            content: [
                {

                    heading: 'Cryptocurrency',
                    content: 'A cryptocurrency is a form of digital currency that is decentralized and secured through the implementation of cryptography and decentralization.',
                    blankimage: iconPath.Cryptocurrency,
                }
                ,
                {

                    heading: 'Bitcoin',
                    content: 'The biggest and most popular cryptocurrency. ',
                    blankimage: iconPath.bitcoin,

                },

                {

                    heading: 'Blockchain Technology',
                    content: 'The technology utilized by cryptocurrencies to function. It functions like a collective ledger of transactions maintained by a decentralized network of computers.',
                    lotijason: require('../../../assets/Lotifiles/blockchain.json')
                },
                {

                    heading: 'Mining/Staking',
                    content: 'In essence, to maintain the integrity of the blockchain, it is secured by a network of computers. As a reward, the computers are awarded a certain amount of cryptocurrency. This process is called mining/staking (depending on the consensus mechanism used by the blockchain).',
                    lotijason: require('../../../assets/Lotifiles/crypto-mining.json')

                }
                ,
                {

                    heading: 'Types of Coins Based on Consensus Mechanism:',
                    pointHeading: 'Proof-of-work',
                    content: 'In this system, the miners compete against each other by solving complex mathematical problems to update the blockchain. The successful miner would then be awarded with coins.',
                    blankimage: iconPath.proofofwork,

                }

                ,
                {

                    heading: 'Types of Coins Based on Consensus Mechanism:',
                    pointHeading: 'Proof-of-sake',
                    content: 'in this system, the validators stake coins within the network to secure the blockchain. The more coins they stake, the higher their chance of being picked as the validator to update the blockchain and thus get awarded with coins.',
                    blankimage: iconPath.profofstake,


                }
                ,
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Stablecoins',
                    content: 'are centralized cryptocurrencies pegged to a real-world currency by assets or algorithms.',
                    blankimage: iconPath.stablecoin,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Memecoins',
                    content: 'are coins or tokens developed as jokes and inspired by internet memes.',
                    blankimage: iconPath.dogecoin,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'Defi (Decentralized Finance)',
                    content: 'are coins or tokens meant to function as a currency that can be traded and leveraged.',
                    blankimage: iconPath.defidecentralized,

                },
                {

                    heading: 'Types of Coins Based on Purpose:',
                    pointHeading: 'DAO (Decentralized Autonomous Organization)',
                    content: 'are coins or tokens that function as shares in a traditional company where holders can cast votes on how the blockchain is run.',
                    blankimage: iconPath.daodecentralized,

                },
                {
                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'Moon',
                    content: 'Refers to the event when the price of a coin rapidly rises.',
                    blankimage: iconPath.moon,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'DYOR',
                    content: 'Abbreviation for “do your own research”',
                    blankimage: iconPath.Dyor,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'ATH',
                    content: 'Abbreviation for “all-time-high.” It is a term used to describe an asset’s price.',
                    blankimage: iconPath.Ath,


                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'ATL',
                    content: 'Abbreviation for “all-time-low.” It is also a term used to describe an asset’s price.',
                    blankimage: iconPath.Atl,


                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'FOMO',
                    content: 'Abbreviation for “fear of missing out.” It usually refers to the act of buying an asset because of the fear of missing out on it.',
                    blankimage: iconPath.fomo,

                },
                {

                    heading: 'Common Slangs in Crypto',
                    pointHeading: 'HODL',
                    content: 'Abbreviation for “Hold on to dear life.” It is the act of not selling an asset despite unfavorable market conditions.',
                    blankimage: iconPath.Hodl,


                }





            ],

            Quiz: [
                {
                    id: 1,
                    question: 'This is an example of a cryptocurrency.',
                    options: [
                        {
                            option: 'Bitcoin',
                            iscorrect: true
                        },
                        {
                            option: 'Paypal',
                            iscorrect: false
                        },
                        {
                            option: 'Game tokens',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 2,
                    question: 'What do you call the underlying technology that makes cryptocurrency possible?',

                    options: [
                        {
                            option: 'Blockchain Technology',
                            iscorrect: true
                        },
                        {
                            option: 'Consensus Mechanism',
                            iscorrect: false
                        },
                        {
                            option: 'Distributive data chain',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 3,
                    question: 'This is a form of digital currency that is decentralized and does not rely on any single entity to function.',

                    options: [
                        {
                            option: 'Cryptocurrency',
                            iscorrect: true
                        },
                        {
                            option: 'Distributive ledger currency',
                            iscorrect: false
                        },
                        {
                            option: 'Decentralized money',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 4,
                    question: 'A set amount of Bitcoin is awarded to the entity that successfully updates its blockchain. What do you call this process?',

                    options: [
                        {
                            option: 'Mining',
                            iscorrect: true
                        },
                        {
                            option: 'Excavation',
                            iscorrect: false
                        },
                        {
                            option: 'Scalping',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 5,
                    question: 'What should you always do before choosing a cryptocurrency to invest in?',
                    options: [
                        {
                            option: 'Do your own research (DYOR)',
                            iscorrect: true
                        },
                        {
                            option: 'None',
                            iscorrect: false
                        },
                        {
                            option: 'Make sure it is at its all-time-high (ATH) before buying',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 6,
                    question: 'What definition best describes a meme coin?',
                    options: [
                        {
                            option: 'A coin made to make memes',
                            iscorrect: false
                        },
                        {
                            option: 'A coin inspired by memes and internet jokes',
                            iscorrect: true
                        },
                        {
                            option: 'A coin awarded to extraordinary memes',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 7,
                    question: 'What do you call the type of coins that are pegged to a real-world asset (ex. USD)?',
                    options: [
                        {
                            option: 'Proof-of-work Coins',
                            iscorrect: false
                        },
                        {
                            option: 'Proof-of-stake Coins',
                            iscorrect: false
                        },
                        {
                            option: 'Stablecoins',
                            iscorrect: true
                        },

                    ],
                },


            ]


        },
        {
            id: 2,
            homebaner: iconPath.blockchainbaner,
            name: 'Introduction to Blockchain',
            title: 'Cryptocurrency',
            image: iconPath.blockchainlearn,
            // blankimage:iconPath.Blankcontent,
            content: [
                {

                    heading: 'Blockchain',
                    content: 'A decentralized distributed ledger that gets updated every time a transaction happens within the system. Miners or validators secure it and as an incentive, they are awarded coins for successfully updating the blockchain.',
                    lotijason: require('../../../assets/Lotifiles/introblockchain.json')

                }
                ,
                {

                    heading: 'Double Spending',
                    content: 'One of the main issues with digital currency. Double spending happens when a coin gets spent twice and thus duplicated. In cryptocurrencies, this problem is solved through the blockchain since every transaction that happens is recorded in it.',
                    blankimage: iconPath.Doublespending,

                },

                {

                    heading: 'Consensus Mechanisms',
                    content: 'To secure the blockchain, only selected entities can update it. The way these entities are selected is called the consensus mechanism. As of this writing, two of the most commonly used mechanisms are:',
                    blankimage: iconPath.consensus,



                },

                {
                    heading: 'Proof-of-work',
                    content: 'To be chosen as the entity to update the blockchain in a PoW system, the computer first needs to solve complex equations (mine) and compete with the other miners in the network. Some examples of coins that use this mechanism are Bitcoin and Ethereum.'
                    , blankimage: iconPath.blockchainproofofwork,

                },

                {

                    heading: 'Proof-of-sake',
                    content: 'To be chosen as the entity to update the blockchain in a PoS system, the computer first needs to stake the system’s native coin within the network. The more coins the validator staked, the more likely it is to be chosen to update the blockchain. Some examples of coins that use this mechanism are Cardano and Avalanche.'
                    , blankimage: iconPath.blockchainstacke,

                },
                {
                    heading: 'Mining',
                    content: 'The act of securing the blockchain by competing with other miners to update the ledger.',
                    lotijason: require('../../../assets/Lotifiles/introblockcrypto-mining.json')


                }
                ,
                {

                    heading: 'Staking',
                    content: 'The act of securing the blockchain by staking coins within the network to get a chance to update the ledger.'

                    , blankimage: iconPath.stacking,


                }
                ,
                {

                    heading: 'Validators',
                    content: 'Validators are individuals who have staked coins in a PoS blockchain and thus validate transactions.'
                    , blankimage: iconPath.validators,

                },

                {

                    heading: 'Hard Cap',
                    content: 'The hard cap is the maximum number of tokens that can be sold during an ICO crowdfunding.'
                    , blankimage: iconPath.hardcap,


                },
                {

                    heading: 'Coin Burning',
                    content: 'In cryptocurrencies with no hard cap, the blockchain usually removes coins from circulation and thus maintains the coin’s monetary value.'
                    , blankimage: iconPath.burning,

                }

            ],
            Quiz: [
                {
                    id: 1,
                    question: 'Cryptocurrencies rely on blockchain technology to work. Which of the following uses it?',
                    options: [
                        {
                            option: 'Bitcoin',
                            iscorrect: false
                        },
                        {
                            option: 'Ethereum',
                            iscorrect: false
                        },
                        {
                            option: 'All of the Above',
                            iscorrect: true
                        },

                    ],

                },
                {
                    id: 2,
                    question: 'Which of the following is NOT a crypto consensus mechanism?',

                    options: [
                        {
                            option: 'Proof-of-work',
                            iscorrect: false
                        },
                        {
                            option: 'Proof-of-distribution',
                            iscorrect: true
                        },
                        {
                            option: 'Proof-of-stake',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 3,
                    question: 'Bitcoin uses a proof-of-work consensus mechanism. ',

                    options: [
                        {
                            option: 'True',
                            iscorrect: true
                        },
                        {
                            option: 'False',
                            iscorrect: false
                        }

                    ],
                },
                {
                    id: 4,
                    question: 'There are only 21 million Bitcoins in existence. Besides buying, how can you obtain one?',

                    options: [
                        {
                            option: 'Mining',
                            iscorrect: true
                        },
                        {
                            option: 'Duplicate an existing one',
                            iscorrect: false
                        },
                        {
                            option: 'Code one',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 5,
                    question: 'What do you call the computers that secure Bitcoin’s blockchain?',
                    options: [
                        {
                            option: 'Ledgers',
                            iscorrect: false
                        },
                        {
                            option: 'Miners',
                            iscorrect: true
                        },
                        {
                            option: 'Sentinels',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 6,
                    question: 'In a proof-of-work coin you can earn crypto by mining. However, in a proof-of-stake coin, you can earn by  ____________',
                    options: [
                        {
                            option: 'Staking',
                            iscorrect: true
                        },
                        {
                            option: 'Mining',
                            iscorrect: false
                        },
                        {
                            option: 'Accounting',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 7,
                    question: 'Which of the following uses a Proof-of-work consensus mechanism?',
                    options: [
                        {
                            option: 'Cardano',
                            iscorrect: false
                        },
                        {
                            option: 'Avalanche',
                            iscorrect: false
                        },
                        {
                            option: 'Bitcoin',
                            iscorrect: true
                        },

                    ],
                },


            ]





        },

        {
            id: 3,
            name: 'Introduction to Crypto wallet',
            homebaner: iconPath.walletbaner,
            title: 'Cryptocurrency',
            image: iconPath.cryptowallet,
            // blankimage:iconPath.Blankcontent,
            content: [
                {

                    heading: 'Crypto Wallet',
                    content: 'The safest way to hold cryptocurrencies is by using crypto wallets or digital wallets. These are decentralized programs that cannot be opened by anyone except the person who knows its seed phrase.',
                    blankimage: iconPath.cryptwallet1,

                }
                ,
                {

                    heading: 'Seed Phrase',
                    content: 'A series of words (usually 12 or 24)created during the wallet’s creation used to recover a wallet in case the owner forgets their wallet password.',
                    blankimage: iconPath.seedphrase,
                },

                {

                    heading: 'Different Types of Crypto/Digital Wallets:',
                    pointHeading: 'Hot Wallet',
                    content: 'A crypto wallet connected to the internet. The user can store, send and receive coins with it.',
                    blankimage: iconPath.hotwallet,


                },
                {

                    heading: 'Different Types of Crypto/Digital Wallets:',
                    pointHeading: 'Cold Wallet / Hardware Wallet',
                    content: 'A crypto wallet not connected to the internet and thus lessens the risk of it being compromised.',
                    blankimage: iconPath.coldwallet,




                },
                {

                    heading: 'Different Types of Crypto/Digital Wallets:',
                    pointHeading: 'Custodial Wallet',
                    content: 'This is a centralized crypto wallet. Unlike the decentralized ones, this is not secured by a seed phrase but is backed and managed by a company. Due to regulation, this type of wallet requires the users to submit KYC.'
                    , blankimage: iconPath.custodil,


                },
                {

                    heading: 'Different Types of Crypto/Digital Wallets:',
                    pointHeading: 'KYC',
                    content: 'An abbreviation for “know your customer.” This refers to information that allows the company to verify the identity of their customers, this includes name, birthdate, valid ID, etc.',
                    blankimage: iconPath.Kyc,


                },
                {

                    heading: 'Mining',
                    content: 'The act of securing the blockchain by competing with other miners to update the ledger.',
                    lotijason: require('../../../assets/Lotifiles/girl-working-on-data-research.json')

                }
                ,
                {

                    heading: 'Staking',
                    content: 'The act of securing the blockchain by staking coins within the network to get a chance to update the ledger.',
                    blankimage: iconPath.stakingwalet,


                }
                ,
                {

                    heading: 'Validators',
                    content: 'Validators are individuals who have staked coins in a PoS blockchain and thus validate transactions.',
                    blankimage: iconPath.validatorswallet,

                },

                {
                    heading: 'Hard Cap',
                    content: 'The total amount of coins that exist in a blockchain is called the hard cap. For example, there are only 21 million bitcoins available; there is no way of exceeding that number.',
                    blankimage: iconPath.hardcapwallet,


                },
                {

                    heading: 'Coin Burning',
                    content: 'In cryptocurrencies with no hard cap, the blockchain usually removes coins from circulation and thus maintains the coin’s monetary value.',
                    blankimage: iconPath.burningwalet,



                }

            ],


            Quiz: [
                {
                    id: 1,
                    question: 'For maximum security, where should you ideally store your cryptocurrencies?',
                    options: [
                        {
                            option: 'Digital Wallet or Crypto Wallet',
                            iscorrect: true
                        },
                        {
                            option: 'Bank',
                            iscorrect: false
                        },
                        {
                            option: 'Crypto exchanges',
                            iscorrect: false
                        },

                    ],

                },
                {
                    id: 2,
                    question: 'To receive crypto in your digital wallet, what do you need?',

                    options: [
                        {
                            option: 'Wallet address',
                            iscorrect: true
                        },
                        {
                            option: 'Seed Phrase',
                            iscorrect: false
                        },
                        {
                            option: 'Password',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 3,
                    question: 'A digital platform that allows users to interact with the blockchain and thus used to ‘store’ their cryptocurrencies.',

                    options: [
                        {
                            option: 'Crypto wallet or digital wallet',
                            iscorrect: true
                        },
                        {
                            option: 'Blockchain integrated software',
                            iscorrect: false
                        },
                        {
                            option: 'Ledger editor',
                            iscorrect: false
                        }

                    ],
                },
                {
                    id: 4,
                    question: 'Which of the following do you need to set up a digital wallet?',

                    options: [
                        {
                            option: 'Government-issued ID',
                            iscorrect: false
                        },
                        {
                            option: 'Unique username',
                            iscorrect: false
                        },
                        {
                            option: 'None of the above',
                            iscorrect: true
                        },

                    ],

                },
                {
                    id: 5,
                    question: 'This set of words helps secure your crypto wallet. Without this, wallet password recovery is impossible. What do you call this set of words?',
                    options: [
                        {
                            option: 'Catch Phrase',
                            iscorrect: false
                        },
                        {
                            option: 'Wallet Metadata',
                            iscorrect: false
                        },
                        {
                            option: 'Seed Phrase',
                            iscorrect: true
                        },

                    ],
                },
                {
                    id: 6,
                    question: 'Which of the following is true about digital wallets?',
                    options: [
                        {
                            option: 'A digital wallet can be recovered even without its seed phrase',
                            iscorrect: false
                        },
                        {
                            option: 'The wallet’s seed phrase can open the wallet regardless of who used it',
                            iscorrect: true
                        },
                        {
                            option: 'A digital wallet expires a year after it is created',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 7,
                    question: 'Which of the following is NOT a type of digital wallet?',
                    options: [
                        {
                            option: 'Cold wallet',
                            iscorrect: false
                        },
                        {
                            option: 'Hot wallet',
                            iscorrect: false
                        },
                        {
                            option: 'A leather wallet',
                            iscorrect: true
                        },

                    ],
                },
                {
                    id: 8,
                    question: 'This is a physical crypto wallet where users can securely keep their private keys.',
                    options: [
                        {
                            option: 'Hardware wallet',
                            iscorrect: true
                        },
                        {
                            option: 'Private key holder',
                            iscorrect: false
                        },
                        {
                            option: 'A piece of paper',
                            iscorrect: false
                        },

                    ],
                },
                {
                    id: 9,
                    question: 'A type of crypto wallet that is always connected to the internet and can be used to store, send, and receive tokens/coins.',
                    options: [
                        {
                            option: 'Cold wallet',
                            iscorrect: false
                        },
                        {
                            option: 'Hot wallet',
                            iscorrect: true
                        },
                        {
                            option: 'Centralized exchange',
                            iscorrect: false
                        },

                    ],
                },


            ]




        },

    ]

    const renderPopoulerCourse = ({ item, index }) => {
        return (
            <View style={styles.populermainview}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Description', { item: item, title: item.name, blankimage: item.blankimage, category: item.title })} style={{ borderWidth: 0, marginHorizontal: 10, borderColor: 'red' }}>
                    <Image source={item.homebaner} style={styles.populerimage} resizeMode='stretch' />
                </TouchableOpacity>

            </View>
        )
    }
    const renderRecentlycourse = ({ item, index }) => {
        return (
            <View style={styles.recentmainview}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Description', { item: item, title: item.name, blankimage: item.blankimage, category: item.title })} style={{ borderWidth: 0, borderColor: 'green', marginHorizontal: 10 }}>
                    <Image source={item.homebaner} style={styles.recentimageimage} resizeMode='contain' />
                </TouchableOpacity>

            </View>
        )
    }
    const ListFooterComponent = ({ item, index }) => {
        return (
            <View style={{ height: 20, }}>


            </View>
        )
    }
    return (
        <Container backgroundColor={AppTheme.tabBackGroundcolor} style={{ backgroundColor: AppTheme.background }}>
            <View style={styles.mainContainer}>
                <Header profileImage={"https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"}
                    navigation={props.navigation}

                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 30, paddingBottom: Platform.OS == 'ios' ? wp(20) : wp(30) }} style={styles.Fullcontainer}>
                <TouchableOpacity onPress={() =>{
                     try{
                        props.navigation.navigate('BottomTab', {
                            screen: 'Learnandearnstack',
                        })
                      } catch (e) {
                        console.log('Error')
                      }
                    } 
                    
                } style={styles.topBannerContainer}>
                    <Image source={iconPath.BannerImage} style={styles.topbannerImage} resizeMode='contain' />
                </TouchableOpacity>
                <View style={styles.txtview}>
                    <ResponsiveText
                        color={AppTheme.textColorWhite}
                        size="h3"
                    >
                        {'Popular Courses'}
                    </ResponsiveText>
                </View>

                <FlatList
                    data={popularcourses}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderPopoulerCourse}
                />
                <View style={styles.txtview}>
                    <ResponsiveText
                        color={AppTheme.textColorWhite}
                        size="h3"
                    >
                        {'Recently Added'}
                    </ResponsiveText>
                </View>
                <FlatList
                    data={recentlyadded}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderRecentlycourse}
                    ListFooterComponent={ListFooterComponent}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                />
            </ScrollView>

        </Container>
    )
}




const mapDispatchToProps = (dispatch) => {
    return {
        //   createPin: (data) => dispatch(createPin(data)),
    }
}
const mapStateToProps = (state) => {
    console.log('state===>>>', state)
    return {
        totalScore: state.userdataReducer.totalScore,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)



const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppTheme.background,

    },
    Fullcontainer: {
        backgroundColor: AppTheme.background,
        borderWidth: 0,
        borderColor: 'red',
        flex: 1


    },
    txtview: {
        borderWidth: 0,
        marginHorizontal: wp(6)
    },
    populermainview: { borderWidth: 0, marginTop: wp(5), alignItems: 'center', borderColor: 'red', marginLeft: wp(2) },
    recentmainview: { borderWidth: 0, borderColor: 'red', alignItems: 'center' },
    topBannerContainer: {
        borderColor: 'red',
        borderWidth: 0,
        alignItems: 'center',
        marginHorizontal: wp(2),
        justifyContent: 'center'
    },
    topbannerImage: {
        width: wp(90),
        height: wp(40),
        alignSelf: 'center',


    },
    populerimage: {
        width: wp(90),
        height: wp(50)
    },
    recentimageimage: {
        width: wp(100),
        height: wp(24),
        marginTop: wp(5),

    }
});
