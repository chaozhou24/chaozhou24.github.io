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

<div class="directory-layout">
  <div class="directory-main">
<div class="hero-card">

  <h1 class="hello-line" id="hello" style="scroll-margin-top: 80px;">Hello!</h1>

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


<h2 class="section-title research-title" id="research-interests">Research interests</h2>

<div class="research-overview">
  <section class="research-topic" aria-labelledby="research-nfc">
    <h3 id="research-nfc">Near-field Communications (NFC)</h3>
    <p>Near-field communications exploit the spherical wavefronts of large antenna arrays, making wireless channels dependent on both angle and distance. This enables spatially focused transmission and creates new opportunities for communications and sensing.</p>
    <p><strong>My focus:</strong> I focus on flexible beamforming and beam coverage, mixed near-field and far-field communications, and robust transmission design. My work also explores physical-layer security and target localization in extremely large-scale MIMO (XL-MIMO) systems.</p>
    <figure class="research-figure">
      <img src="/images/research/near-field.svg" width="960" height="320" loading="lazy" decoding="async" alt="Comparison of near-field beam focusing at a specific location and far-field directional transmission with approximately planar wavefronts.">
      <figcaption>Near-field beam focusing and far-field directional transmission motivate flexible designs for mixed-field systems.</figcaption>
    </figure>
  </section>

  <section class="research-topic" aria-labelledby="research-antennas">
    <h3 id="research-antennas">Intelligent Antennas and Surfaces</h3>
    <p>Intelligent antennas and surfaces introduce new ways to shape wireless propagation. Reconfigurable antennas adjust their positions or orientations, while intelligent reflecting surfaces (IRSs) tune reflected signals to improve the wireless channel.</p>
    <p><strong>My focus:</strong> I focus on movable and rotatable antenna systems, IRS-assisted communications, and the joint design of antenna configurations, surface responses, and beamforming. My work also studies channel estimation and system deployment for large-scale IRSs.</p>
    <figure class="research-figure">
      <img src="/images/research/intelligent-antennas.svg" width="960" height="340" loading="lazy" decoding="async" alt="Movable and rotatable antennas send signals to users over direct paths and paths reflected by an intelligent surface. Antenna configurations and surface responses can be jointly optimized.">
      <figcaption>Reconfiguring antenna positions, orientations, and surface responses provides additional control over wireless channels.</figcaption>
    </figure>
  </section>

  <section class="research-topic" aria-labelledby="research-backscatter">
    <h3 id="research-backscatter">Backscatter Communications and Symbiotic Radio</h3>
    <p>Backscatter communications allow low-power devices to convey data by modulating and reflecting an incident radio signal. Symbiotic radio (SR) integrates these secondary transmissions with a primary communication link, allowing the two systems to share spectrum and signal resources.</p>
    <p><strong>My focus:</strong> I focus on symbiotic radio systems assisted by active RISs, STAR-RISs, and movable antennas. My research develops joint beamforming and resource-allocation methods to reduce transmit power, improve energy efficiency, and enhance transmission security while supporting both primary and secondary links.</p>
    <figure class="research-figure">
      <img src="/images/research/symbiotic-radio.svg" width="960" height="340" loading="lazy" decoding="async" alt="A primary transmitter serves its receiver while a backscatter device modulates the same incident signal to communicate with a secondary receiver.">
      <figcaption>The primary signal supports a conventional communication link and carries secondary information through backscatter modulation.</figcaption>
    </figure>
  </section>
</div>

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
  </div>

<nav class="home-links page-directory" aria-label="Homepage sections">
  <a class="home-btn" href="#hello">Hello!</a>
  <a class="home-btn" href="#research-interests">Research interests</a>
  <a class="home-btn" href="#news">News</a>
  <a class="home-btn" href="#selected-publications">Selected publications</a>
  <a class="home-btn" href="#academic-services">Academic Services</a>
</nav>
</div>

