let notes = [];

// Fungsi untuk memuat catatan dari server
function loadNotes() {
    fetch('/api/notes')
        .then(response => response.json())
        .then(data => {
            notes = data;
            displayNotes();
        })
        .catch(error => console.error('Error loading notes:', error));
}

// Fungsi untuk menyimpan catatan ke server
function saveNotes() {
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notes)
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => console.error('Error saving notes:', error));
}

// Fungsi Menampilkan Catatan
function displayNotes() {
    const entriesList = document.getElementById('entries-list');
    entriesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'entry';
        noteElement.innerHTML = `<strong>Catatan #${index + 1}</strong><br>
                                 <strong>Nama: ${note.owner}</strong><br>
                                 <p>${note.content.replace(/\n/g, '<br>')}</p>
                                 <em>${note.date}</em>`;
        entriesList.appendChild(noteElement);
    });
}

// Fungsi Tambah Catatan
document.getElementById('add-note-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const owner = document.getElementById('note-owner').value;
    const password = document.getElementById('add-password').value;
    const content = document.getElementById('note-content').value;

    if (passwords.includes(password)) {
        const note = { owner, content, date: new Date().toLocaleString() };
        notes.push(note);
        saveNotes(); // Simpan catatan ke server
        document.getElementById('add-note-form').reset();
        alert('Catatan berhasil ditambahkan!');
        showPage('view-notes');
        displayNotes();
    } else {
        alert('Kata sandi tidak sesuai!');
    }
});

// Fungsi Hapus Catatan
document.getElementById('delete-note-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('delete-password').value;
    const index = parseInt(document.getElementById('note-index').value);

    if (passwords.includes(password)) {
        if (index >= 0 && index < notes.length) {
            notes.splice(index, 1);
            saveNotes(); // Simpan catatan yang diperbarui ke server
            alert('Catatan berhasil dihapus!');
            displayNotes();
        } else {
            alert('Nomor catatan tidak valid!');
        }
    } else {
        alert('Kata sandi tidak sesuai!');
    }
    document.getElementById('delete-note-form').reset();
});

// Fungsi Backup
function backupNotes() {
    const password = prompt("Masukkan kata sandi untuk backup:");
    if (passwords.includes(password)) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(notes));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "backup_notes.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    } else {
        alert("Kata sandi tidak sesuai!");
    }
}

// Fungsi Ekspor
document.getElementById('import-notes-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('import-password').value;
    const fileInput = document.getElementById('import-file').files[0];

    if (passwords.includes(password)) {
        if (fileInput) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const importedNotes = JSON.parse(event.target.result);
                notes = importedNotes;
                saveNotes(); // Simpan catatan yang diimpor ke server
                displayNotes();
                alert("Catatan berhasil diekspor!");
            };
            reader.readAsText(fileInput);
        } else {
            alert("Pilih file untuk diekspor!");
        }
    } else {
        alert("Kata sandi tidak sesuai!");
    }
}

// Fungsi Navigasi Halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Inisialisasi
loadNotes(); // Memuat catatan saat halaman pertama kali dimuat