const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
  constructor() {
    this.target = { x: 0.5, y: 0.5 }; 
    this.cursor = { x: 0.5, y: 0.5 }; 
    this.speed = 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }
  onMouseMove(e) {
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  render() {
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);

    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
      Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
      if(window.innerWidth >= 767){
        this.bindAll();
        window.addEventListener("mousemove", this.onMouseMove);
        this.raf = requestAnimationFrame(this.render);
      }
  }
}

new Cursor();
const links = document.querySelectorAll('.links');
const customCursor = document.getElementById('cursor');
links.forEach(el => el.addEventListener('mousemove', activeCursor))
links.forEach(el => el.addEventListener('mouseleave', removeActiveCursor))
function activeCursor(event){
        customCursor.classList.add('active')
}
function removeActiveCursor(event){
    customCursor.classList.remove('active')
}
window.addEventListener('mousemove', event => {
    
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
burger.addEventListener('click', toggleMenu);

function toggleMenu(){
 menu.classList.toggle('active');
 burger.classList.toggle('active');
 document.body.classList.toggle('lock');
 }