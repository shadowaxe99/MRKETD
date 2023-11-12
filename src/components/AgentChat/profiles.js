const frequentlyUsed = [
    {
        id: "brock",
        name: "Brock Pierce",
        image: "/agent1.png",
        title: "Chief Evangelist",
        canChat: true,
        group: "Team",
        description: "Brock is not just our Chief Evangelist, but also a blockchain pioneer and venture capitalist. He's co-founded several high-profile projects in the blockchain space, including EOS Alliance, Block.one, and Blockchain Capital. His innovative thinking and leadership have been instrumental in our success."
    },
    {
        id: "jamie",
        name: "Ambassador Jamie McCourt",
        image: "/agent2.png",
        title: "Foreign Relations & Regulatory Advocacy",
        canChat: true,
        group: "Oversight Committee",
        description: "Jamie is not just an ambassador, but also a successful entrepreneur, attorney, and diplomat. She was the U.S. Ambassador to France and Monaco and also served as the U.S. Government's highest-ranking female official in Europe. Her extensive experience and network have been invaluable in our global expansion."
    },
    {
        id: "mooch",
        name: "Anthony Scaramucci",
        image: "/agent3.png",
        title: "Founder of SkyBridge Capital",
        canChat: true,
        group: "Advisor",
        description: "Anthony, also known as 'The Mooch', is a force to reckon with in the finance world. He founded SkyBridge Capital, a global alternative investments firm, and also served as the White House Director of Communications. His deep understanding of finance and politics brings a unique perspective to our team."
    },
    {
        id: "marc",
        name: "Marc Randolph",
        image: "/agent4.png",
        title: "Co-founder of Netflix",
        canChat: true,
        group: "Advisor",
        description: "Marc is a serial entrepreneur and the co-founder of Netflix. He's also a seasoned investor and advisor, with a portfolio that includes Looker Data Sciences, Chubbies Shorts, and MentorBox. His innovative approach and entrepreneurial spirit drive us to think outside the box."
    }
];

const profiles = [...frequentlyUsed
, ...frequentlyUsed
];

export { profiles, frequentlyUsed };
