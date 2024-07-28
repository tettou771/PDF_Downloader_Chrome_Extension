chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getPDFLinks,
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "downloadPDFs") {
      request.pdfs.forEach(pdf => {
        chrome.downloads.download({
          url: pdf.url,
          filename: pdf.filename,
          saveAs: false
        });
      });
      chrome.action.setBadgeText({ text: request.pdfs.length.toString() });
      chrome.action.setBadgeBackgroundColor({ color: '#4CAF50' });
    }
  });
  
  function getPDFLinks() {
    const links = document.querySelectorAll('a[href$=".pdf"]');
    const pdfLinks = Array.from(links).map(link => ({
      url: link.href,
      filename: link.getAttribute('download') || link.href.split('/').pop()
    }));
  
    chrome.runtime.sendMessage({ action: "downloadPDFs", pdfs: pdfLinks });
  }
  
  