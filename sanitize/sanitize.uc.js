WindowHook.register("chrome://browser/content/sanitize.xul", function(aWindow) {
  with(aWindow) {
    userChrome.log("sanitize.uc.js verhindert bewusst bestimmte �nderungen in dem Fenster zum L�schen der Chronik (aufgerufen mit Strg+Umschalt+Entf).");
    document.getElementsByAttribute("preference", "privacy.cpd.history")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.cpd.formdata")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.cpd.cookies")[0].disabled = true;    
    document.getElementsByAttribute("preference", "privacy.cpd.siteSettings")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.cpd.sessions")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.cpd.extensions-tabmix")[0].disabled = true;
  }
});

WindowHook.register("chrome://browser/content/preferences/sanitize.xul", function(aWindow) {
  with(aWindow) {
    userChrome.log("sanitize.uc.js verhindert bewusst bestimmte �nderungen in dem Fenster Extras/Einstellungen/Datenschutz/Angaben zum L�schen der Chronik.");
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.cookies")[0].checked = false;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.formdata")[0].checked = false;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.history")[0].checked = false;

    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.history")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.formdata")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.cookies")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.downloads")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.passwords")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.sessions")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.siteSettings")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.offlineApps")[0].disabled = true;
    document.getElementsByAttribute("preference", "privacy.clearOnShutdown.cache")[0].disabled = true;
  }
});