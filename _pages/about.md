
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
  --radius-md:18px;
}

/* ===== Global Text Style ===== */
.page__content{
  font-family:"Times New Roman", Times, serif;
  font-size:17px;
  line-height:1.75;
  color:var(--text-main);
}

.page__content a{
  color:#1f5fae;
  text-decoration:underline;
}

.page__content a:hover{
  color:#0b3f88;
  text-decoration:underline;
}

/* ===== Plain Intro ===== */
.hero-card{
  font-family:"Times New Roman", Times, serif;
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

/* ===== Refined Text Navigation ===== */
.home-links{
  font-family:"Times New Roman", Times, serif;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:26px;
  margin:10px 0 34px 0;
  padding:6px 0 4px 0;
}

.home-btn{
  position:relative;
  display:inline-flex;
  align-items:center;
  padding:2px 0 5px 0;
  color:var(--main-dark) !important;
  font-size:1.02rem;
  font-weight:700;
  letter-spacing:0.2px;
  text-decoration:none !important;
  border:none;
  background:none;
  box-shadow:none;
  transition:color 0.22s ease, transform 0.22s ease;
}

.home-btn::after{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:2px;
  border-radius:999px;
  background:linear-gradient(90deg, var(--main-color), var(--main-light));
  opacity:0.9;
}

.home-btn:hover{
  color:var(--main-color) !important;
  text-decoration:none !important;
  transform:translateY(-1px);
}

.home-btn:hover::after{
  opacity:1;
}

/* ===== Section Title: No Left Vertical Bar ===== */
.section-title{
  position:relative;
  display:flex;
  align-items:center;
  gap:10px;
  font-size:1.55rem;
  font-weight:800;
  color:var(--text-main);
  margin:38px 0 20px 0;
  padding:0 0 9px 0;
  border-left:none;
}

.section-title::after{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:92px;
  height:2px;
  border-radius:999px;
  background:linear-gradient(90deg, var(--main-color), var(--main-light), rgba(176,138,26,0.15));
}

/* ===== Research Interests: Minimal Structured List ===== */
.research-list{
  margin:0;
  padding:0;
  list-style:none;
  border-top:1px solid #eee6d8;
}

.research-item{
  display:grid;
  grid-template-columns:58px 1fr;
  column-gap:16px;
  align-items:start;
  padding:18px 0;
  border-bottom:1px solid #eee6d8;
  transition:transform 0.22s ease;
}

.research-item:hover{
  transform:translateX(3px);
}

.research-index{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:42px;
  height:28px;
  border-left:4px solid var(--main-color);
  color:var(--main-dark);
  font-weight:800;
  letter-spacing:0.5px;
}

.research-content h3{
  margin:0 0 7px 0;
  color:var(--main-color);
  font-size:1.15rem;
  line-height:1.35;
  font-weight:800;
}

.research-content p{
  margin:0;
  color:var(--text-soft);
  line-height:1.65;
}

.research-keyword{
  font-weight:700;
  color:#333333;
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

/* ===== Academic Services: Minimal Accent List ===== */
.service-block{
  background:none;
  border:none;
  box-shadow:none;
  padding:0;
  margin:0;
}

.service-list{
  list-style:none;
  margin:0;
  padding:0;
}

.service-item{
  position:relative;
  margin:0;
  padding:0 0 17px 18px;
  background:none;
  border:none;
  box-shadow:none;
  transition:transform 0.22s ease;
}

.service-item:not(:last-child){
  margin-bottom:16px;
  border-bottom:1px solid #eee8dc;
}

.service-item::before{
  content:"";
  position:absolute;
  left:0;
  top:7px;
  width:4px;
  height:calc(100% - 24px);
  min-height:24px;
  border-radius:999px;
  background:linear-gradient(180deg, var(--main-color), var(--main-light));
}

.service-item:hover{
  transform:translateX(3px);
}

.service-role{
  display:inline;
  margin-right:6px;
  color:#333333;
  font-weight:800;
}

.service-role::after{
  content:",";
  color:#555555;
  font-weight:700;
}

.service-venue{
  font-style:italic;
  color:#4a4a4a;
}

.service-detail{
  color:#4f4f4f;
}

.service-abbr{
  font-weight:700;
  color:#333333;
}

.service-muted{
  color:var(--main-dark);
  font-weight:700;
}

/* ===== Responsive ===== */
@media (max-width: 768px){
  .page__content{
    font-size:16px;
  }

  .section-title{
    font-size:1.35rem;
  }

  .section-title::after{
    width:78px;
  }

  .home-links{
    gap:16px;
  }

  .home-btn{
    font-size:1rem;
  }

  .research-item{
    grid-template-columns:46px 1fr;
    column-gap:12px;
  }

  .research-index{
    width:36px;
  }

  .service-item{
    padding-left:16px;
  }
}
</style>

<div class="hero-card">

  <p>
    Hello 👋
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
    journals and conferences. If you are interested in collaboration, please contact me via email:
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

<ul class="research-list">

  <li class="research-item">
    <div class="research-index">01</div>
    <div class="research-content">
      <h3>Near-Field Communications</h3>
      <p>
        <span class="research-keyword">Flexible beamforming design</span> and
        <span class="research-keyword">mixed-field communications</span>.
      </p>
    </div>
  </li>

  <li class="research-item">
    <div class="research-index">02</div>
    <div class="research-content">
      <h3>Intelligent Antenna and Surface</h3>
      <p>
        <span class="research-keyword">Intelligent reflecting surface</span> and
        <span class="research-keyword">reconfigurable antenna</span>.
      </p>
    </div>
  </li>

  <li class="research-item">
    <div class="research-index">03</div>
    <div class="research-content">
      <h3>Backscatter Communications</h3>
      <p>
        <span class="research-keyword">Symbiotic radio</span>.
      </p>
    </div>
  </li>

</ul>

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
  <ul class="service-list">

    <li class="service-item">
      <span class="service-role">Reviewer for Journals</span>
      <span class="service-detail">
        <span class="service-muted">IEEE journals:</span>
        <span class="service-abbr">JSAC</span>,
        <span class="service-abbr">TWC</span>,
        <span class="service-abbr">TMC</span>,
        <span class="service-abbr">TCOM</span>,
        <span class="service-abbr">TCCN</span>,
        <span class="service-abbr">TVT</span>,
        <span class="service-abbr">TGCN</span>,
        <span class="service-abbr">JSTEAP</span>,
        <span class="service-abbr">OJ-COMS</span>,
        <span class="service-abbr">WCL</span>,
        <span class="service-abbr">CL</span>;
        <span class="service-muted">others:</span>
        <span class="service-abbr">China Commun.</span>
      </span>
    </li>

    <li class="service-item">
      <span class="service-role">Reviewer for Conferences</span>
      <span class="service-detail">
        <span class="service-abbr">IEEE ICC</span> 2025/2026,
        <span class="service-abbr">IEEE WCNC</span> 2024/2026,
        <span class="service-abbr">IEEE GLOBECOM</span> 2024/2025,
        <span class="service-abbr">IEEE/CIC ICCC</span> 2025,
        <span class="service-abbr">IEEE PIMRC</span> 2024,
        and <span class="service-abbr">WCSP</span> 2024.
      </span>
    </li>

    <li class="service-item">
      <span class="service-role">Special Session Co-Chair</span>
      <span class="service-venue">
        Extremely Large-Scale MIMO for Near-Field Communication and Sensing
      </span>
      <span class="service-detail">
        at <span class="service-abbr">IEEE ISWCS</span> 2026.
      </span>
    </li>

  </ul>
</div>

