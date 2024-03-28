function sweetAlert() {
  // Menampilkan SweetAlert dengan pesan bahwa login berhasil
  Swal.fire({
      title: 'Login Successful',
      text: 'Berhasil login ke dalam sistem',
      icon: 'success',
      confirmButtonText: 'OK'
  }).then((result) => { // Menambahkan event listener untuk saat pengguna menekan tombol OK
      if (result.isConfirmed) { // Jika pengguna menekan tombol OK
          // Tampilkan pesan loading
          Swal.fire({
              title: 'Loading...',
              allowEscapeKey: false,
              allowOutsideClick: false,
              didOpen: () => {
                  Swal.showLoading(); // Menampilkan ikon loading
                  setTimeout(() => { // Arahkan ke halaman selanjutnya setelah beberapa waktu tertentu
                      window.location.href = "file:///C:/Users/Asus/OneDrive/Desktop/exercise_PDW1/page2/halaman.html"; // Arahkan ke halaman selanjutnya setelah 2.5 detik
                  }, 2500); // Menggunakan setTimeout untuk menunggu 2.5 detik sebelum mengarahkan
              }
          });
      }
  });
}

// Fungsi untuk mengeksekusi SweetAlert saat login
function login() {
  sweetAlert(); // Memanggil fungsi sweetAlert saat fungsi login dipanggil
}
