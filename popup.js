async function renderTabs() {
  const tabs = await browser.tabs.query({ currentWindow: true });
  const list = document.getElementById("tab-list");

  for (const tab of tabs) {
    const card = document.createElement("div");
    card.className = "tab-card";
    card.textContent = tab.title;
    card.addEventListener("click", () => {
      browser.tabs.update(tab.id, { active: true });
      window.close();
    });
    list.appendChild(card);
  }
}

renderTabs();