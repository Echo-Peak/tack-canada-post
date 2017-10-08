let trackingRegex = /^([a-z]{2})?[0-9]{9,16}([a-z]{2})?$/gi;
let props = {
  id:'tack-canada-post',
  title:'Track with canada post',
  contexts:['selection'],
  enabled:true
}
chrome.contextMenus.create(props);

chrome.contextMenus.onClicked.addListener((e,v,b)=>{
  let selected = e.selectionText;
  if(selected.match(trackingRegex)){
    chrome.tabs.create({ url: `https://www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber=${selected}&LOCALE=en` });
  }
});
