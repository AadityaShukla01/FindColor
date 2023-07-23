let color = 'red';

//when our extension gets installed      
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
});