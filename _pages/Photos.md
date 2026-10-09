---
#title: "Photos"
permalink: /Photos.html
---

<style>
:root{
  --main-color:#7F6000;
  --main-dark:#5f4700;
  --soft-bg:#faf8f3;
  --card-bg:#ffffff;
  --hero-bg-start:#fffdf8;
  --hero-bg-end:#f7f1e6;
  --border-light:#ece6d8;
  --border-mid:#e4d7b7;
  --text-main:#222222;
  --text-soft:#666666;
  --shadow-soft:0 8px 24px rgba(0,0,0,0.06);
  --shadow-hover:0 18px 38px rgba(0,0,0,0.16);
}

/* ===== overall ===== */
.page__content{
  font-size:17px;
  line-height:1.8;
  color:var(--text-main);
}

.page__content a{
  color:#1f5fae;
  text-decoration:none;
}

.page__content a:hover{
  text-decoration:underline;
}

/* ===== hero ===== */
.photo-hero{
  position:relative;
  overflow:hidden;
  background:linear-gradient(135deg,var(--hero-bg-start) 0%,var(--hero-bg-end) 100%);
  border:1px solid var(--border-light);
  border-radius:24px;
  padding:28px 32px;
  margin-bottom:22px;
  box-shadow:var(--shadow-soft);
}

.photo-hero::after{
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

.photo-hero h1{
  margin:0 0 10px 0;
  font-size:2rem;
  font-weight:800;
  color:var(--text-main);
}

.photo-hero p{
  margin:0;
  color:var(--text-soft);
}

/* ===== nav ===== */
.photo-nav{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin:0 0 28px 0;
}

.photo-nav a{
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

.photo-nav a:hover{
  background:#fff7dd;
  border-color:#d8c38d;
  transform:translateY(-2px);
  box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

/* ===== section ===== */
.photo-section{
  background:var(--card-bg);
  border:1px solid var(--border-light);
  border-radius:22px;
  padding:22px 22px 18px 22px;
  margin-bottom:28px;
  box-shadow:var(--shadow-soft);
}

.photo-section h2{
  margin:0 0 18px 0;
  font-size:1.36rem;
  font-weight:800;
  color:var(--text-main);
  padding-bottom:10px;
  border-bottom:1px solid #efe8d9;
}

/* ===== gallery: force 3 columns on desktop ===== */
.photo-gallery{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:20px;
  align-items:start;
}

/* ===== item ===== */
.photo-item{
  position:relative;
  display:flex;
  flex-direction:column;
  background:#fffdfa;
  border:1px solid #f0e8d7;
  border-radius:18px;
  padding:12px 12px 14px 12px;
  box-shadow:0 6px 16px rgba(0,0,0,0.04);
  transition:transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  overflow:visible; /* 允许内部图片放大跳出边框 */
  z-index:1;
}

.photo-item:hover{
  transform:translateY(-3px);
  box-shadow:0 12px 28px rgba(0,0,0,0.08);
  border-color:#e6d5ab;
  z-index:100; /* 悬停时，将当前格子的层级提到最高，避免被旁边图片遮挡 */
}

/* ===== thumb ===== */
.photo-thumb{
  position:relative;
  width:100%;
  aspect-ratio: 3 / 2; /* 核心1：强制提供标准的 3:2 容器尺寸 */
  border-radius:14px;
  overflow:visible; /* 允许图片放大后溢出该容器 */
  background:#f5f5f5;
}

/* ===== image ===== */
.photo-item img{
  position:absolute; /* 核心2：绝对定位。不管原图多大，强行让它填满上面的 3:2 容器，从而保证所有原始照片大小一致！ */
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover; /* 核心3：自适应裁剪，保证照片不变形 */
  border-radius:14px;
  cursor:pointer;
  display:block;
  z-index:2;
  transition:transform 0.4s ease, box-shadow 0.4s ease;
  transform-origin:center center;
}

/* 突破排版的放大：鼠标悬停放大为原来两倍，并显示出来 */
.photo-item:hover img{
  transform:scale(2); 
  box-shadow:0 30px 80px rgba(0,0,0,0.40);
  z-index:10; 
}

/* 轻微遮罩 */
.photo-thumb::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:42%;
  border-radius:0 0 14px 14px;
  background:linear-gradient(to top, rgba(0,0,0,0.16), rgba(0,0,0,0));
  opacity:0;
  transition:opacity 0.28s ease;
  pointer-events:none;
  z-index:3;
}

.photo-item:hover .photo-thumb::after{
  opacity:1;
}

/* ===== caption ===== */
.photo-caption{
  margin-top:12px;
  text-align:center;
  font-size:14px;
  color:var(--text-soft);
  line-height:1.45;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0 6px;
  transition:transform 0.22s ease, color 0.22s ease;
}

.photo-item:hover .photo-caption{
  transform:translateY(-1px);
  color:#4d4d4d;
}

/* ===== lightbox (保持不变) ===== */
#lightbox{
  display:none;
  position:fixed;
  z-index:9999;
  inset:0;
  background:rgba(0,0,0,0.93);
  justify-content:center;
  align-items:center;
  padding:24px;
  box-sizing:border-box;
}

#lightbox-content{
  position:relative;
  max-width:92vw;
  max-height:90vh;
  display:flex;
  align-items:center;
  justify-content:center;
}

#lightbox-img{
  max-width:92vw;
  max-height:84vh;
  border-radius:14px;
  box-shadow:0 28px 72px rgba(0,0,0,0.55);
  animation:zoomIn 0.25s ease;
}

#lightbox-caption{
  position:absolute;
  left:50%;
  bottom:-42px;
  transform:translateX(-50%);
  color:#f3f3f3;
  font-size:15px;
  text-align:center;
  width:max-content;
  max-width:80vw;
}

#lightbox-close{
  position:absolute;
  top:18px;
  right:28px;
  font-size:42px;
  line-height:1;
  color:white;
  cursor:pointer;
  user-select:none;
  z-index:10001;
}

.lightbox-arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:52px;
  height:52px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:28px;
  color:#fff;
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  cursor:pointer;
  user-select:none;
  transition:all 0.2s ease;
  z-index:10001;
}

.lightbox-arrow:hover{
  background:rgba(255,255,255,0.20);
  transform:translateY(-50%) scale(1.05);
}

#lightbox-prev{ left:22px; }
#lightbox-next{ right:22px; }

@keyframes zoomIn{
  from{transform:scale(0.86); opacity:0.55;}
  to{transform:scale(1); opacity:1;}
}

/* ===== responsive ===== */
@media (max-width: 980px){
  .photo-gallery{
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px){
  .photo-hero{ padding:22px 18px; }
  .photo-hero h1{ font-size:1.65rem; }
  .photo-section{ padding:18px 16px 14px 16px; }
  .photo-gallery{ grid-template-columns:1fr; }
  .photo-item:hover img{ transform:scale(2); }
  #lightbox-close{ right:18px; top:16px; font-size:38px; }
  .lightbox-arrow{ width:44px; height:44px; font-size:24px; }
  #lightbox-prev{ left:12px; }
  #lightbox-next{ right:12px; }
  #lightbox-caption{ bottom:-36px; font-size:14px; max-width:88vw; }
}
</style>

<div class="directory-layout">
  <div class="directory-main">
<div class="photo-hero">
  <h1>📷 Photos</h1>
  <p>Moments from academic activities, campus life, and personal travels.</p>
</div>


<span id="phd"></span>
<div class="photo-section">
  <h2>PhD (2024–Present)</h2>
  <div class="photo-gallery">

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2602dinner.jpg" alt="Laboratory Dinner" data-caption="[2026-02] Laboratory Dinner">
      </div>
      <div class="photo-caption">[2026-02] Laboratory Dinner</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2511dongxichong.jpg" alt="Dongxiyong Hiking" data-caption="[2025-11] Dongxiyong Hiking">
      </div>
      <div class="photo-caption">[2025-11] Dongxiyong Hiking</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2507Dinner.jpg" alt="Laboratory Dinner" data-caption="[2025-07] Laboratory Dinner">
      </div>
      <div class="photo-caption">[2025-07] Laboratory Dinner</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2507TanglangMou.jpg" alt="Tanglang Mountain Hiking" data-caption="[2025-07] Tanglang Mountain Hiking">
      </div>
      <div class="photo-caption">[2025-07] Tanglang Mountain Hiking</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2503YangtaiMoun2.jpg" alt="Yangtai Mountain Hiking" data-caption="[2025-03] Yangtai Mountain Hiking">
      </div>
      <div class="photo-caption">[2025-03] Yangtai Mountain Hiking</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/DongxiCong1.jpg" alt="Dongxiyong Hiking" data-caption="[2024-08] Dongxiyong Hiking">
      </div>
      <div class="photo-caption">[2024-08] Dongxiyong Hiking</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2407TanglangMou.jpg" alt="Tanglang Mountain Hiking" data-caption="[2024-07] Tanglang Mountain Hiking">
      </div>
      <div class="photo-caption">[2024-07] Tanglang Mountain Hiking</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/MIMO.jpg" alt="MIMO Course at Tsinghua Uni." data-caption="[2024-07] MIMO Course at Tsinghua Uni.">
      </div>
      <div class="photo-caption">[2024-07] MIMO Course at Tsinghua Uni.</div>
    </div>

  </div>
</div>

<span id="masters"></span>
<div class="photo-section">
  <h2>Master's (2021–2024)</h2>
  <div class="photo-gallery">

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2405Gra.jpg" alt="Graduation Photo" data-caption="[2024-05] Graduation Photo">
      </div>
      <div class="photo-caption">[2024-05] Graduation Photo</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2405Gra2.jpg" alt="Graduation Photo" data-caption="[2024-05] Graduation Photo">
      </div>
      <div class="photo-caption">[2024-05] Graduation Photo</div>
    </div>

  </div>
</div>

<span id="personal"></span>
<div class="photo-section">
  <h2>Personal</h2>
  <div class="photo-gallery">

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/Yantai.jpg" alt="Yantai Travel" data-caption="[2026-02] Yantai Travel">
      </div>
      <div class="photo-caption">[2026-02] Yantai Travel</div>
    </div>

    <div class="photo-item">
      <div class="photo-thumb">
        <img src="/images/2401eimen.jpg" alt="Xiamen Travel" data-caption="[2024-01] Xiamen Travel">
      </div>
      <div class="photo-caption">[2024-01] Xiamen Travel</div>
    </div>

  </div>
</div>
  </div>

<nav class="photo-nav page-directory" aria-label="Photo categories">
  <a href="#phd">PhD (2024–Present)</a>
  <a href="#masters">Master's (2021–2024)</a>
  <a href="#personal">Personal</a>
</nav>
</div>

<div id="lightbox">
  <span id="lightbox-close">&times;</span>
  <div id="lightbox-prev" class="lightbox-arrow">&#10094;</div>
  <div id="lightbox-next" class="lightbox-arrow">&#10095;</div>

  <div id="lightbox-content">
    <img id="lightbox-img" alt="Enlarged photo">
    <div id="lightbox-caption"></div>
  </div>
</div>

<script>
const images = Array.from(document.querySelectorAll(".photo-item img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

function openLightbox(index){
  currentIndex = index;
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.dataset.caption || img.alt || "";
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.style.display = "none";
  document.body.style.overflow = "";
}

function showPrev(){
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

function showNext(){
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener("click", function(){
    openLightbox(index);
  });
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", function(e){
  e.stopPropagation();
  showPrev();
});
nextBtn.addEventListener("click", function(e){
  e.stopPropagation();
  showNext();
});

lightbox.addEventListener("click", function(e){
  if(e.target === lightbox){
    closeLightbox();
  }
});

document.addEventListener("keydown", function(e){
  if(lightbox.style.display === "flex"){
    if(e.key === "Escape") closeLightbox();
    if(e.key === "ArrowLeft") showPrev();
    if(e.key === "ArrowRight") showNext();
  }
});
</script>
