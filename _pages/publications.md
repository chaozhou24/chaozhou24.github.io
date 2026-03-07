---
#title: "Publications"
permalink: /Publications.html
---

<style>
:root{
  --main-color:#7F6000;
  --main-dark:#5f4700;
  --main-light:#b88a00;
  --accent-blue:#1f5fae;
  --soft-bg:#faf8f3;
  --card-bg:#ffffff;
  --hero-bg-start:#fffdf8;
  --hero-bg-end:#f7f1e6;
  --border-light:#ece6d8;
  --border-mid:#e4d7b7;
  --text-main:#222222;
  --text-soft:#555555;
  --shadow-soft:0 8px 24px rgba(0,0,0,0.05);
  --shadow-hover:0 14px 28px rgba(0,0,0,0.08);
}

html{
  scroll-behavior:smooth;
}

.page__content{
  font-size:17px;
  line-height:1.8;
  color:var(--text-main);
}

/* ===== layout ===== */
.pub-layout{
  display:grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap:28px;
  align-items:start;
}

.pub-main{
  min-width:0;
}

/* ===== Page header ===== */
.pub-hero{
  background:linear-gradient(135deg,var(--hero-bg-start) 0%,var(--hero-bg-end) 100%);
  border:1px solid var(--border-light);
  border-radius:24px;
  padding:30px 34px;
  margin-bottom:20px;
  box-shadow:var(--shadow-soft);
  position:relative;
  overflow:hidden;
}

.pub-hero::after{
  content:"";
  position:absolute;
  right:-70px;
  top:-70px;
  width:210px;
  height:210px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(184,138,0,0.10) 0%, rgba(184,138,0,0.03) 55%, rgba(184,138,0,0) 72%);
  pointer-events:none;
}

.pub-hero h1{
  margin:0 0 10px 0;
  font-size:2rem;
  font-weight:800;
  color:var(--text-main);
}

.pub-hero p{
  margin:0;
  color:var(--text-soft);
  font-size:1.02rem;
}

/* ===== top topic nav ===== */
.topic-nav{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin:0 0 28px 0;
}

.topic-nav a{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:8px 16px;
  border-radius:999px;
  background:#fff;
  border:1px solid var(--border-mid);
  color:var(--main-color) !important;
  font-weight:700;
  text-decoration:none !important;
  box-shadow:0 3px 10px rgba(0,0,0,0.03);
  transition:all 0.22s ease;
}

.topic-nav a:hover{
  background:#fff7dd;
  border-color:#d8c38d;
  transform:translateY(-2px);
  box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

/* ===== right floating toc ===== */
.pub-toc{
  position:sticky;
  top:90px;
  background:#fffdfa;
  border:1px solid var(--border-light);
  border-radius:18px;
  padding:18px 16px;
  box-shadow:var(--shadow-soft);
}

.pub-toc-title{
  margin:0 0 12px 0;
  font-size:0.98rem;
  font-weight:800;
  color:var(--main-dark);
}

.pub-toc ul{
  list-style:none;
  margin:0;
  padding:0;
}

.pub-toc li{
  margin:8px 0;
}

.pub-toc a{
  display:block;
  padding:8px 10px;
  border-radius:10px;
  color:#6a6a6a !important;
  text-decoration:none !important;
  font-size:0.95rem;
  font-weight:600;
  line-height:1.45;
  transition:all 0.2s ease;
}

.pub-toc a:hover{
  background:#fff5da;
  color:var(--main-color) !important;
}

.pub-toc a.active{
  background:#fff0c7;
  color:var(--main-dark) !important;
  border-left:4px solid var(--main-color);
  padding-left:12px;
}

/* ===== Topic cards ===== */
.pub-section{
  background:var(--card-bg);
  border:1px solid var(--border-light);
  border-radius:22px;
  padding:22px 24px 18px 24px;
  margin-bottom:24px;
  box-shadow:var(--shadow-soft);
  transition:box-shadow 0.22s ease, transform 0.22s ease;
  scroll-margin-top: 90px;
}

.pub-section:hover{
  box-shadow:var(--shadow-hover);
  transform:translateY(-2px);
}

.pub-section h2{
  margin:0 0 16px 0;
  font-size:1.35rem;
  font-weight:800;
  color:var(--text-main);
  display:flex;
  align-items:center;
  gap:10px;
  padding-bottom:10px;
  border-bottom:1px solid #efe8d9;
}

/* ===== Publication list ===== */
.topic-list{
  list-style:none;
  padding-left:0;
  margin:0;
  counter-reset:pub-item;
}

.topic-list li{
  counter-increment:pub-item;
  position:relative;
  margin-bottom:14px;
  padding:13px 14px 13px 52px;
  border-radius:14px;
  background:#fffdfa;
  border:1px solid #f1eadb;
  line-height:1.7;
  transition:all 0.2s ease;
}

.topic-list li:hover{
  background:#fffaf0;
  border-color:#e7d7ae;
  box-shadow:0 8px 18px rgba(0,0,0,0.05);
}

.topic-list li::before{
  content:"[" counter(pub-item) "]";
  position:absolute;
  left:14px;
  top:13px;
  font-weight:800;
  color:var(--accent-blue);
  font-size:0.98rem;
}

/* ===== text styles ===== */
.page__content a{
  color:var(--accent-blue);
  text-decoration:none;
  font-weight:600;
}

.page__content a:hover{
  text-decoration:underline;
}

.page__content b,
.page__content strong{
  color:#111;
}

i{
  color:#444;
}

/* ===== Badges ===== */
.pub-badge{
  display:inline-block;
  margin-left:8px;
  padding:2px 9px;
  border-radius:999px;
  font-size:0.78rem;
  font-weight:700;
  vertical-align:middle;
  border:1px solid transparent;
}

.badge-award{
  background:#fff3cd;
  color:#8a6500;
  border-color:#efd27a;
}

.badge-arxiv{
  background:#eef5ff;
  color:#275ea8;
  border-color:#c9dcff;
}

.badge-journal{
  background:#eefaf1;
  color:#237245;
  border-color:#cdebd7;
}

.badge-conf{
  background:#f6f0ff;
  color:#6c3fb1;
  border-color:#dfcff8;
}

/* ===== Responsive ===== */
@media (max-width: 1100px){
  .pub-layout{
    grid-template-columns: 1fr;
  }

  .pub-toc{
    display:none;
  }
}

@media (max-width:768px){
  .pub-hero{
    padding:24px 20px;
  }

  .pub-hero h1{
    font-size:1.7rem;
  }

  .pub-section{
    padding:18px 16px 14px 16px;
  }

  .topic-list li{
    padding:12px 12px 12px 48px;
  }

  .topic-list li::before{
    left:12px;
  }
}
</style>

<div class="pub-layout">
  <div class="pub-main">

    <div class="pub-hero">
      <h1>📝 Publications</h1>
      <p>
        This page summarizes my publications in near-field communications, intelligent antenna and surface, and symbiotic radio.
      </p>
    </div>

    <div class="topic-nav">
      <a href="#near-field">📡 Near-Field Communications</a>
      <a href="#intelligent-antenna">⚙ Intelligent Antenna and Surface</a>
      <a href="#symbiotic-radio">🤝 Symbiotic Radio</a>
    </div>

    <span class='anchor' id='publications'></span>

    <div class="pub-section" id="near-field">
      <h2>📡 Near-Field Communications</h2>
      <ul class="topic-list">
        <li>
          Qianglong Dai, Yong Zeng, Huizhi Wang, Changsheng You, <b>Chao Zhou</b>, et al.,
          "<a href="https://ieeexplore.ieee.org/document/11328117">A Tutorial on MIMO-OFDM ISAC: From Far-Field to Near-Field</a>,"
          <i>IEEE Communications Surveys &amp; Tutorials</i>, 2026.
          <span class="pub-badge badge-journal">Journal</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Chengwen Xing, and Jianhua Zhang,
          "<a href="https://arxiv.org/abs/2601.13549">Near-field Physical Layer Security: Robust Beamforming under Location Uncertainty</a>,"
          <i>arXiv preprint arXiv:2601.13549</i>, 2026.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          Liujia Yao, Changsheng You, Zixuan Huang, <b>Chao Zhou</b>, Zhaohui Yang, and Xiaoyang Li,
          "<a href="https://arxiv.org/abs/2601.10391">Codebook Design for Limited Feedback in Near-Field XL-MIMO Systems</a>,"
          <i>arXiv preprint arXiv:2601.10391</i>, 2026.
          <span class="pub-badge badge-arxiv">arXiv</span>
        </li>

        <li>
          <b>Chao Zhou</b>, Changsheng You, Cong Zhou, Hai Lin, and Yi Gong,
          "<a href="https://arxiv.org/abs/2511.08107">MA-enhanced Mixed Near-field and Far-field Covert Communications</a>,"
          <i>arXiv preprint arXiv:2511.08107</i>, 2025.
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
      <h2>⚙ Intelligent Antenna and Surface</h2>
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
      <h2>🤝 Symbiotic Radio</h2>
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

  <aside class="pub-toc">
    <div class="pub-toc-title">On this page</div>
    <ul>
      <li><a href="#near-field" class="toc-link">📡 Near-Field Communications</a></li>
      <li><a href="#intelligent-antenna" class="toc-link">⚙ Intelligent Antenna and Surface</a></li>
      <li><a href="#symbiotic-radio" class="toc-link">🤝 Symbiotic Radio</a></li>
    </ul>
  </aside>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".pub-section[id]");
  const tocLinks = document.querySelectorAll(".toc-link");

  function setActiveLink() {
    let currentId = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = section.id;
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
});
</script>
