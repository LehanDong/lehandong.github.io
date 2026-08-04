const SITE = {
  name: "Lehan (Emma) Dong",
  role: "Research Assistant at Oxford Saïd Business School and Johns Hopkins Carey Business School",
  tagline: "AI for Business · Applied AI · Operations Management",
  profilePhotos: ["photo.jpg", "photo2.jpg", "photo3.jpg"],

  contacts: [
    { label: "Email", href: "mailto:lehandongwork@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lehandong" },
    { label: "GitHub", href: "https://github.com/LehanDong" }
  ],

  bio: [
    `I hold an M.S. in Business Analytics &amp; Risk Management from
     <a href="https://carey.jhu.edu/" target="_blank" rel="noopener">Johns Hopkins University</a> (2025).
     I currently hold research assistantships at the
     <a href="https://www.sbs.ox.ac.uk/" target="_blank" rel="noopener">Saïd Business School, University of Oxford</a>
     and <a href="https://www.nature.com/nature-index/institution-outputs/china/shanghai-artificial-intelligence-laboratory/628dcd4f342df06592261358" target="_blank" rel="noopener">
     Shanghai Artificial Intelligence Laboratory</a>.`,

    `My research lies at the intersection of econometrics, structural estimation, natural language processing,
     and <em> Applied AI and human–AI collaboration</em>. I study how algorithmic systems reshape
     decision-making across firms, courts, and labor markets, and how quantitative models can reveal the
     structures behind those decisions.`,

    `I was previously a research assistant at Johns Hopkins Carey Business School and 
     <a href="https://www.pbcsf.tsinghua.edu.cn/" target="_blank" rel="noopener">PBC School of Finance, Tsinghua University</a>.`
  ],

  interestSummary: [
    "AI for Business",
    "Human–AI Collaboration",
    "Econometrics & Structural Estimation",
    "Natural Language Processing"
  ],

  news: [
    {
      date: "July 2026",
      venue: "World Artificial Intelligence Conference (WAIC)",
      image: "assets/news-waic.svg",
      title: "Oxford Saïd Business School HAI Lab at WAIC",
      description: `Participated in WAIC as a member of the Human–Algorithm Interaction Lab at
        Oxford Saïd Business School.`
    },
    {
      date: "May 2026",
      venue: "Peking University",
      image: "assets/news-pku.svg",
      title: "Human–Algorithm Interaction Boundaries Academic Symposium",
      description: `<strong>Presentation:</strong> <em>AI as Normative Reference: 
      Stratified Emergence of Human–Algorithm Boundaries in Judicial Decision-Making</em>`
    },
    {
      date: "May 2026",
      venue: "East China University of Science and Technology",
      image: "assets/news-ecust.svg",
      title: "International Symposium on Artificial Intelligence and Social Work",
      description: `<strong>Presentation:</strong> <em>From Risk Identification to Collaborative Restructuring:
        AI-assisted social work in identifying domestic-violence lethality risk — a retrospective study of
        203 reverse-killing cases.</em>`
    },
  ],

  researchInterests: [
    {
      title: "AI for Business and Human–AI Collaboration",
      description: `I examine how AI systems alter judgment, coordination, and strategy inside firms and other
        organizations. My work asks when algorithmic recommendations complement human expertise, when they
        shift decision boundaries, and how people adapt to increasingly capable AI tools.`
    },
    {
      title: "AI, Law and Institutional Decision-Making",
      description: `Using legal records and computational experiments, I study where human and machine reasoning
        agree and where they diverge. I am especially interested in the movement from factual recognition to
        normative interpretation in high-stakes judicial decisions.`
    },
    {
      title: "Econometrics and Structural Estimation",
      description: `I use panel-data methods, causal inference, and structural models to recover the mechanisms
        behind observed decisions. Current applications include multinational strategy, retail demand and pricing,
        mortgage lending, and cross-border capital flows.`
    },
    {
      title: "Natural Language Processing and Computational Social Science",
      description: `I use language models and text-as-data methods to measure sentiment, model reasoning, and
        investigate social patterns at scale. This work connects computational measurement with substantive
        questions in business, gender, agent behavior and labor markets.`
    }
  ],

  projects: [
    {
      date: "2026",
      title: "CEO Sentiment and Multinational Strategic Repositioning in China",
      meta: "Human–Algorithm Interaction Lab, Oxford Saïd · Advisor: Prof. Kejia Hu",
      description: `A 572 firm-year panel linking FinBERT-scored CEO sentiment on China to firms’ exit, maintain,
        and double-down strategies, identified with fixed-effects, ordered logit, and IV designs.`
    },
    {
      date: "2026",
      title: "AI as Normative Reference: Stratified Emergence of Human–Machine Boundaries in Judicial Decision-Making",
      meta: "Independent project · Presented at the Human–Algorithm Interaction Boundaries Symposium, Beijing",
      description: `A human–AI comparison across 211 domestic-violence self-defense cases finds agreement
        collapsing from 96.3% on facts to a 45.7-point gap in statutory citation, with an average 39.5-month
        sentencing divergence rooted in normative translation rather than factual recognition.`
    },
    {
      date: "2026 – present",
      title: "User Perceptions of LLM-Constructed Profiles",
      meta: "Singapore Management University · Advisor: Prof. Jiannan Li",
      description: `How commercial large language models build internal models of their users, and how users
        perceive and respond to these inferred profiles.`
    },
    {
      date: "2025 – present",
      title: "Structural Demand Estimation for Grocery Retail Pricing",
      meta: "Johns Hopkins Carey Business School · Advisor: Prof. Yuexing Li",
      description: `An MDCEV model on 36.2M grocery transactions recovering within-trip product choice and quantity,
        feeding a two-stage framework for pricing optimization and newsvendor inventory problems.`
    },
    {
      date: "2025",
      title: "Mortgage Lending Equity in the South Atlantic: A CRA-Linked HMDA Analysis",
      meta: "Johns Hopkins Carey Business School · Advisor: Prof. Nazli Turken",
      description: `Ten logistic specifications on 10M+ HMDA records surface a paradox: CRA-covered lenders show
        higher approval rates yet charge elevated spreads to minority borrowers.`
    },
    {
      date: "2024 – 2025",
      title: "Seigniorage, Tariff Shocks, and Cross-Border Capital Flows",
      meta: "Center for International Finance and Economics, Tsinghua PBC School of Finance",
      description: `Markov regime-switching on quarterly seigniorage, difference-in-differences evidence on tariff
        shocks across the U.S., U.K., Japan, and EU, and analysis of the Hengqin capital-account liberalization.`
    },
    {
      date: "2024",
      title: "Occupational Gender Segregation in China, 2012–2022",
      meta: "Undergraduate thesis · Henan University & Victoria University",
      description: `Duncan and Karmel–MacLachlan decompositions of female under-representation across occupations,
        including shifts around the COVID-19 period.`
    }
  ],

  cvFile: "cv.pdf",
  updated: "August 2026"
};
