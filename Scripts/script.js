var i = 0,
  j = 0;
function Theme() {
  if (document.getElementById('navbar').classList.contains('bg-light')) {
    document.getElementById('navbar').classList.remove('bg-light');
    document.getElementById('navbar').classList.remove('navbar-light');
    document.getElementById('navbar').classList.add('bg-dark');
    document.getElementById('navbar').classList.add('navbar-dark');
    document.getElementById('add').classList.remove('btn-outline-secondary');
    document.getElementById('add').classList.add('btn-light');
    document.getElementById('logo').classList.remove('fas');
    document.getElementById('logo').classList.add('far');
    document.getElementById('dark').innerHTML = 'Change Theme to Light';
    document.body.style.backgroundColor = 'grey';
  } else {
    document.getElementById('navbar').classList.remove('bg-dark');
    document.getElementById('navbar').classList.remove('navbar-dark');
    document.getElementById('navbar').classList.add('bg-light');
    document.getElementById('navbar').classList.add('navbar-light');
    document.getElementById('add').classList.remove('btn-light');
    document.getElementById('add').classList.add('btn-outline-secondary');
    document.getElementById('logo').classList.remove('far');
    document.getElementById('logo').classList.add('fas');
    document.getElementById('dark').innerHTML = 'Change Theme to Dark';
    document.body.style.backgroundColor = 'white';
  }
}
function clone() {
  const div = document.createElement('div');
  div.innerHTML = template();
  document.getElementById('NoteContainer').after(div);
}
function template() {
  return `
  <div class="Note">
  <div class="NoteHeader">
    <span class="NoteClose">
      <a href="#" onclick='this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode); return false;'>
        <i class="far fa-window-close"></i>
      </a>
    </span>
  </div>
  <div class="NoteTitle" >
    <input type="text" id="Title"  class="inp" placeholder="Enter the Title"/>
  </div>
  <div class="NoteBody">
    <textarea id="Body" class="inp" oninput="auto_grow(this)" placeholder="Enter the body"></textarea>
  </div>
</div>`;
}
function auto_grow(element) {
  element.style.height = '5px';
  element.style.height = element.scrollHeight + 'px';
}
