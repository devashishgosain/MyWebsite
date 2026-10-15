/* =========================================================
   Shared header (menu) and footer, injected into every page.
   - To add/rename a menu item: edit NAV below.
   - To change footer links/address: edit FOOTER below.
   Each page just needs <div id="site-header"></div> and
   <div id="site-footer"></div> plus this script.
   ========================================================= */

const NAV = [
  { href: 'index.html',        label: 'About' },
  { href: 'research.html',     label: 'Research' },
  { href: 'publications.html', label: 'Publications' },
  { href: 'group.html',        label: 'Group' },
  { href: 'teaching.html',     label: 'Teaching' },
  { href: 'students.html',     label: 'Prospective&nbsp;Students' },
  { href: 'service.html',      label: 'Service' },
];

const HEADER = `
<header class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-name">D. Gosain</a>
    <ul class="nav-links">
      ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
    </ul>
  </div>
</header>`;

const FOOTER = `
<footer id="contact">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-links">
        <a href="mailto:dgosain@cse.iitb.ac.in">Email (IITB)</a>
        <a href="mailto:dgosain@mpi-inf.mpg.de">Email (MPI)</a>
        <a href="https://www.devashishgosain.com/assets/files/Devashish_CV.pdf" target="_blank" rel="noopener">CV</a>
        <a href="https://www.devashishgosain.com/assets/files/PhD_Thesis.pdf" target="_blank" rel="noopener">PhD Thesis</a>
        <a href="https://scholar.google.co.in/citations?user=VyhXD2EAAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
        <a href="https://dblp.org/pid/207/8090.html" target="_blank" rel="noopener">DBLP</a>
        <a href="https://x.com/DevashishGosain" target="_blank" rel="noopener">X</a>
      </div>
    </div>
    <div class="footer-fine">
      <span>© ${new Date().getFullYear()} Devashish Gosain.</span>
      <span>Assistant Professor, CSE, IIT Bombay · Associated Researcher, MPI for Informatics</span>
    </div>
  </div>
</footer>`;

(function () {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = HEADER;
  if (footerSlot) footerSlot.outerHTML = FOOTER;

  // Highlight the menu item for the current page
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
})();
