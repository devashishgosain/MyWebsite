/* =========================================================
   Small page behaviours. Content lives in the HTML files —
   nothing here needs editing when you add entries.
   ========================================================= */

/* ---- News: show the first N items, toggle the rest ----
   <ol class="news-list" data-show="8"> ... </ol>
   <button class="btn-line" data-news-toggle> ... </button>   */
document.querySelectorAll('.news-list[data-show]').forEach(list => {
  const limit = parseInt(list.dataset.show, 10);
  const extra = [...list.children].slice(limit);
  const btn = list.parentElement.querySelector('[data-news-toggle]');
  extra.forEach(li => li.hidden = true);
  if (!btn) return;
  if (!extra.length) { btn.hidden = true; return; }
  const label = btn.querySelector('span');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    extra.forEach(li => li.hidden = expanded);
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('open', !expanded);
    label.textContent = expanded ? 'Show earlier updates' : 'Show fewer updates';
  });
});

/* ---- Publications: bold my name, fill in per-year and total counts ---- */
const ME = 'Devashish Gosain';
document.querySelectorAll('.pub-authors').forEach(el => {
  el.innerHTML = el.innerHTML.replace(ME, `<span class="me">${ME}</span>`);
});

const pubYears = document.querySelectorAll('.pub-year');
pubYears.forEach(group => {
  const n = group.querySelectorAll('.pub-item').length;
  const count = group.querySelector('.count');
  if (count) count.textContent = `${n} publication${n === 1 ? '' : 's'}`;
});

const pubTotal = document.getElementById('pub-total');
if (pubTotal && pubYears.length) {
  const total = document.querySelectorAll('.pub-year .pub-item').length;
  const years = [...pubYears].map(g => +g.querySelector('.yr').textContent).filter(Boolean);
  pubTotal.textContent = `${total} WORKS, ${Math.min(...years)}–${Math.max(...years)}`;
}
