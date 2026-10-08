(function () {
  var el = document.getElementById('clock');
  if (!el) return;
  var en = document.documentElement.lang === 'en';
  function tick() {
    try {
      el.textContent = new Intl.DateTimeFormat(en ? 'en-US' : 'es-HN', {
        hour: '2-digit', minute: '2-digit', hour12: en, timeZone: 'America/Tegucigalpa'
      }).format(new Date()) + (en ? ' local time' : ' hora local');
    } catch (e) {}
  }
  tick();
  setInterval(tick, 30000);
})();
