 import { iconPath } from "./iconandImages"

 export const learnandearn=[

    {    id :1,
        name:'Cryptocurrency',
        banner:iconPath.Cryptobanner,
       Courses:[
        { id :1,
            name:'Introduction to Cryptocurrency',
            image:iconPath.btcintro,
            // blankimage:iconPath.Blankcontent,
            content:[
                {
               
                    heading:'Cryptocurrency',
                    content:'A cryptocurrency is a form of digital currency that is decentralized and secured through the implementation of cryptography and decentralization.',
                   blankimage:iconPath.Blankcontent,
             }
                ,
                {
             
                            heading:'Bitcoin',
                            content:'The biggest and most popular cryptocurrency. ',
                  },
               
                {
                   
                    heading:'Blockchain Technology',
                    content:'The technology utilized by cryptocurrencies to function. It functions like a collective ledger of transactions maintained by a decentralized network of computers.',
             },
            {
          
                    heading:'Mining/Staking',
                    content:'In essence, to maintain the integrity of the blockchain, it is secured by a network of computers. As a reward, the computers are awarded a certain amount of cryptocurrency. This process is called mining/staking (depending on the consensus mechanism used by the blockchain).',
            }
                ,
                {
                  
                    heading:'Types of Coins Based on Consensus Mechanism:',
                    pointHeading:'Proof-of-work',
                    content:'In this system, the miners compete against each other by solving complex mathematical problems to update the blockchain. The successful miner would then be awarded with coins.'
                }

,
                {
                
                    heading:'Types of Coins Based on Consensus Mechanism:',
                    pointHeading:'Proof-of-sake',
                    content:'in this system, the validators stake coins within the network to secure the blockchain. The more coins they stake, the higher their chance of being picked as the validator to update the blockchain and thus get awarded with coins.'
                 
                }
                ,
                {
                 
                    heading:'Types of Coins Based on Purpose:',
                    pointHeading:'Stablecoins',
                    content:'are centralized cryptocurrencies pegged to a real-world currency by assets or algorithms.'
             },
            {
              
                heading:'Types of Coins Based on Purpose:',
                pointHeading:'Memecoins',
                content:'are coins or tokens developed as jokes and inspired by internet memes.'
          },
        {
         
            heading:'Types of Coins Based on Purpose:',
            pointHeading:'Defi (Decentralized Finance)',
            content:'are coins or tokens meant to function as a currency that can be traded and leveraged.',
     },
    {
     
        heading:'Types of Coins Based on Purpose:',
        pointHeading:'DAO (Decentralized Autonomous Organization)',
        content:'are coins or tokens that function as shares in a traditional company where holders can cast votes on how the blockchain is run.',
 },
            {
                    heading:'Common Slangs in Crypto',
                    pointHeading:'Moon',
                    content:'Refers to the event when the price of a coin rapidly rises.',
                 }  ,
                {
                  
                        heading:'Common Slangs in Crypto',
                        pointHeading:'DYOR',
                        content:'Abbreviation for “do your own research”',
                    }   ,
                    {
                       
                            heading:'Common Slangs in Crypto',
                            pointHeading:'ATH',
                            content:'Abbreviation for “all-time-high.” It is a term used to describe an asset’s price.',
                            
                         }   ,
                        {
                           
                                heading:'Common Slangs in Crypto',
                                pointHeading:'ATL',
                                content:'Abbreviation for “all-time-low.” It is also a term used to describe an asset’s price.',
                                
                           }   ,
                            {
                                
                                    heading:'Common Slangs in Crypto',
                                    pointHeading:'FOMO',
                                    content:'Abbreviation for “fear of missing out.” It usually refers to the act of buying an asset because of the fear of missing out on it.',
        }   ,
                                {
                                    
                                        heading:'Common Slangs in Crypto',
                                        pointHeading:'HODL',
                                        content:'Abbreviation for “Hold on to dear life.” It is the act of not selling an asset despite unfavorable market conditions.',
                                        
                                     }      



                

            ],
       
            Quiz:[
                {
                id:1,
                question:'This is an example of a cryptocurrency.',
                options:[
                    {
                    option:'Bitcoin',
                    iscorrect:true
                   },
                   {
                    option:'Paypal',
                    iscorrect:false
                   },
                   {
                    option:'Game tokens',
                    iscorrect:false
                   },
               
                  ],
                
                },
                {
                    id:2,
                    question:'What do you call the underlying technology that makes cryptocurrency possible?',
                   
                    options:[
                        {
                        option:'Blockchain Technology',
                        iscorrect:true
                       },
                       {
                        option:'Consensus Mechanism',
                        iscorrect:false
                       },
                       {
                        option:'Distributive data chain',
                        iscorrect:false
                       },
                   
                      ],
                    },
                {
                    id:3,
                    question:'This is a form of digital currency that is decentralized and does not rely on any single entity to function.',
                   
                    options:[
                        {
                        option:'Cryptocurrency',
                        iscorrect:true
                       },
                       {
                        option:'Distributive ledger currency',
                        iscorrect:false
                       },
                       {
                        option:'Decentralized money',
                        iscorrect:false
                       },
                   
                      ],
                    },
                {
                    id:4,
                    question:'A set amount of Bitcoin is awarded to the entity that successfully updates its blockchain. What do you call this process?',
                 
                    options:[
                        {
                        option:'Mining',
                        iscorrect:true
                       },
                       {
                        option:'Excavation',
                        iscorrect:false
                       },
                       {
                        option:'Scalping',
                        iscorrect:false
                       },
                   
                      ],
                   
                    },
                {
                    id:5,
                    question:'What should you always do before choosing a cryptocurrency to invest in?',
                    options:[
                        {
                        option:'Do your own research (DYOR)',
                        iscorrect:true
                       },
                       {
                        option:'None',
                        iscorrect:false
                       },
                       {
                        option:'Make sure it is at its all-time-high (ATH) before buying',
                        iscorrect:false
                       },
                   
                      ],
                    },
                {
                    id:6,
                    question:'What definition best describes a meme coin?',
                    options:[
                        {
                        option:'A coin made to make memes',
                        iscorrect:false
                       },
                       {
                        option:'A coin inspired by memes and internet jokes',
                        iscorrect:true
                       },
                       {
                        option:'A coin awarded to extraordinary memes',
                        iscorrect:false
                       },
                   
                      ],
                    },
                {
                    id:7,
                    question:'What do you call the type of coins that are pegged to a real-world asset (ex. USD)?',
                    options:[
                        {
                        option:'Proof-of-work Coins',
                        iscorrect:false
                       },
                       {
                        option:'Proof-of-stake Coins',
                        iscorrect:false
                       },
                       {
                        option:'Stablecoins',
                        iscorrect:true
                       },
                   
                      ],
                    },
        
        
        ]
           
    
        },
        { id :2,
            name:'Introduction to Blockchain',
            image:iconPath.blockchainlearn,
            // blankimage:iconPath.Blankcontent,
            content:[
                {
               
                    heading:'Blockchain',
                    content:'A decentralized distributed ledger that gets updated every time a transaction happens within the system. Miners or validators secure it and as an incentive, they are awarded coins for successfully updating the blockchain.',
            }
                ,
                {
                  
                            heading:'Double Spending',
                            content:'One of the main issues with digital currency. Double spending happens when a coin gets spent twice and thus duplicated. In cryptocurrencies, this problem is solved through the blockchain since every transaction that happens is recorded in it.',
                },
               
                {
                   
                    heading:'Consensus Mechanisms',
                    content:'To secure the blockchain, only selected entities can update it. The way these entities are selected is called the consensus mechanism. As of this writing, two of the most commonly used mechanisms are:',
               
              
              
             },

            {
                        heading:'Proof-of-work',
                        content:'To be chosen as the entity to update the blockchain in a PoW system, the computer first needs to solve complex equations (mine) and compete with the other miners in the network. Some examples of coins that use this mechanism are Bitcoin and Ethereum.'
                     
                },

                {
                        
                            heading:'Proof-of-sake',
                            content:'To be chosen as the entity to update the blockchain in a PoS system, the computer first needs to stake the system’s native coin within the network. The more coins the validator staked, the more likely it is to be chosen to update the blockchain. Some examples of coins that use this mechanism are Cardano and Avalanche.'
                     },
            {
                    heading:'Mining',
                    content:'The act of securing the blockchain by competing with other miners to update the ledger.',
           }
                ,
                {
               
                    heading:'Staking',
                    content:'The act of securing the blockchain by staking coins within the network to get a chance to update the ledger.'
                 
                }
                ,
                {
                  
                    heading:'Validators',
                    content:'Validators are individuals who have staked coins in a PoS blockchain and thus validate transactions.'
            },

            {
               
                    heading:'Hard Cap',
                    content:'The total amount of coins that exist in a blockchain is called the hard cap. For example, there are only 21 million bitcoins available; there is no way of exceeding that number.'
                    
                    
                }     ,
                {
                   
                        heading:'Coin Burning',
                        content:'In cryptocurrencies with no hard cap, the blockchain usually removes coins from circulation and thus maintains the coin’s monetary value.'
                        
                  }     

            ],
        Quiz:[
            {
            id:1,
            question:'Cryptocurrencies rely on blockchain technology to work. Which of the following uses it?',
            options:[
                {
                option:'Bitcoin',
                iscorrect:false
               },
               {
                option:'Ethereum',
                iscorrect:false
               },
               {
                option:'All of the Above',
                iscorrect:true
               },
           
              ],
            
            },
            {
                id:2,
                question:'Which of the following is NOT a crypto consensus mechanism?',
               
                options:[
                    {
                    option:'Proof-of-work',
                    iscorrect:false
                   },
                   {
                    option:'Proof-of-distribution',
                    iscorrect:true
                   },
                   {
                    option:'Proof-of-stake',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:3,
                question:'Bitcoin uses a proof-of-work consensus mechanism. ',
               
                options:[
                    {
                    option:'True',
                    iscorrect:true
                   },
                   {
                    option:'False',
                    iscorrect:false
                   }
               
                  ],
                },
            {
                id:4,
                question:'There are only 21 million Bitcoins in existence. Besides buying, how can you obtain one?',
             
                options:[
                    {
                    option:'Mining',
                    iscorrect:true
                   },
                   {
                    option:'Duplicate an existing one',
                    iscorrect:false
                   },
                   {
                    option:'Code one',
                    iscorrect:false
                   },
               
                  ],
               
                },
            {
                id:5,
                question:'What do you call the computers that secure Bitcoin’s blockchain?',
                options:[
                    {
                    option:'Ledgers',
                    iscorrect:false
                   },
                   {
                    option:'Miners',
                    iscorrect:true
                   },
                   {
                    option:'Sentinels',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:6,
                question:'In a proof-of-work coin you can earn crypto by mining. However, in a proof-of-stake coin, you can earn by  ____________',
                options:[
                    {
                    option:'Staking',
                    iscorrect:true
                   },
                   {
                    option:'Mining',
                    iscorrect:false
                   },
                   {
                    option:'Accounting',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:7,
                question:'Which of the following uses a Proof-of-work consensus mechanism?',
                options:[
                    {
                    option:'Cardano',
                    iscorrect:false
                   },
                   {
                    option:'Avalanche',
                    iscorrect:false
                   },
                   {
                    option:'Bitcoin',
                    iscorrect:true
                   },
               
                  ],
                },
    
    
    ]
       



    
        },

        { id :3,
            name:'Introduction to Crypto wallet',
            image:iconPath.cryptowallet,
            // blankimage:iconPath.Blankcontent,
            content:[
                {
              
                    heading:'Crypto Wallet',
                    content:'The safest way to hold cryptocurrencies is by using crypto wallets or digital wallets. These are decentralized programs that cannot be opened by anyone except the person who knows its seed phrase.',
             }
                ,
                {
                  
                            heading:'Seed Phrase',
                            content:'A series of words (usually 12 or 24)created during the wallet’s creation used to recover a wallet in case the owner forgets their wallet password.',
                 },
               
                {
                 
                    heading:'Different Types of Crypto/Digital Wallets:',
                    pointHeading:'Hot Wallet',
                    content:'A crypto wallet connected to the internet. The user can store, send and receive coins with it.'
              
              
             },
            {
               
                heading:'Different Types of Crypto/Digital Wallets:',
                pointHeading:'Cold Wallet / Hardware Wallet',
                content:'A crypto wallet not connected to the internet and thus lessens the risk of it being compromised.'
                   
            
          
         },
        {
           
            heading:'Different Types of Crypto/Digital Wallets:',
            pointHeading:'Custodial Wallet',
            content:'This is a centralized crypto wallet. Unlike the decentralized ones, this is not secured by a seed phrase but is backed and managed by a company. Due to regulation, this type of wallet requires the users to submit KYC.'
        
     },
    {
      
        heading:'Different Types of Crypto/Digital Wallets:',
        pointHeading:'KYC',
        content:'An abbreviation for “know your customer.” This refers to information that allows the company to verify the identity of their customers, this includes name, birthdate, valid ID, etc.'
             
  },
            {
           
                    heading:'Mining',
                    content:'The act of securing the blockchain by competing with other miners to update the ledger.',
             }
                ,
                {
                   
                    heading:'Staking',
                    content:'The act of securing the blockchain by staking coins within the network to get a chance to update the ledger.'
                 
               }
                ,
                {
                  
                    heading:'Validators',
                    content:'Validators are individuals who have staked coins in a PoS blockchain and thus validate transactions.'
             },

            {
                    heading:'Hard Cap',
                    content:'The total amount of coins that exist in a blockchain is called the hard cap. For example, there are only 21 million bitcoins available; there is no way of exceeding that number.'
                    
                 }     ,
                {

                        heading:'Coin Burning',
                        content:'In cryptocurrencies with no hard cap, the blockchain usually removes coins from circulation and thus maintains the coin’s monetary value.'
                        
                        
                    }     

            ],


        Quiz:[
            {
            id:1,
            question:'For maximum security, where should you ideally store your cryptocurrencies?',
            options:[
                {
                option:'Digital Wallet or Crypto Wallet',
                iscorrect:true
               },
               {
                option:'Bank',
                iscorrect:false
               },
               {
                option:'Crypto exchanges',
                iscorrect:false
               },
           
              ],
            
            },
            {
                id:2,
                question:'To receive crypto in your digital wallet, what do you need?',
               
                options:[
                    {
                    option:'Wallet address',
                    iscorrect:true
                   },
                   {
                    option:'Seed Phrase',
                    iscorrect:false
                   },
                   {
                    option:'Password',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:3,
                question:'A digital platform that allows users to interact with the blockchain and thus used to ‘store’ their cryptocurrencies.',
               
                options:[
                    {
                    option:'Crypto wallet or digital wallet',
                    iscorrect:true
                   },
                   {
                    option:'Blockchain integrated software',
                    iscorrect:false
                   },
                   {
                    option:'Ledger editor',
                    iscorrect:false
                   }
               
                  ],
                },
            {
                id:4,
                question:'Which of the following do you need to set up a digital wallet?',
             
                options:[
                    {
                    option:'Government-issued ID',
                    iscorrect:false
                   },
                   {
                    option:'Unique username',
                    iscorrect:false
                   },
                   {
                    option:'None of the above',
                    iscorrect:true
                   },
               
                  ],
               
                },
            {
                id:5,
                question:'This set of words helps secure your crypto wallet. Without this, wallet password recovery is impossible. What do you call this set of words?',
                options:[
                    {
                    option:'Catch Phrase',
                    iscorrect:false
                   },
                   {
                    option:'Wallet Metadata',
                    iscorrect:false
                   },
                   {
                    option:'Seed Phrase',
                    iscorrect:true
                   },
               
                  ],
                },
            {
                id:6,
                question:'Which of the following is true about digital wallets?',
                options:[
                    {
                    option:'A digital wallet can be recovered even without its seed phrase',
                    iscorrect:false
                   },
                   {
                    option:'The wallet’s seed phrase can open the wallet regardless of who used it',
                    iscorrect:true
                   },
                   {
                    option:'A digital wallet expires a year after it is created',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:7,
                question:'Which of the following is NOT a type of digital wallet?',
                options:[
                    {
                    option:'Cold wallet',
                    iscorrect:false
                   },
                   {
                    option:'Hot wallet',
                    iscorrect:false
                   },
                   {
                    option:'Ledger-based wallet',
                    iscorrect:true
                   },
               
                  ],
                },
            {
                id:8,
                question:'This is a physical crypto wallet where users can securely keep their private keys.',
                options:[
                    {
                    option:'Hardware wallet',
                    iscorrect:true
                   },
                   {
                    option:'Private key holder',
                    iscorrect:false
                   },
                   {
                    option:'Ledger',
                    iscorrect:false
                   },
               
                  ],
                },
            {
                id:9,
                question:'A type of crypto wallet that is always connected to the internet and can be used to store, send, and receive tokens/coins.',
                options:[
                    {
                    option:'Cold wallet',
                    iscorrect:false
                   },
                   {
                    option:'Hot wallet',
                    iscorrect:true
                   },
                   {
                    option:'Centralized exchange',
                    iscorrect:false
                   },
               
                  ],
                },
    
    
    ]
       
           
    
    
        },
        { id :4,
            name:'Introduction to ICOs',
            image:iconPath.Icoslearn,
            // blankimage:iconPath.Blankcontent,

            content:[
                {
               
                    heading:'ICO',
                    content:'An abbreviation of “Initial Coin Offering,” it is where early investors can buy coins of a new cryptocurrency. It also serves as a way for the team to get funding for the crypto project.',
                }
            
                ,
                {
                   
                            heading:'Whitepaper',
                            content:'When a company or a team wants to launch a cryptocurrency, they prepare a document called a whitepaper. It contains all the information that an investor would like to know about the coin/token that the company is launching.',
                            
                        
                        }
              ,
                {
                  
                    heading:'Tokenomics',
                    content:'A combination of the words token and economics which is a part of the whitepaper detailing how the coins will be distributed, how much will be allocated for marketing, how much will be available for the ICO, and how much the team will be held, etc.'

              
              
              
                }
            ,
            {
              
                heading:'Roadmap',
                content:'Another part of a whitepaper outlines the future plans for the project and how the team will achieve it.'

},
               
                {
                 
                    heading:'Litepaper',
                    content:'Litepaper is a summarized and shorter version of a whitepaper.',
              
              
              
                }
           ,
            
            {
                    heading:'Airdrop',
                    content:'An airdrop is an act of giving away free coins/tokens by the company or team. The coins are often deposited directly to the crypto wallets of the people who are qualified for the airdrop.',
                }
            
                ,
                {
               
                    heading:'Blockchain Explorer',
                    content:'As the name implies, this is a tool that is used to explore the blockchain and track transactions, total number of holders, wallets that contain most of the coins, etc.'
                 
                }
                ,
                {
                  
                    heading:'Liquidity Pool',
                    content:'In traditional markets, there needs to be both a buyer and a seller for a trade to happen. With a liquidity pool, there can only be one of either i.e. you can buy without a seller or you can sell without a buyer. This is done by providing an initial pool of tokens that the users can trade with.'
                }
            ,

            {
                
                    heading:'Locked Liquidity',
                    content:'One of the biggest risks of liquidity pools is when the developers will take all the coins/tokens to gain money and dump the coin’s price. This can be avoided by locking the liquidity for a certain period of time so that the team cannot take any tokens out of the pool.'
                    
                    
                                        }
                
                   ,
                 

            ],

        Quiz:[
            {
            id:1,
            question:'ICO is an acronym for:',
            options:[
                {
                option:'Initial Coin Offering',
                iscorrect:true
               },
               {
                option:'Initial Coin Order',
                iscorrect:false
               },
               {
                option:'Initial Crypto Offer',
                iscorrect:false
               },
           
              ],
            
            },
            {
                id:2,
                question:'The team behind an ICO prepares a whitepaper to show potential investors. What is a whitepaper?',
               
                options:[
                    {
                    option:'A document that only contains the team’s history',
                    iscorrect:false
                   },
                   {
                    option:'A document that only contains the coin’s price prediction',
                    iscorrect:false
                   },
                   {
                    option:'A document that contains everything there is to know about a coin',
                    iscorrect:true
                   },
               
                  ],
                },
            {
                id:3,
                question:'This document is a summary of a whitepaper.',
               
                options:[
                    {
                    option:'Litepaper',
                    iscorrect:true
                   },
                   {
                    option:'Summary paper',
                    iscorrect:false
                   }
                   ,
                   {
                    option:'Synthesis paper',
                    iscorrect:false
                   }
               
                  ],
                },
            {
                id:4,
                question:'A new coin is about to be launched, where can you get it?',
             
                options:[
                    {
                    option:'Private message from an anonymous entity',
                    iscorrect:false
                   },
                   {
                    option:'You can only get it from its official ICO',
                    iscorrect:true
                   },
                   {
                    option:'Send your seed phrase to the tesm and  get an airdrop',
                    iscorrect:false
                   },
               
                  ],
               
                },
            {
                id:5,
                question:'This is a method of raising funds for a crypto project. Done by offering an initial batch of coins to early investors.',
                options:[
                    {
                    option:'ICO',
                    iscorrect:true
                   },
                   {
                    option:'IPO',
                    iscorrect:false
                   },
                   {
                    option:'None',
                    iscorrect:false
                   },
               
                  ],
                }
    
    
    ]
       
    
    
        },



        { id :5,
            name:'Introduction to DeFi',
            image:iconPath.defilearn,
            // blankimage:iconPath.Blankcontent,

            content:[
                {
              
                    heading:'DeFi',
                    content:'A shortened form of the term Decentralized Finance. These coins are meant to function as traditional currency which can be traded and leveraged.',
                }
            
                ,
             
                        {
                            heading:'Decentralized Exchange',
                            content:'A decentralized exchange is a crypto exchange that is unregulated by any entity. To function, it primarily uses liquidity pools to facilitate trading.',
  
                        }
                ,
               
                {
                  
                    heading:'Yield Farming',
                    content:'Yield farming is the act of maximizing cryptocurrency yield through various methods.',
              
              
              
                }
          ,
            {
         
                    heading:'Stablecoins',
                    content:'Stablecoins are cryptocurrencies that are pegged to a real-world currency like USDT and USD for example. Stablecoins maintain their peg through asset reserves or algorithmic formulas.',
                }
         
                

            ],


        Quiz:[
            {
            id:1,
            question:'DeFi is a shortened term for:',
            options:[
                {
                option:'Decentralized Finance',
                iscorrect:true
               },
               {
                option:'Decommissioned Fiat',
                iscorrect:false
               },
               {
                option:'Decentralized Fiat Currency',
                iscorrect:false
               },
           
              ],
            
            },
            {
                id:2,
                question:'Which of the following transactions can you conduct using DeFi?',
               
                options:[
                    {
                    option:'Borrow Crypto',
                    iscorrect:false
                   },
                   {
                    option:'Lend Crypto',
                    iscorrect:false
                   },
                   {
                    option:'Leverage Crypto',
                    iscorrect:false
                   },
                   {
                    option:'All of the above',
                    iscorrect:true
                   },
               
                  ],
                },
            {
                id:3,
                question:'DeFi uses crypto exchanges not backed by any bank or company, these exchanges are called?',
               
                options:[
                    {
                    option:'Unbacked Exchanges',
                    iscorrect:false
                   },
                   {
                    option:'Decentralized Exchanges',
                    iscorrect:true
                   }
                   ,
                   {
                    option:'Free-market Exchanges',
                    iscorrect:false
                   }
               
                  ],
                },
            {
                id:4,
                question:'A method of maximizing DeFi returns is called?',
             
                options:[
                    {
                    option:'Yield Farming',
                    iscorrect:true
                   },
                   {
                    option:'Profit maximization',
                    iscorrect:false
                   },
                   {
                    option:'DeFi Farming',
                    iscorrect:false
                   },
               
                  ],
               
                },
            {
                id:5,
                question:'Which of the following is an example of a Decentralized Exchange?',
                options:[
                    {
                    option:'Binance',
                    iscorrect:false
                   },
                   {
                    option:'Coinbase',
                    iscorrect:false
                   },
                   {
                    option:'PancakeSwap',
                    iscorrect:true
                   },
               
                  ],
                }
    
    
    ]
       
    
    
        },
        { id :6,
            name:'Introduction to NFTs',
            image:iconPath.nftintro,
            // blankimage:iconPath.Nftcontent,
          
            content:[
                {
               
                    heading:'NFTs',
                    content:'An abbreviation of the term Non-fungible Tokens which are tokens minted in the blockchain which is used to prove ownership of an asset. In essence, it functions like a certificate of ownership.',
                    blankimage:iconPath.Nftcontent,
                    
                
                }
            
                ,
             
                        {
                            heading:'Minting',
                            content:'This is the process of making an NFT for an asset like pictures, music, domain names, etc. Once minted, the owner has the option of selling it to an NFT marketplace.',
  
                        }
                ,
               
                {
                   
                    heading:'Marketplace',
                    content:'To trade NFTs, it first needs to be listed in an NFT marketplace. Currently, the most popular ones are Opensea, Rarible, and SuperRare.',
              
              
              
                }
            ,
            {
            
                    heading:'Smart Contracts',
                    content:'To mint an NFT, the blockchain uses smart contracts which are essentially immutable programs in the blockchain which implement an action when certain criteria are met.',
                }
            
                

            ],

        Quiz:[
            {
            id:1,
            question:'An NFT is a token that proves ownership of an asset, similar to a certificate. NFT is an acronym for:',
            options:[
                {
                option:'Non-fungible token',
                iscorrect:true
               },
               {
                option:'Notarized fungible token',
                iscorrect:false
               },
               {
                option:'Non-fungible ticket',
                iscorrect:false
               },
           
              ],
            
            },
            {
                id:2,
                question:'A digital asset first needs to be ______ before becoming an NFT.',
               
                options:[
                    {
                    option:'Notarized',
                    iscorrect:false
                   },
                   {
                    option:'Minted',
                    iscorrect:true
                   },
                   {
                    option:'Registered',
                    iscorrect:false
                   },
                   
               
                  ],
                },
            {
                id:3,
                question:'You can buy and sell NFTs online. Which of the following is an example of an NFT marketplace?',
               
                options:[
                    {
                    option:'Opensea',
                    iscorrect:true
                   },
                   {
                    option:'Amazon NFT',
                    iscorrect:false
                   }
                   ,
                   {
                    option:'Ethereum marketplace',
                    iscorrect:false
                   }
               
                  ],
                },
            {
                id:4,
                question:'Which of the following can be minted as a NFT?',
             
                options:[
                    {
                    option:'Music',
                    iscorrect:false
                   },
                   {
                    option:'Art',
                    iscorrect:false
                   },
                   {
                    option:'Domain Names',
                    iscorrect:false
                   },
                   {
                    option:'All of the Above',
                    iscorrect:true
                   },
               
                  ],
               
                },
            {
                id:5,
                question:'Which of the following blockchains are NFTs commonly minted in?',
                options:[
                    {
                    option:'Ethereum',
                    iscorrect:true
                   },
                   {
                    option:'Bitcoin',
                    iscorrect:false
                   },
                   {
                    option:'Bitcoin Cash',
                    iscorrect:false
                   },
               
                  ],
                }
    
    
    ]
       
    
    
        }

       ]
       

}
,
{ id :2,
name:'Nabana Ecosystem',
banner:iconPath.Nabanabanner,
Courses:[
{ id :1,
    name:'Nabana Ecosystem',
    image:iconPath.nabanechosystem,

    blankimage:iconPath.Blankcontent,


content:[

    {
              
        heading:'NABANA Ecosystem',
        content:'The NABANA Ecosystem is a crypto startup that is one of the first to open a physical shop for cryptocurrencies where people can buy products and trade. It came from the Japanese word nabana which means “Healthy Vegetables.”',
    },
    {
      
        heading:'Total Supply',
       content:'The NABANA Ecosystem is powered by the NABANA Token with a hard cap of 700 million tokens.',
      }
   ,
   
    {
        heading:'KwH System',
        content:'KwH stands for Knowledge, Wealth & Health. To provide value to their customers, the NABANA Ecosystem implements the KwH system which are key aspects that they will focus on',
        
  }
,
{
   
    heading:'Knowledge',
    content:'The NABANA Ecosystem believes that applied knowledge is power and thus aims to empower its users with knowledge that they can use in their lives.'
   },
        

{
  
    heading:'Wealth',
    content:'The NABANA Ecosystem believes that wealth is a result of applied knowledge and healthy well-being. To kickstart this, they would award NABANA tokens to their users for accomplishing certain tasks.'
},
        
        

{
  
    heading:'Health',
    content:'The NABANA Ecosystem values health above everything and thus encourages its users to take care of theirs through the implementation of “burn and earn.”'
}

      
        
        
,
{

    heading:'Products',
    content:'To earn NABANA Tokens, one can avail and use any of the following NABANA products.',
    
    }
,
{
   
    heading:'Products',
    pointHeading:'Learn&Earn',
    content:'Earn NABANA tokens by learning about cryptocurrencies, DeFi, NFTs, etc.'
        }
    
    ,
      {
                    heading:'Products',
                     pointHeading:'Burn&Earn',
                     content:'Take care of your health and earn NABANA tokens by running or walking.'
                    }
               
            ,
            {
               
                       heading:'Products',
                        pointHeading:'Stake&Earn',
                        content:'Earn more NABANA tokens by staking them.'
                    }
           
            ,
            {
              
                        heading:'Products',
                        pointHeading:'Refer&Earn',
                        content:'Refer the NABANA Ecosystem to your friends and earn NABANA tokens.'
                     }
              
                                    
                ,
                {
                             heading:'Products',
                            pointHeading:'Shop&Earn' ,
                            content:'Shop in NABANA partner stores and earn NABANA tokens as a reward.'
                        }
                         ,
                           {
                                  heading:'Products',
                                 pointHeading:'NABANA Online Crypto Exchange',
                                content:'Swap cryptocurrencies with NABANA Crypto Swap.'
                       }
                                  
],

Quiz:[
    {
    id:1,
    question:'This company was one of the world’s first startups to open a physical crypto shop?',
    options:[
        {
        option:'Nabana',
        iscorrect:true
       },
       {
        option:'Binance',
        iscorrect:false
       },
       {
        option:'Huobi',
        iscorrect:false
       },
   
      ],
    
    },
    {
        id:2,
        question:'Which of the following is a product of NABANA Ecosystem?',
       
        options:[
            {
            option:'Learn&Earn',
            iscorrect:false
           },
           {
            option:'Burn&Earn',
            iscorrect:false
           },
           {
            option:'Swap&Earn',
            iscorrect:false
           },
           {
            option:'All of the above',
            iscorrect:true
           },
           
       
          ],
        },
    {
        id:3,
        question:'The name NABANA is inspired from the same Japanese word which means:',
       
        options:[
            {
            option:'Healthy Vegetable',
            iscorrect:true
           },
           {
            option:'Vegetable and Fruits',
            iscorrect:false
           }
           ,
           {
            option:'Healthy People',
            iscorrect:false
           }
       
          ],
        },
    {
        id:4,
        question:'The NABANA Ecosystem uses the KwH system to provide value to their users. KwH is an acronym for?',
     
        options:[
            {
            option:'Kindness, Worthiness, Happiness',
            iscorrect:false
           },
           {
            option:'Knowledge, Wealth, Health',
            iscorrect:true
           },
           {
            option:'Kindle, Wellness, Holistic Development',
            iscorrect:false
           },
          
       
          ],
       
        },
    {
        id:5,
        question:'Just like Bitcoin, NABANA Ecosystem only has a limited supply of tokens. How many NABANA tokens are there in existence?',
        options:[
            {
            option:'900 million tokens',
            iscorrect:false
           },
           {
            option:'700 million tokens',
            iscorrect:true
           },
           {
            option:'500 million tokens',
            iscorrect:false
           },
       
          ],
        }


]


},
]


}



   
  
]




