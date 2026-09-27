/**
 * Global Search Engine - Cyber of Zone
 */

function debounce(func, delay = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchBtn || !searchModal) return;

  // Buka Modal
  searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchModal.classList.add('flex');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  });

  // Tutup Modal
  if (closeSearch) {
    closeSearch.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    });
  }

  // Fungsi Pencarian
  const performSearch = () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query === '') {
      searchResults.innerHTML = '<p class="text-gray-400 text-xs italic">Ketikkan kata kunci untuk mencari...</p>';
      return;
    }

    const itemsToSearch = [];

    // Membaca array materiList dari js/data.js atau yang terdefinisi
    if (typeof materiList !== 'undefined' && Array.isArray(materiList)) {
      materiList.forEach((item, index) => {
        itemsToSearch.push({
          title: item.title || item.judul || `Materi ${index + 1}`,
          badge: item.badge || item.kategori || "Materi TJKT",
          link: `materi.html?id=${index}`,
          index: index
        });
      });
    }

    // Item Tambahan (Tutorial & Quiz)
    itemsToSearch.push(
      { title: "Membuat Bootable USB via Rufus", badge: "Tutorial OS", link: "kegiatan.html" },
      { title: "Instalasi Linux Debian Server", badge: "Tutorial OS", link: "kegiatan.html" },
      { title: "Quiz Interaktif TJKT", badge: "Quiz", link: "quiz.html" }
    );

    // Filter Pencarian
    const filtered = itemsToSearch.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.badge.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = '<p class="text-gray-400 text-xs py-2">Materi tidak ditemukan.</p>';
      return;
    }

    // Render Hasil ke HTML
    const fragment = document.createDocumentFragment();

    filtered.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'block p-3 rounded border border-gray-200 dark:border-white/10 hover:bg-blue-500/10 transition mb-2';
      a.innerHTML = `
        <p class="font-bold text-sm text-gray-800 dark:text-white">${item.title}</p>
        <span class="text-xs font-mono text-blue-500">${item.badge}</span>
      `;

      a.addEventListener('click', (e) => {
        // Jika sedang berada di materi.html dan mengklik materi lain
        if (window.location.pathname.includes('materi.html') && item.index !== undefined) {
          e.preventDefault();
          if (typeof loadMateri === 'function') {
            loadMateri(item.index);
          } else if (typeof renderMateri === 'function') {
            renderMateri(item.index);
          }
          history.pushState(null, '', item.link);
          searchModal.classList.add('hidden');
          searchModal.classList.remove('flex');
        }
        // Jika dari index.html, navigasi biasa ke materi.html?id=X akan berjalan otomatis via href
      });

      fragment.appendChild(a);
    });

    searchResults.appendChild(fragment);
  };

  if (searchInput) {
    searchInput.addEventListener('input', debounce(performSearch, 100));
  }
});