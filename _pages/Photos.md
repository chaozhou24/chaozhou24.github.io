---
#title: "Photos"
permalink: /Photos.html
---

<style>

/* 图片布局 */
.photo-gallery{
  display:flex;
  flex-wrap:wrap;
  gap:20px;
}

/* 图片容器 */
.photo-item{
  /* 移除了 overflow:hidden; 否则放大时会被裁切 */
  position: relative; 
}

/* 图片样式 */
.photo-item img{
  width:300px; /* 保证所有图片初始宽度一致 */
  /* height: 200px; 如果你的原图长宽比不一样，可以取消注释这行并配合下一行使用 */
  /* object-fit: cover; 保证图片不变形 */
  border-radius:12px; /* 圆角属性移到这里 */
  transition:transform 0.35s ease, box-shadow 0.35s ease;
  cursor:pointer;
  
  /* 层级设置 */
  position: relative;
  z-index: 1; 
}

/* 悬停放大 + 阴影 */
.photo-item img:hover{
  transform:scale(2); /* 放大为原来的两倍 */
  box-shadow:0 20px 50px rgba(0,0,0,0.6); /* 加深阴影，让立体感更强 */
  z-index: 10; /* 悬停时置于顶层，防止被相邻图片遮挡 */
}

/* Lightbox 背景 */
#lightbox{
  display:none;
  position:fixed;
  z-index:9999;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.9);
  justify-content:center;
  align-items:center;
}

/* 弹出图片 */
#lightbox img{
  max-width:90%;
  max-height:90%;
  border-radius:10px;
  box-shadow:0 20px 60px rgba(0,0,0,0.7);
  animation:zoomIn 0.3s ease;
}

/* 关闭按钮 */
#lightbox-close{
  position:absolute;
  top:25px;
  right:40px;
  font-size:40px;
  color:white;
  cursor:pointer;
}

/* 动画 */
@keyframes zoomIn{
  from{transform:scale(0.8);}
  to{transform:scale(1);}
}

</style>

# Photos

Jump to:
- [Academic Activities](#academic-activities)
- [Group Activities](#group-activities)
- [My Trip](#my-trip)

---

<span id="academic-activities"></span>
## Academic Activities

<div class="photo-gallery">

<div class="photo-item">
<img src="/images/academic1.jpg">
</div>

<div class="photo-item">
<img src="/images/academic2.jpg">
</div>

<div class="photo-item">
<img src="/images/academic3.jpg">
</div>

</div>

---

<span id="group-activities"></span>
## Group Activities

<div class="photo-gallery">

<div class="photo-item">
<img src="/images/2507TanglangMou.jpg">
</div>

<div class="photo-item">
<img src="/images/2507Dinner.jpg">
</div>

<div class="photo-item">
<img src="/images/2504YangtaiMoun.jpg">
</div>

<div class="photo-item">
<img src="/images/2510backetball.jpg">
</div>

</div>

---

<span id="my-trip"></span>
## My Trip

<div class="photo-gallery">

<div class="photo-item">
<img src="/images/trip1.jpg">
</div>

<div class="photo-item">
<img src="/images/trip2.jpg">
</div>

<div class="photo-item">
<img src="/images/trip3.jpg">
</div>

</div>

---

<!-- Lightbox -->
<div id="lightbox">
<span id="lightbox-close">&times;</span>
<img id="lightbox-img">
</div>

<script>

const images=document.querySelectorAll(".photo-item img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const closeBtn=document.getElementById("lightbox-close");

images.forEach(img=>{
img.onclick=function(){
lightbox.style.display="flex";
lightboxImg.src=this.src;
}
});

closeBtn.onclick=function(){
lightbox.style.display="none";
}

lightbox.onclick=function(e){
if(e.target===lightbox){
lightbox.style.display="none";
}
}

</script>
