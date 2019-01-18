function create(type) {
  return document.createElement(type);
}

function text(el, value) {
  el.innerText = value;
}

function html(el, value) {
  el.innerHTML = value;
}

function append(el) {
  document.body.appendChild(el);
}

const h1 = create(h1);
text(h1, 'hello world');
append(h1);s
