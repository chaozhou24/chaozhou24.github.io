---
title: "Publications"
permalink: /Publications.html
---

<style>
/* Monochrome academic typography, matching the homepage. */
body { color: #333; background: #fff; }
.page__content, .page__content * { font-family: Georgia, "Times New Roman", serif; }
.page__content { color: #333; font-size: 18px; line-height: 1.65; }
.page__content p, .page__content li { text-align: justify; text-justify: inter-word; }
.page__content a, .sidebar a, .masthead a, .page__footer a,
.page__content a:visited, .sidebar a:visited, .masthead a:visited { color: #111; font-weight: 700; text-decoration: none; }
.page__content a, .page__footer a { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.page__content a:hover, .sidebar a:hover, .masthead a:hover, .page__footer a:hover { color: #111; text-decoration: underline; text-underline-offset: 3px; }
a:focus-visible { outline: 2px solid #111; outline-offset: 4px; }
.greedy-nav .visible-links a::before { background: #111; }
.sidebar, .sidebar .social-icons i { color: #333 !important; }
.sidebar .author__name { color: #111; font-family: Georgia, "Times New Roman", serif; }
.sidebar .author__avatar img { width: 160px; height: 160px; object-fit: cover; object-position: center; padding: 0; border: 0; border-radius: 50%; }

.pub-layout { display: block; }
.pub-main { min-width: 0; }
.pub-hero { margin: 0 0 24px; padding: 0; border: 0; background: none; box-shadow: none; }
.page__content .pub-hero h1 { margin: 0 0 20px; padding: 0; border: 0; color: #111; font-size: 32px; font-weight: 700; line-height: 1.2; }
.pub-hero p { margin: 0; }
.topic-nav { display: flex; flex-wrap: wrap; gap: 10px 24px; margin: 22px 0 32px; }
.topic-nav a { font-size: 16px; }
.pub-section { margin: 36px 0 0; padding: 0; border: 0; background: none; box-shadow: none; scroll-margin-top: 80px; }
.page__content .pub-section h2 { margin: 0 0 20px; padding: 0 0 10px; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 28px; font-weight: 700; line-height: 1.3; text-align: left; }
.topic-list { list-style: none; padding: 0; margin: 0; counter-reset: publication; }
.topic-list li { position: relative; counter-increment: publication; margin: 0 0 24px; padding: 0 0 0 40px; text-align: justify; text-justify: inter-word; }
.topic-list li::before { content: "[" counter(publication) "]"; position: absolute; left: 0; top: 0; font-weight: 700; color: #111; }
.page__content b, .page__content strong { color: #111; }
.topic-list i { color: #444; }
.pub-badge { display: inline; margin-left: 6px; padding: 0; border: 0; border-radius: 0; background: none; color: #666; font-size: 14px; font-weight: 400; white-space: nowrap; }
.pub-badge::before { content: "["; }
.pub-badge::after { content: "]"; }
.badge-award { color: #111; font-weight: 700; }
.preprint-link { font-size: 14px; white-space: nowrap; }
@media (max-width: 767px) {
  .page__content { font-size: 17px; line-height: 1.6; }
  .page__content .pub-hero h1 { font-size: 28px; }
  .page__content .pub-section h2 { font-size: 24px; }
  .sidebar .author__avatar img { width: 75px; height: 75px; }
  .topic-nav { gap: 10px 18px; }
  .pub-section { margin-top: 30px; }
  .topic-list li { padding-left: 30px; }
}
</style>

<div class="pub-layout">
  <div class="pub-main">

    <div class="pub-hero">
      <h1>Publications</h1>
      <p>
        This page summarizes my publications in near-field communications, intelligent antenna and surface, and symbiotic radio.
      </p>
    </div>

    <div class="topic-nav">
      <a href="#near-field">Near-field Communications (NFC)</a>
      <a href="#intelligent-antenna">Intelligent Antenna and Surface (IAaS)</a>
      <a href="#symbiotic-radio">Symbiotic Radio (SR)</a>
    </div>

    <span class='anchor' id='publications'></span>

    <div class="pub-section" id="near-field">
      <h2>Near-Field Communications</h2>
      <ul class="topic-list">
        <li>
         <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Li Chen, Yi Gong, Chengwen Xing,
          "<a href="https://ieeexplore.ieee.org/document/11643502">Low-complexity Design for Beam Coverage in Near-field and Far-field: A Fourier Transform Approach</a>,"
           <i>IEEE Transactions on Wireless Communications</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span> &middot; <a class="preprint-link" href="https://arxiv.org/abs/2602.05666">arXiv</a>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Chengwen Xing, and Jianhua Zhang,
          "<a href="https://ieeexplore.ieee.org/document/11519553">Near-field Physical Layer Security: Robust Beamforming under Location Uncertainty</a>,"
          <i>IEEE Transactions on Wireless Communications</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span> &middot; <a class="preprint-link" href="https://arxiv.org/abs/2601.13549">arXiv</a>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Hai Lin, and Yi Gong,
          "<a href="https://ieeexplore.ieee.org/document/11448582">MA-enhanced Mixed Near-field and Far-field Covert Communications</a>,"
          <i>IEEE Transactions on Wireless Communications</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span> &middot; <a class="preprint-link" href="https://arxiv.org/abs/2511.08107">arXiv</a>
        </li>

        <li>
          Qianglong Dai, Yong Zeng, Huizhi Wang, Changsheng You, <b>Chao Zhou</b>, et al.,
          "<a href="https://ieeexplore.ieee.org/document/11328117">A Tutorial on MIMO-OFDM ISAC: From Far-Field to Near-Field</a>,"
          <i>IEEE Communications Surveys &amp; Tutorials</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          Liujia Yao, Changsheng You, Zixuan Huang, <b>Chao Zhou</b>, Zhaohui Yang, and Xiaoyang Li,
          "<a href="https://arxiv.org/abs/2601.10391">Codebook Design for Limited Feedback in Near-Field XL-MIMO Systems</a>,"
          <i>arXiv preprint arXiv:2601.10391</i>, 2026.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          Cong Zhou, Changsheng You, <b>Chao Zhou</b>, Hongqiang Cheng, and Shuo Shi,
          "<a href="https://arxiv.org/abs/2503.04681">Mixed Near-field and Far-field Target Localization for Low-altitude Economy</a>,"
          <i>arXiv preprint arXiv:2503.04681</i>, 2025.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          Jiapeng Li, Changsheng You, <b>Chao Zhou</b>, Yong Zeng, and Zhiyong Feng,
          "<a href="https://arxiv.org/abs/2512.21480">Near-field Target Localization: Effect of Hardware Impairments</a>,"
          <i>arXiv preprint arXiv:2512.21480</i>, 2025.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          Jiapeng Li, Changsheng You, and <b>Chao Zhou</b>,
          "<a href="https://ieeexplore.ieee.org/document/11162419">Extremely Large-scale Lens Antenna Array: Location-aware Near-field Beamforming</a>,"
          in <i>Proc. IEEE ICC Workshops</i>, 2025.
          <span class="pub-badge badge-conf">Conference</span>
        </li>
      </ul>
    </div>

    <div class="pub-section" id="intelligent-antenna">
      <h2>Intelligent Antenna and Surface</h2>
      <ul class="topic-list">
        <li>
          Liujia Yao, Changsheng You, <b>Chao Zhou</b>, Beixiong Zheng, and Weidong Mei,
          "<a href="https://ieeexplore.ieee.org/document/11329408">Position Optimization for Two-Layer Movable Antenna Systems</a>,"
          <i>IEEE Wireless Communications Letters</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Beixiong Zheng, Xiaodan Shao, and Rui Zhang,
          "<a href="https://ieeexplore.ieee.org/document/11039664">Rotatable Antennas for Integrated Sensing and Communications</a>,"
          <i>IEEE Wireless Communications Letters</i>, 2025.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          Cong Zhou, Changsheng You, <b>Chao Zhou</b>, Weidong Mei, Zhi Chen, Chengwen Xing, and Rui Zhang,
          "<a href="https://arxiv.org/abs/2507.01624">Frequency-switching Array Enhanced Physical-Layer Security in Terahertz Bands: A Movable Antenna Perspective</a>,"
          <i>arXiv preprint arXiv:2507.01624</i>, 2025.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Liujia Yao, Weijie Yuan, Beixiong Zheng, and Nan Wu,
          "<a href="https://arxiv.org/abs/2512.15092">Rotatable IRS-Assisted 6DMA Communications: A Two-timescale Design</a>,"
          <i>arXiv preprint arXiv:2512.15092</i>, 2025.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Shiqi Gong, Bin Lyu, Beixiong Zheng, and Yi Gong,
          "<a href="https://ieeexplore.ieee.org/document/10791444">Channel Estimation for XL-IRS Assisted Wireless Systems with Double-sided Visibility Regions</a>,"
          in <i>Proc. IEEE WCSP</i>, 2024.
          <span class="pub-badge badge-conf">Conference</span>
          <span class="pub-badge badge-award">Best Paper Award</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Tianyu Liu, and Bin Lyu,
          "<a href="https://ieeexplore.ieee.org/document/10868156">Deployment Optimization for XL-IRS Assisted Multi-User Communications</a>,"
          in <i>Proc. IEEE ICSIDP</i>, 2024.
          <span class="pub-badge badge-conf">Conference</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Bin Lyu, Dinh Thai Hoang, and Shimin Gong,
          "<a href="https://ieeexplore.ieee.org/document/10012813">Reconfigurable Intelligent Surface Assisted Secure Symbiotic Radio Multicast Communications</a>,"
          in <i>Proc. IEEE VTC Fall</i>, 2022.
          <span class="pub-badge badge-conf">Conference</span>
        </li>
      </ul>
    </div>

    <div class="pub-section" id="symbiotic-radio">
      <h2>Symbiotic Radio</h2>
      <ul class="topic-list">
        <li>
          <b>Chao Zhou</b>, Bin Lyu, Changsheng You, and Dinh Thai Hoang,
          "<a href="https://ieeexplore.ieee.org/document/10342707">Cooperative Commensal and Parasitic Symbiotic Radio Communication Systems</a>,"
          <i>IEEE Transactions on Communications</i>, 2024.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Bin Lyu, Changsheng You, and Ziwei Liu,
          "<a href="https://ieeexplore.ieee.org/document/10636790">Movable Antenna Enabled Symbiotic Radio Systems: An Opportunity for Mutualism</a>,"
          <i>IEEE Wireless Communications Letters</i>, 2024.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          Bin Lyu, <b>Chao Zhou</b>, Shimin Gong, Dinh Thai Hoang, and Ying-Chang Liang,
          "<a href="https://ieeexplore.ieee.org/document/10531760">Energy-Efficiency Maximization for STAR-RIS Enabled Cell-Free Symbiotic Radio Communications</a>,"
          <i>IEEE Transactions on Cognitive Communications and Networking</i>, 2024.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Bin Lyu, Shimin Gong, and Changsheng You,
          "<a href="https://ieeexplore.ieee.org/document/10227341">Active STAR-RIS-Assisted Symbiotic Radio Communications Under Hardware Impairments</a>,"
          <i>IEEE Communications Letters</i>, 2023.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Bin Lyu, Youhong Feng, and Dinh Thai Hoang,
          "<a href="https://ieeexplore.ieee.org/document/10224271">Transmit Power Minimization for STAR-RIS Empowered Symbiotic Radio Communications</a>,"
          <i>IEEE Transactions on Cognitive Communications and Networking</i>, 2023.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          Bin Lyu, <b>Chao Zhou</b>, Shimin Gong, Dinh Thai Hoang, and Ying-Chang Liang,
          "<a href="https://ieeexplore.ieee.org/document/10102794">Robust Secure Transmission for Active RIS Enabled Symbiotic Radio Multicast Communications</a>,"
          <i>IEEE Transactions on Wireless Communications</i>, 2023.
          <span class="pub-badge badge-journal">Journal</span>
        </li>
      </ul>
    </div>

  </div>

</div>
