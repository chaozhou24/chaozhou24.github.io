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
/* Homepage content layout; common styling is in academic.css. */
.hero-card { margin: 0 0 24px; padding: 0; border: 0; background: none; box-shadow: none; }
.hero-card p { margin: 0 0 18px; }
.page__content .hello-line { margin: 0 0 20px; padding: 0; border: 0; color: #111; font-size: 32px; font-weight: 700; line-height: 1.2; }
.home-links { display: flex; flex-wrap: wrap; gap: 10px 24px; margin: 20px 0 32px; }
.home-links a { font-size: 17px; }
.page__content .section-title { margin: 36px 0 18px; padding: 0 0 10px; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 28px; font-weight: 700; line-height: 1.3; text-align: left; scroll-margin-top: 24px; }
.research-bullets { padding-left: 24px; margin: 0; }
.research-bullets li { margin: 0 0 10px; }
.research-bullets strong { color: #111; }
.news-list { margin: 0; }
.news-item { display: grid; grid-template-columns: 74px minmax(0, 1fr); gap: 16px; margin: 0 0 17px; }
.news-date { color: #666; font-size: 16px; font-weight: 400; padding-top: 2px; white-space: nowrap; }
.news-item p { margin: 0; }
.selected-list { list-style: none; counter-reset: publication; margin: 0; padding: 0; }
.selected-list li { position: relative; counter-increment: publication; padding-left: 40px; margin: 0 0 22px; }
.selected-list li::before { content: "[" counter(publication) "]"; position: absolute; left: 0; color: #111; font-weight: 700; }
.publication-title { display: block; margin-bottom: 4px; line-height: 1.5; }
.publication-authors, .publication-meta { margin: 0 !important; font-size: 16px; color: #555; line-height: 1.6; }
.publication-authors strong { color: #111; }
.all-publications { margin: 2px 0 0; text-align: right !important; font-size: 16px; }
.service-list { list-style: none; margin: 0; padding: 0; }
.service-item { margin: 0 0 20px; padding: 0; }
.service-role { display: block; margin-bottom: 5px; color: #111; font-weight: 700; }
.service-detail, .service-venue { color: #333; }
.service-venue { font-style: italic; }
.service-abbr { font-weight: 400; }
.service-muted { color: #111; font-weight: 700; }
.page__content .hero-email { overflow-wrap: anywhere; }
@media (max-width: 767px) {
  .page__content .hello-line { font-size: 28px; }
  .page__content .section-title { font-size: 24px; margin-top: 30px; }
  .home-links { gap: 10px 18px; }
  .news-item { grid-template-columns: 62px minmax(0, 1fr); gap: 10px; }
  .news-date { font-size: 14px; }
  .selected-list li { padding-left: 30px; }
  .publication-authors, .publication-meta { font-size: 15px; }
}
</style>

<div class="hero-card">

  <h1 class="hello-line">Hello!</h1>

  <p>
    I am a Ph.D. candidate at Southern University of Science and Technology (SUSTech),
    advised by Prof.
    <a href="https://www.sustech.edu.cn/en/faculties/changshengyou.html" target="_blank" rel="noopener noreferrer">Changsheng You</a>.
    I received the M.S. degree from Nanjing University of Posts and Telecommunications,
    under the supervision of Prof.
    <a href="https://scholar.google.com/citations?user=0C3BRkEAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noopener noreferrer">Bin Lyu</a>.
  </p>

  <p>
    My research interests include Near-Field Communications, Intelligent Antenna and Surface,
    and Symbiotic Radio. I have published several papers in top international communication
    journals and conferences. If you are interested in collaboration, please contact me via email:
    <a class="hero-email" href="mailto:zhouchao2024@mail.sustech.edu.cn">zhouchao2024@mail.sustech.edu.cn</a>
  </p>

</div>

<div class="home-links">
  <a class="home-btn" href="mailto:zhouchao2024@mail.sustech.edu.cn">Email</a>
  <a class="home-btn" href="https://scholar.google.com/citations?user=o5Sqh2MAAAAJ&hl=zh-CN&oi=sra" target="_blank" rel="noopener noreferrer">Google Scholar</a>
  <a class="home-btn" href="#news">News</a>
  <a class="home-btn" href="/Publications.html">Publications</a>
  <a class="home-btn" href="/Photos.html">Photos</a>
</div>

<h2 class="section-title research-title">Research interests</h2>

<ul class="research-bullets">
  <li><strong>Near-field communications:</strong> flexible beamforming design and mixed-field communications.</li>
  <li><strong>Intelligent antennas and surfaces:</strong> intelligent reflecting surfaces and reconfigurable antennas.</li>
  <li><strong>Backscatter communications:</strong> symbiotic radio.</li>
</ul>

<h2 class="section-title" id="news">News</h2>

<div class="news-list">

  <div class="news-item">
    <time class="news-date" datetime="2026-08">2026.08</time>
    <p>
      Our paper
      <a href="https://doi.org/10.1109/TWC.2026.3717922" target="_blank" rel="noopener noreferrer">
        Low-complexity Design for Beam Coverage in Near-field and Far-field: A Fourier Transform Approach
      </a>
      was accepted by IEEE Transactions on Wireless Communications.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2026-08">2026.08</time>
    <p>
      Three papers have been accepted by the IEEE Global Communications Conference (GLOBECOM) 2026.

    </p>
  </div>


  <div class="news-item">
    <time class="news-date" datetime="2026-06">2026.06</time>
    <p>
      Our paper
      <a href="https://arxiv.org/abs/2606.25629" target="_blank" rel="noopener noreferrer">
        Event-Adaptive Motion Planning with Distilled Vision-Language Model in Safety-Critical Situations
      </a>
      was accepted by IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2026-05">2026.05</time>
    <p>
      Our paper
      <a href="https://doi.org/10.1109/TWC.2026.3690730" target="_blank" rel="noopener noreferrer">
        Near-field Physical Layer Security: Robust Beamforming under Location Uncertainty
      </a>
      was accepted by IEEE Transactions on Wireless Communications.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2026-03">2026.03</time>
    <p>
      Our paper
      <a href="https://doi.org/10.1109/TWC.2026.3673378" target="_blank" rel="noopener noreferrer">
        MA-enhanced Mixed Near-field and Far-field Covert Communications
      </a>
      was accepted by IEEE Transactions on Wireless Communications.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2026-01">2026.01</time>
    <p>
      Three papers have been accepted by the IEEE International Conference on Communications (ICC) 2026.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2024-11">2024.11</time>
    <p>
      I received the IEEE WCSP Best Paper Award for paper
      <a href="https://doi.org/10.1109/WCSP62071.2024.10827219" target="_blank" rel="noopener noreferrer">
        Channel Estimation for XL-IRS Assisted Wireless Systems with Double-sided Visibility Regions
      </a>.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2024-10">2024.10</time>
    <p>
      I received China Institute of Communications Master's Thesis Incentive Program (Only 7 recipients nationwide), 2024.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2023-10">2023.10</time>
    <p>
      I received the National Scholarship for Master's Students (Top 2%), 2023.

    </p>
  </div>

  <div class="news-item">
    <time class="news-date" datetime="2022-10">2022.10</time>
    <p>
      I received the National Scholarship for Master's Students (Top 2%), 2022.

    </p>
  </div>

</div>

<h2 class="section-title" id="selected-publications">Selected publications</h2>

<ol class="selected-list">
  <li>
    <a class="publication-title" href="https://doi.org/10.1109/TWC.2026.3717922" target="_blank" rel="noopener noreferrer">Low-complexity Design for Beam Coverage in Near-field and Far-field: A Fourier Transform Approach</a>
    <p class="publication-authors"><strong>Chao Zhou</strong>, Changsheng You, Cong Zhou, Li Chen, Yi Gong, and Chengwen Xing.</p>
    <p class="publication-meta"><i>IEEE Transactions on Wireless Communications</i>, vol. 25, pp. 21595–21610, 2026. &middot; <a href="https://doi.org/10.1109/TWC.2026.3717922" target="_blank" rel="noopener noreferrer">Paper</a></p>
  </li>
  <li>
    <a class="publication-title" href="https://doi.org/10.1109/TWC.2026.3690730" target="_blank" rel="noopener noreferrer">Near-field Physical Layer Security: Robust Beamforming under Location Uncertainty</a>
    <p class="publication-authors"><strong>Chao Zhou</strong>, Changsheng You, Cong Zhou, Chengwen Xing, and Jianhua Zhang.</p>
    <p class="publication-meta"><i>IEEE Transactions on Wireless Communications</i>, vol. 25, pp. 17384–17398, 2026. &middot; <a href="https://doi.org/10.1109/TWC.2026.3690730" target="_blank" rel="noopener noreferrer">Paper</a></p>
  </li>
  <li>
    <a class="publication-title" href="https://doi.org/10.1109/TWC.2026.3673378" target="_blank" rel="noopener noreferrer">MA-enhanced Mixed Near-field and Far-field Covert Communications</a>
    <p class="publication-authors"><strong>Chao Zhou</strong>, Changsheng You, Cong Zhou, Hai Lin, and Yi Gong.</p>
    <p class="publication-meta"><i>IEEE Transactions on Wireless Communications</i>, vol. 25, pp. 14037–14052, 2026. &middot; <a href="https://doi.org/10.1109/TWC.2026.3673378" target="_blank" rel="noopener noreferrer">Paper</a></p>
  </li>
</ol>
<p class="all-publications"><a href="/Publications.html">View all publications &rarr;</a></p>

<h2 class="section-title" id="academic-services">📄 Academic Services</h2>

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
