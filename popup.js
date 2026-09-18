async function renderTabs() {
  const tabs = await browser.tabs.query({ currentWindow: true });
  const list = document.getElementById("tab-list");

  for (const tab of tabs) {
    const card = document.createElement("div");
    card.className = "tab-card";
    card.textContent = tab.title;
    list.appendChild(card);
  }
}

renderTabs();