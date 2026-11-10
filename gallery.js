// Photo galleries on the Services page.
// To add a photo: inside a .gallery-track, copy an <img class="gallery-slide" ...> line and change src/alt.
// Arrows and dots appear automatically when a gallery has 2 or more photos.
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-gallery]').forEach(function(g){
    var track=g.querySelector('.gallery-track');
    var slides=track.querySelectorAll('.gallery-slide');
    var dotsBox=g.querySelector('.gallery-dots');
    if(slides.length<2){g.classList.add('is-single');return;}
    var dots=[];
    slides.forEach(function(_,i){var d=document.createElement('span');dotsBox.appendChild(d);dots.push(d);});
    function index(){return Math.round(track.scrollLeft/track.clientWidth);}
    function go(i){var n=slides.length;i=(i+n)%n;track.scrollTo({left:i*track.clientWidth,behavior:reduce?'auto':'smooth'});}
    function update(){var i=index();dots.forEach(function(d,k){d.classList.toggle('on',k===i);});}
    g.querySelector('.gallery-prev').addEventListener('click',function(){go(index()-1);});
    g.querySelector('.gallery-next').addEventListener('click',function(){go(index()+1);});
    track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(index()+1);}if(e.key==='ArrowLeft'){e.preventDefault();go(index()-1);}});
    var t;track.addEventListener('scroll',function(){clearTimeout(t);t=setTimeout(update,60);});
    update();
  });
})();
