/* =============================================================
   SITE CONTENT — edit only this file to update the website.
   The three pages (Home / C.V. / Research) all read from here.
   Inline links / emphasis use plain HTML: <em>…</em>, <a …>…</a>
   ============================================================= */

const SITE = {

  /* ---------- Identity ---------- */
  name: "Lehan (Emma) Dong",
  tagline: "Business analytics · applied AI · operation management",

  /* ---------- Home photo(s) ----------
     Add the image files to the repo and list their filenames here.
     • One filename  -> a single static photo.
     • Two or more   -> they swap: click the photo to advance,
                        and it also crossfades automatically every few seconds.
     Portrait orientation looks best; any size works (it's cropped to fit). */
  photos: ["photo.jpg", "photo2.jpg", "photo3.jpg"],

  /* ---------- Contact / links ---------- */
  email:    "lehandongwork@gmail.com",
  linkedin: "https://www.linkedin.com/in/lehandong",
  github:   "https://github.com/LehanDong/lehanproject",

  /* ---------- Home page intro (paragraphs) ---------- */
  home: [
    `I hold an M.S. in Business Analytics &amp; Risk Management from
     <a href="https://carey.jhu.edu/" class="inline" target="_blank" rel="noopener">Johns Hopkins University</a> (2025),
     and currently hold research assistantships at the
     <a href="https://www.sbs.ox.ac.uk/" class="inline" target="_blank" rel="noopener">Saïd Business School, University of Oxford</a>
     and the Johns Hopkins Carey Business School.`,

    `My research interests lie at the intersection of econometrics, structural estimation, and natural language
     processing, with a growing focus on <em>AI for business and human–AI collaboration</em> — how algorithmic
     systems reshape decision-making across firms, courts, and labor markets, and how we can measure the structures
     behind those decisions.`,

    `I am also a research assistant at the Shanghai Artificial Intelligence Laboratory, and was previously a research
     assistant at the
     <a href="https://www.pbcsf.tsinghua.edu.cn/" class="inline" target="_blank" rel="noopener">PBC School of Finance, Tsinghua University</a>.
     I am applying to Ph.D. programs for entry in fall 2027.`
  ],

  /* ---------- Research page: projects ---------- */
  /* Each: { date, title, link?, meta, desc } — link is optional (e.g. SSRN). */
  research: [
    {
      date: "2026",
      title: "CEO Sentiment and Multinational Strategic Repositioning in China",
      meta: "Human–Algorithm Interaction Lab, Oxford Saïd · Advisor: Prof. Kejia Hu",
      desc: `A 572 firm-year panel linking FinBERT-scored CEO sentiment on China to firms' <em>exit</em> /
             <em>maintain</em> / <em>double-down</em> strategies, identified with fixed-effects, ordered logit,
             and IV designs.`
    },
    {
      date: "2026",
      title: "AI as Normative Reference: Stratified Emergence of Human–Machine Boundaries in Judicial Decision-Making",
      meta: "Independent project · presented at the Human–Algorithm Interaction Boundaries Symposium, Beijing",
      desc: `A human–AI comparison across 211 domestic-violence self-defense cases (DeepSeek-based reasoning model)
             finds agreement collapsing from 96.3% on facts to a 45.7-point gap in statutory citation — an average
             39.5-month sentencing divergence rooted in <em>normative translation</em> rather than factual recognition.`
    },
    {
      date: "2026 – present",
      title: "User Perceptions of LLM-Constructed Profiles",
      meta: "Singapore Management University · Advisor: Prof. Jiannan Li",
      desc: `How commercial large language models build internal models of their users, and how users perceive and
             respond to these inferred profiles.`
    },
    {
      date: "2025 – present",
      title: "Structural Demand Estimation for Grocery Retail Pricing",
      meta: "Johns Hopkins Carey Business School · Advisor: Prof. Yuexing Li",
      desc: `An MDCEV model on 36.2M grocery transactions recovering within-trip product choice and quantity, feeding
             a two-stage framework for pricing optimization and newsvendor inventory problems.`
    },
    {
      date: "2025",
      title: "Mortgage Lending Equity in the South Atlantic: A CRA-Linked HMDA Analysis",
      meta: "Johns Hopkins Carey Business School · Advisor: Prof. Nazli Turken",
      desc: `Ten logistic specifications on 10M+ HMDA records surface a paradox: CRA-covered lenders show
             <em>higher</em> approval rates yet charge <em>elevated</em> spreads to minority borrowers.`
    },
    {
      date: "2024 – 2025",
      title: "Seigniorage, Tariff Shocks, and Cross-Border Capital Flows",
      meta: "Center for International Finance and Economics, Tsinghua PBC School of Finance · Advisors: Prof. Jiandong Ju &amp; Dr. Chen Huang",
      desc: `Markov regime-switching on quarterly seigniorage (1951–2026), DiD evidence on tariff shocks across the
             U.S., U.K., Japan, and EU, and analysis of the Hengqin capital-account liberalization
             (working paper, Dong &amp; Huang, in preparation).`
    },
    {
      date: "2024",
      title: "Occupational Gender Segregation in China, 2012–2022",
      meta: "Undergraduate Thesis · Henan University &amp; Victoria University",
      desc: `Duncan and Karmel–MacLachlan decompositions of female under-representation across occupations,
             including shifts around the COVID-19 period.`
    }
  ],

  /* ---------- Research page: presentations ---------- */
  presentations: [
    {
      date: "2026",
      title: "AI as Normative Reference: Stratified Emergence of Human–Algorithm Boundaries in Judicial Decision-Making",
      venue: "Human–Algorithm Interaction Boundaries Academic Symposium, Beijing, China"
    },
    {
      date: "2026",
      title: "From Risk Identification to Collaborative Reconstruction: AI-Assisted Social Work in Identifying Lethality Risks in Domestic Violence",
      venue: "International Symposium on Artificial Intelligence and Social Work, Shanghai, China"
    },
    {
      date: "2025",
      title: "Occupational Gender Segregation in China (2012–2021): Implications for Business and Workforce Strategy",
      venue: "Poster · INFORMS Analytics+ Conference, Indianapolis, IN"
    }
  ],

  /* ---------- C.V. page ---------- */
  /* Put your PDF in the repo with this exact filename. */
  cvFile: "cv.pdf",

  /* ---------- Footer ---------- */
  updated: "June 2026"
};
