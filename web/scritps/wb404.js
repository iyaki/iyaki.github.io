var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;

    var page_url = window.location.href;
    if (page_url == 'https://web.archive.org/web/20260614132030/https://archive.org/about/404.html')
        return; // dont check for our own 404 page
    var wb404_url = 'https://web.archive.org/web/20260614132030/https://archive.org/wayback/available?callback=wb404_callback&url=' + encodeURIComponent(page_url);
    s.src = wb404_url;
    var h = document.getElementsByTagName('head').item(0) || document.documentElement;
    h.appendChild(s);

    var l  = document.createElement('link');
    l.rel  = 'stylesheet';
    l.type = 'text/css';
    l.href = 'https://web.archive.org/web/20260614132030/https://archive.org/web/wb404.css';
    h.appendChild(l);
})();

wb404_callback = function(obj) {
    var archived_text = "Would you like to <a href='$url' onClick='wb404_record_click(this); return false;'>see an archived version of this page</a> in the Internet Archive's Wayback Machine?";
    var maybe_text    = "Would you like to <a href='$url' onClick='wb404_record_click(this); return false;'>check the Internet Archive's Wayback Machine</a> for an archived version of this page?";
    var wb_image = 'https://web.archive.org/web/20260614132030/https://archive.org/images/wayback404.png';

    if (!obj.archived_snapshots || !obj.archived_snapshots.closest || !obj.archived_snapshots.closest.available) {
        return false;
    }

    var url = obj.archived_snapshots.closest.url;
    var html = "<br/><div class='wb404_imagediv'><a href='"+url+"' onClick='wb404_record_click(this); return false;'><img class='wb404_image' src='" + wb_image + "'/></a></div>";

    if (true) {
        html += "<div class='wb404_text'>" + archived_text.replace('$url', url) + "</div><br clear='both'/>";
    } else {
        //Not supporting this for now
        html += "<div class='wb404_text'>" + maybe_text.replace('$url', url) + "</div><br clear='both'/>";
    }

    var wb404_div = document.getElementById('wb404');
    if (wb404_div) {
        // since wb404_callback is called by a trusted source via JSON-P, we can comfortably assume
        // the innerHTML value we are setting here doesn't contain XSS-injected values.
        // nosemgrep: javascript.browser.security.insecure-document-method.insecure-document-method
        wb404_div.innerHTML = html;
    }
}

wb404_record_click = function(link) {
    var img = new Image(1,1);
    img.src='https://web.archive.org/web/20260614132030/https://athena.archive.org/0.gif?wb404_clickthrough=1';
    // since wb404_callback is called by a trusted source via JSON-P, we can comfortably assume
    // this href value doesn't contain XSS-injected values.
    // nosemgrep: javascript.lang.security.detect-eval-with-expression.detect-eval-with-expression
    setTimeout(function(){window.location.href = link.href}, 100);
}

}

/*
     FILE ARCHIVED ON 13:20:30 Jun 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:55:04 Oct 12, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.551
  captures_list: 0.615
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.029
  esindex: 0.008
  cdx.remote: 6.091
  LoadShardBlock: 180.615 (6)
  PetaboxLoader3.datanode: 186.24 (7)
  load_resource: 522.526
  PetaboxLoader3.resolve: 512.239
*/
