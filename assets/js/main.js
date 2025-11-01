async function loadPage(page) {
    const res = await fetch(`/pages/${page}.html`);
    const html = await res.text();
    document.getElementById('content').innerHTML = html;
}

// Home page setup - first load
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('DOMContentLoaded', () => loadPage('home'));

