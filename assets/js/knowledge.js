(function () {
  var DATA_URL = 'assets/data/knowledge.json?v=3';
  var input = document.getElementById('kb-search');
  var catSel = document.getElementById('kb-category');
  var chSel = document.getElementById('kb-chapter');
  var countEl = document.getElementById('kb-count');
  var resultsEl = document.getElementById('kb-results');
  if (!resultsEl) return;
  var data = [];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function stripTags(s) {
    return String(s == null ? '' : s).replace(/<[^>]*>/g, ' ');
  }

  function renderMath(el) {
    if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    }
  }

  function render() {
    var q = (input.value || '').trim().toLowerCase();
    var cat = catSel.value;
    var ch = chSel.value;
    var out = data.filter(function (it) {
      if (cat && it.category !== cat) return false;
      if (ch && it.chapter !== ch) return false;
      if (!q) return true;
      var hay = [it.term, it.en || '', (it.keywords || []).join(' '), it.summary || '',
        it.chapter || '', it.source || '', stripTags(it.detail || '')]
        .join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    countEl.textContent = '共 ' + out.length + ' 条';
    if (!out.length) {
      resultsEl.innerHTML = '<p class="kb-empty">没有找到匹配的内容，换个关键词试试。</p>';
      return;
    }
    resultsEl.innerHTML = out.map(function (it) {
      var tags = '<span class="kb-tag">' + esc(it.category) + '</span>' +
        '<span class="kb-tag kb-tag--ch">' + esc(it.chapter) + '</span>' +
        (it.source && it.source !== '核辐射物理及探测学'
          ? '<span class="kb-tag kb-tag--src">' + esc(it.source) + '</span>' : '');
      var formula = it.formula ? '<div class="kb-formula">' + it.formula + '</div>' : '';
      var detail = it.detail
        ? '<details class="kb-detail"><summary>详解 · 推导 · 考点</summary>' +
          '<div class="kb-detail__body">' + it.detail + '</div></details>'
        : '';
      var kw = (it.keywords && it.keywords.length)
        ? '<p class="kb-keywords">关键词：' + it.keywords.map(esc).join('、') + '</p>' : '';
      return '<article class="kb-card">' +
        '<div class="kb-card__head"><h3>' + esc(it.term) + '</h3>' +
        (it.en ? '<span class="kb-en">' + esc(it.en) + '</span>' : '') + '</div>' +
        '<div class="kb-tags">' + tags + '</div>' +
        formula +
        (it.summary ? '<p class="kb-summary">' + esc(it.summary) + '</p>' : '') +
        detail +
        kw +
        '</article>';
    }).join('');
    renderMath(resultsEl);
  }

  function chNum(c) {
    var m = String(c).match(/第\s*(\d+)\s*章/);
    if (m) return parseInt(m[1], 10);
    if (String(c).indexOf('课程补充') >= 0) return 98;
    if (String(c).indexOf('附录') >= 0) return 99;
    return 100;
  }

  var CAT_ORDER = { '概念': 0, '术语': 1, '公式': 2, '理论': 3, '推导': 4, '方法': 5, '考点': 6, '总结': 7, '工具': 8 };

  fetch(DATA_URL).then(function (r) { return r.json(); }).then(function (d) {
    data = d;
    var cats = [], chs = [];
    d.forEach(function (it) {
      if (cats.indexOf(it.category) < 0) cats.push(it.category);
      if (chs.indexOf(it.chapter) < 0) chs.push(it.chapter);
    });
    cats.sort(function (a, b) {
      return (CAT_ORDER[a] == null ? 50 : CAT_ORDER[a]) - (CAT_ORDER[b] == null ? 50 : CAT_ORDER[b]);
    });
    cats.forEach(function (c) {
      var o = document.createElement('option');
      o.value = c; o.textContent = c; catSel.appendChild(o);
    });
    chs.sort(function (a, b) { return chNum(a) - chNum(b); });
    chs.forEach(function (c) {
      var o = document.createElement('option');
      o.value = c; o.textContent = c; chSel.appendChild(o);
    });
    render();
  }).catch(function (e) {
    resultsEl.innerHTML = '<p class="kb-empty">知识库数据加载失败：' + esc(e.message) + '</p>';
  });

  input.addEventListener('input', render);
  catSel.addEventListener('change', render);
  chSel.addEventListener('change', render);
})();
