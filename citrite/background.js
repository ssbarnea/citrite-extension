console.log("it started!");

function navigate(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: url});
  });
}


//chrome.runtime.onInstalled.addListener(function(details) { if (details.reason == "update") { chrome.windows.create({url: "popup.html", type: "popup"}); } });

/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == "loading") {

        if(/google\.(com|co\.uk).+search\?q.(CF|CA|CP|CR|JC|EA|EXT|PR|PGM|SOM|TC|TR|WP|XRT|IT|XOP)\-\d+/.test(tab.url)) {
            var ticket =  /\w+\-\d+/.exec(tab.url);
            navigate("https://jira.uk.xensource.com/QuickSearch.jspa?searchString=" + ticket[0]);
        }
        else if(/google\.(com|co\.uk).+search\?q.(ACER|AFRL|AMD|AMZ|AT|AVTM|BCH|BET|BIT|BR|BRO|CANL|CAR|CC|CER|CHE|CIS|CRD|CSC|CXD|CYB|DELL|DOC|EGEN|EMC|EMX|ER|FE|FUJ|GEMT|HCL|HDX|HFX|HIDG|HIT|HP|HUA|IBM|INTC|INTX|ISV|JAXC|LSI|LSIN|MAR|MLX|MS|
MTHA|MTIT|NCSC|NEC|NETAPP|NIC|NICS|NTGR|NVHP|NVIDIA|NXS|ORCL|OSX|PC|QL|RAX|SCTX|SCTXI|SF|SLS|SRVT|SS|STAR|STRA|SYN|TESCO|TST|UGIS|VRTA|XCAMD|XCEHP|XCEN|XCHP|XCSUP|XCT|XCWGP|XDELL|XHP|XSB|XWS|ZLIT|ZZ)\-\d+/.test(tab.url)) {
            var ticket =  /\w+\-\d+/.exec(tab.url);
            navigate("https://tracker.vmd.citrix.com/QuickSearch.jspa?searchString=" + ticket[0]);
        }
    }
});
*/

chrome.omnibox.onInputEntered.addListener(function(text) {
     console.log("on: "  + text);

     if (text == "xxxx") {
          navigate("http://poi.ro");
     }
});

console.log("it worked!");
