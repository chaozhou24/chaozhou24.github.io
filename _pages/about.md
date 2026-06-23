---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
:root{
  --main-color:#7F6000;
  --main-dark:#5f4700;
  --main-light:#b08a1a;
  --soft-bg:#faf8f3;
  --card-bg:#ffffff;
  --border-light:#ece6d8;
  --border-mid:#e2d6b8;
  --text-main:#222222;
  --text-soft:#555555;
  --shadow-soft:0 8px 24px rgba(0,0,0,0.06);
  --shadow-hover:0 14px 32px rgba(0,0,0,0.10);
  --radius-lg:22px;
  --radius-md:18px;
  --radius-sm:14px;
}

.page__content{
  font-size:17px;
  line-height:1.75;
  color:var(--text-main);
}

/* 普通文字超链接格式，类似第一个图 */
.page__content a{
  color:#0000EE;
  text-decoration:underline;
}

.page__content a:hover{
  color:#0000EE;
  text-decoration:underline;
}

/* ===== Plain Intro, no card border ===== */
.hero-card{
  background:none;
  border:none;
  border-radius:0;
  padding:0;
  margin:0 0 18px 0;
  box-shadow:none;
  overflow:visible;
}

.hero-card::after{
  display:none;
}

.hero-card p{
  margin:0 0 16px 0;
  font-size:1rem;
  line-height:1.75;
  color:var(--text-main);
}

.hero-email{
  font-weight:normal;
  color:var(--text-main);
}

/* ===== Plain Text Links ===== */
.home-links{
  display:block;
  margin:8px 0 34px 0;
}

.home-btn{
  display:inline;
  padding:0;
  margin-right:20px;
  border:none;
  border-radius:0;
  background:none;
  box-shadow:none;
  color:#0000EE !important;
  font-weight:normal;
  text-decoration:underline !important;
  transition:none;
}

.home-btn:hover{
  background:none;
  border:none;
  transform:none;
  box-shadow:none;
  color:#0000EE !important;
  text-decoration:underline !important;
}

/* ===== Section Title ===== */
.section-title{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:1.55rem;
  font-weight:800;
  color:var(--text-main);
  margin:36px 0 18px 0;
  padding-left:14px;
  border-left:5px solid var(--main-color);
}

/* ===== Highlight bar ===== */
.highlight-bar{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin:0 0 28px 0;
}

.highlight-pill{
  display:inline-flex;
  align-items:center;
  padding:7px 14px;
  border-radius:999px;
  background:#fffaf0;
  border:1px solid #eadab0;
  color:var(--main-dark);
  font-size:0.94rem;
  font-weight:700;
}

/* ===== Research Cards ===== */
.research-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));
  gap:22px;
}

.research-card{
  background:var(--card-bg);
  border:1px solid var(--border-light);
  border-radius:var(--radius-md);
  padding:22px 22px 18px 22px;
  box-shadow:var(--shadow-soft);
  transition:transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.research-card:hover{
  transform:translateY(-4px);
  box-shadow:var(--shadow-hover);
  border-color:#e0d0a8;
}

.research-card h3{
  margin:0 0 14px 0;
  color:var(--main-color);
  font-size:1.18rem;
  line-height:1.4;
}

.research-card ul{
  margin:0;
  padding-left:22px;
}

.research-card li{
  margin:10px 0;
  color:var(--text-soft);
}

/* ===== News Timeline ===== */
.news-timeline{
  position:relative;
  margin-top:4px;
  padding-left:26px;
  border-left:3px solid #eadfca;
}

.news-item{
  position:relative;
  margin-bottom:22px;
  padding:0 0 0 10px;
}

.news-item::before{
  content:"";
  position:absolute;
  left:-35px;
  top:8px;
  width:14px;
  height:14px;
  border-radius:50%;
  background:var(--main-color);
  box-shadow:0 0 0 4px #f7f0df;
}

.news-date{
  display:inline-block;
  margin-right:8px;
  font-weight:800;
  color:var(--main-color);
}

.news-item p{
  margin:0;
  color:var(--text-main);
}

/* ===== Service Block ===== */
.service-block{
  background:var(--card-bg);
  border:1px solid var(--border-light);
  border-radius:var(--radius-md);
  padding:22px;
  box-shadow:var(--shadow-soft);
}

.service-heading{
  margin:0 0 10px 0;
  font-size:1.02rem;
  color:var(--text-main);
}

.tags{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.tag{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:7px 14px;
  border-radius:999px;
  background:#fff7e3;
  border:1px solid #ecdcae;
  color:#6f5400;
  font-size:0.93rem;
  font-weight:650;
}

/* ===== Responsive ===== */
@media (max-width: 768px){
  .page__content{
    font-size:16px;
  }

  .section-title{
    font-size:1.35rem;
  }

  .home-btn{
    margin-right:14px;
  }
}
</style>

<div class="hero-card">

  <p>
    Hello :-)
  </p>

  <p>
    I am a Ph.D. candidate at Southern University of Science and Technology (SUSTech),
    advised by Prof.
    <a href="https://www.sustech.edu.cn/en/faculties/changshengyou.html" target="_blank">
      Changsheng You
    </a>.
    I received the M.S. degree from Nanjing University of Posts and Telecommunications.
    My research interests include Near-Field Communications, Intelligent Antenna and Surface,
    and Symbiotic Radio. I have published several papers in top international communication
    journals and conferences.
    If you are interested in collaboration, please contact me via email:
    <span class="hero-email">zhouchao2024@mail.sustech.edu.cn</span>
  </p>

</div>

<div class="home-links">
  <a class="home-btn" href="mailto:zhouchao2024@mail.sustech.edu.cn">Email</a>
  <a class="home-btn" href="https://scholar.google.com/citations?user=o5Sqh2MAAAAJ&hl=zh-CN&oi=sra" target="_blank">Google Scholar</a>
  <a class="home-btn" href="#news">News</a>
  <a class="home-btn" href="/Publications.html">Publications</a>
  <a class="home-btn" href="/Photos.html">Photos</a>
</div>


<div class="section-title">📖 Research Interests</div>

<div class="research-grid">
  <div class="research-card">
    <h3>Near-Field Communications</h3>
    <ul>
      <li>Flexible Beamforming Design</li>
      <li>Mixed-field Communications</li>
    </ul>
  </div>

  <div class="research-card">
    <h3>Intelligent Antenna and Surface</h3>
    <ul>
      <li>Intelligent Reflecting Surface</li>
      <li>Reconfigurable Antenna</li>
    </ul>
  </div>

  <div class="research-card">
    <h3>Backscatter Communications</h3>
    <ul>
      <li>Symbiotic Radio</li>
    </ul>
  </div>
</div>

<span id="news"></span>

<div class="section-title">🔥 News</div>

<div class="news-timeline">

  <div class="news-item">
    <p>
      <span class="news-date">2026.06</span>
      One paper has been accepted by the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2026.05</span>
      Our paper
      <a href="https://ieeexplore.ieee.org/document/11519553" target="_blank">
        Near-field Physical Layer Security: Robust Beamforming under Location Uncertainty
      </a>
      was accepted by IEEE Transactions on Wireless Communications.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2026.03</span>
      Our paper
      <a href="https://ieeexplore.ieee.org/document/11448582" target="_blank">
        MA-enhanced Mixed Near-field and Far-field Covert Communications
      </a>
      was accepted by IEEE Transactions on Wireless Communications.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2026.01</span>
      Three papers have been accepted by the IEEE International Conference on Communications (ICC) 2026.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2024.11</span>
      I received the IEEE WCSP Best Paper Award for paper
      <a href="https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Channel+Estimation+for+XL-IRS+Assisted+Wireless+Systems+with+Double-sided+Visibility+Regions&btnG=" target="_blank">
        Channel Estimation for XL-IRS Assisted Wireless Systems with Double-sided Visibility Regions
      </a>.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2024.10</span>
      I received China Institute of Communications Master's Thesis Incentive Program (Only 7 recipients nationwide), 2024.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2023.10</span>
      I received the National Scholarship for Master's Students (Top 2%), 2023.
    </p>
  </div>

  <div class="news-item">
    <p>
      <span class="news-date">2022.10</span>
      I received the National Scholarship for Master's Students (Top 2%), 2022.
    </p>
  </div>

</div>

<div class="section-title">📄 Academic Services</div>

<div class="service-block">
  <p class="service-heading"><strong>Reviewer for Journals</strong></p>
  <div class="tags">
    <span class="tag">IEEE JSAC</span>
    <span class="tag">IEEE TWC</span>
    <span class="tag">IEEE TMC</span>
    <span class="tag">IEEE TCOM</span>
    <span class="tag">IEEE TCCN</span>
    <span class="tag">IEEE TVT</span>
    <span class="tag">IEEE TGCN</span>
    <span class="tag">IEEE JSTEAP</span>
    <span class="tag">IEEE OJ-COMS</span>
    <span class="tag">IEEE WCL</span>
    <span class="tag">IEEE CL</span>
    <span class="tag">IEEE China com</span>
  </div>

  <div style="height:16px;"></div>

  <p class="service-heading"><strong>Reviewer for Conferences</strong></p>
  <div class="tags">
    <span class="tag">ICC 2026</span>
    <span class="tag">WCNC 2026</span>
    <span class="tag">ICC 2025</span>
    <span class="tag">GLOBECOM 2025</span>
    <span class="tag">ICCC 2025</span>
    <span class="tag">GLOBECOM 2024</span>
    <span class="tag">WCSP 2024</span>
    <span class="tag">PIMRC 2024</span>
    <span class="tag">WCNC 2024</span>
  </div>
</div>
