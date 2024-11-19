const passwords = ['alam1312', 'alam1502']; // Kata sandi yang valid

let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Fungsi Menampilkan Catatan
function displayNotes() {
    console.log('Menampilkan catatan...'); // Tambahkan log untuk debugging
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
    console.log('Catatan berhasil ditampilkan:', notes); // Tambahkan log untuk debugging
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
        localStorage.setItem('notes', JSON.stringify(notes));
        document.getElementById('add-note-form').reset();
        alert('Catatan berhasil ditambahkan!');
        showPage('view-notes');
        displayNotes();
    } else {
        alert('Kata sandi tidak sesuai!');
    }
    console.log('Catatan saat ini:', notes); // Tambahkan log untuk debugging
});

// Fungsi Hapus Catatan
document.getElementById('delete-note-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('delete-password').value;
    const index = parseInt(document.getElementById('note-index').value);

    if (passwords.includes(password)) {
        if (index >= 0 && index < notes.length) {
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
            alert('Catatan berhasil dihapus!');
            displayNotes();
        } else {
            alert('Nomor catatan tidak valid!');
        }
    } else {
        alert('Kata sandi tidak sesuai!');
    }
    document.getElementById('delete-note-form').reset();
    console.log('Catatan setelah dihapus:', notes); // Tambahkan log untuk debugging
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
    console.log('Catatan saat ini:', notes); // Tambahkan log untuk debugging
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
                localStorage.setItem('notes', JSON.stringify(notes));
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
    console.log('Catatan setelah impor:', notes); // Tambahkan log untuk debugging
});

// Fungsi Navigasi Halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Inisialisasi
displayNotes();