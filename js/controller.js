let darkmode = (localStorage.getItem('jdev.site.darkmode') ?? 'true') == 'true';
if (!darkmode) { tbx('body').toggleClass('tbx-dark'); }

function savedark() {
    darkmode = !darkmode;
    localStorage.setItem('jdev.site.darkmode', darkmode ? 'true' : 'false');
}