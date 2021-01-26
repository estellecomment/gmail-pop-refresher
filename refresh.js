function refreshPop(){
  var $el = document.getElementsByClassName("rP sA");
  if ($el.length > 0){
    console.log('Clicking "Check mail now" button to fetch mail.')
    $el = $el[0];
    $el.click();
  } else {
    console.log('[Gmail Pop refresher] "Check mail now" button not found. Mail not fetched. (Maybe the Gmail page has not finished loading?')
  }
  setTimeout(refreshPop, 10000)
}

console.log('[Gmail Pop refresher] Running Gmail Pop reresher')
console.log('[Gmail Pop refresher] For this extension to work, you should be on the Settings page, in Accounts, something like : https://mail.google.com/mail/u/0/#settings/accounts')
refreshPop()
