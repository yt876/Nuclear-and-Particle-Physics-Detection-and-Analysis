(function () {
  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    function sync() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '浅色' : '深色';
      btn.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    }
    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch (e) {}
      sync();
    });
    sync();
  }

  function initPrint() {
    var btn = document.getElementById('print-page');
    if (btn) btn.addEventListener('click', function () { window.print(); });
  }

  function initToc() {
    var content = document.querySelector('.course-content');
    if (!content) return;

    var headings = Array.prototype.slice.call(content.querySelectorAll('h2, h3, h4'));
    if (headings.length < 3) return;

    headings.forEach(function (h, i) {
      if (!h.id) h.id = 'sec-' + i;
    });

    var toc = document.createElement('aside');
    toc.className = 'toc';

    var title = document.createElement('p');
    title.className = 'toc__title';
    title.textContent = '本页目录';
    toc.appendChild(title);

    var ol = document.createElement('ol');
    headings.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      var clone = h.cloneNode(true);
      Array.prototype.forEach.call(clone.querySelectorAll('[class^="tag-"]'), function (n) {
        n.parentNode.removeChild(n);
      });
      a.textContent = clone.textContent.replace(/\s+/g, ' ').trim();
      if (h.tagName === 'H3') a.className = 'lvl3';
      if (h.tagName === 'H4') a.className = 'lvl3 lvl4';
      li.appendChild(a);
      ol.appendChild(li);
    });
    toc.appendChild(ol);

    var links = Array.prototype.slice.call(ol.querySelectorAll('a'));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (a) { a.classList.remove('active'); });
            var a = map[en.target.id];
            if (a) a.classList.add('active');
          }
        });
      }, { rootMargin: '-8% 0px -82% 0px', threshold: 0 });
      headings.forEach(function (h) { obs.observe(h); });
    }

    var chapters = headings.filter(function (h) { return h.tagName === 'H3'; });
    if (chapters.length > 1) {
      var nav = document.createElement('div');
      nav.className = 'toc__nav';
      var prev = document.createElement('button');
      prev.type = 'button';
      prev.textContent = '上一章';
      var next = document.createElement('button');
      next.type = 'button';
      next.textContent = '下一章';
      var cur = 0;
      function updateCur() {
        var y = window.scrollY + 140;
        var idx = 0;
        chapters.forEach(function (h, i) {
          if (h.getBoundingClientRect().top + window.scrollY <= y) idx = i;
        });
        cur = idx;
        prev.disabled = cur <= 0;
        next.disabled = cur >= chapters.length - 1;
      }
      prev.addEventListener('click', function () {
        if (cur > 0) chapters[cur - 1].scrollIntoView({ behavior: 'smooth' });
      });
      next.addEventListener('click', function () {
        if (cur < chapters.length - 1) chapters[cur + 1].scrollIntoView({ behavior: 'smooth' });
      });
      window.addEventListener('scroll', updateCur, { passive: true });
      updateCur();
      nav.appendChild(prev);
      nav.appendChild(next);
      toc.appendChild(nav);
    }

    document.body.appendChild(toc);

    var btn = document.createElement('button');
    btn.className = 'to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', '返回顶部');
    btn.innerHTML = '&uarr;';
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);
    function toggleTop() {
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    }
    window.addEventListener('scroll', toggleTop, { passive: true });
    toggleTop();
  }

  function init() {
    initTheme();
    initPrint();
    initToc();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
