export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  achievements: string[];
  mainImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    category: "SOCIAL MEDIA & BRANDING",
    title: "DEJOKE (JOKE)",
    description:
      "A satirical, community-driven meme brand turning crypto absurdity into visual storytelling. We transformed a simple joke token into a cultural phenomenon through high-octane visual assets and a rebellious narrative voice.",
    achievements: [
      "500% Community Growth",
      "Viral Meme Campaign",
      "Top 1 Trending on DEX",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2532&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1763727429545-0e4f78a60c95?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1768666950721-725d5f943be8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1768489002330-5b2c89e958b7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "2",
    category: "DEFI & INFRASTRUCTURE",
    title: "PULSE NETWORK",
    description:
      "Redefining the heartbeat of decentralized finance with a lightning-fast layer 2 solution. We built the visual identity from the ground up, focusing on speed, security, and interconnectivity.",
    achievements: ["$50M TVL in 3 Months", "Audited by Certik", "10k+ Active Wallets"],
    mainImage:
      "https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1673340683562-cb8e2ed0b195?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "3",
    category: "NFT & CREATIVE",
    title: "NEON ARC",
    description:
      "A cyberpunk-inspired NFT collection that bridges digital art with physical utility. The campaign focused on lore-building and immersive storytelling to captivate the collector base.",
    achievements: [
      "Sold Out in 4 Minutes",
      "Secondary Volume 200 ETH",
      "Featured on OpenSea",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1650114367479-3f9f75aff6fd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "4",
    category: "EVENT & EXPERIENCE",
    title: "ZENITH SUMMIT",
    description:
      "The premier Web3 conference in Southeast Asia. We handled the full experiential design, from stage visuals to attendee merchandise, creating an unforgettable atmosphere.",
    achievements: [
      "2,000+ Attendees",
      "50+ Global Speakers",
      "Best Event Design Award",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1669226801654-28055d303c4e?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1687099616306-b702968531c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661848348308-7cb8452930f0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "5",
    category: "PRODUCT DESIGN",
    title: "CIPHER WALLET",
    description:
      "A non-custodial wallet focused on user experience and simplicity. We redesigned the UI/UX to make crypto accessible to the masses without compromising security.",
    achievements: [
      "4.8/5 App Store Rating",
      "Reduced Churn by 30%",
      "Featured in TechCrunch",
    ],
    mainImage:
      "https://plus.unsplash.com/premium_photo-1682104376313-ad77c73ba131?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1666816943035-15c29931e975?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "6",
    category: "DAO & GOVERNANCE",
    title: "VERTEX DAO",
    description:
      "Empowering the community to build the future. We developed the governance framework and communication strategy to align thousands of token holders toward a common goal.",
    achievements: [
      "90% Proposal Participation",
      "$10M Treasury Managed",
      "Global Ambassador Program",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: "7",
    category: "AI STRATEGY",
    title: "AETHER LABS",
    description:
      "Integrating Artificial Intelligence into Web3 workflows. We helped Aether Labs define their market position as the bridge between machine learning and blockchain technology.",
    achievements: ["Partnered with OpenAI", "Series A Funding", "Best AI Product 2025"],
    mainImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616980753229-23ab5070af71?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1760878471556-cee0135d51a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1768690221006-bf36e260a468?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1763727429545-0e4f78a60c95?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1768405942827-4d15f4a1b32a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "8",
    category: "ECOSYSTEM GROWTH",
    title: "SOLARIS CHAIN",
    description:
      "A comprehensive ecosystem growth campaign for a rising L1 blockchain. From hackathons to developer grants, we managed the entire go-to-market strategy.",
    achievements: [
      "100+ Dapps Deployed",
      "50k Discord Members",
      "Top 5 L1 by Volume",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    ],
  },
];
