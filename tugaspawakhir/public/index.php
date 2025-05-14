<?php
require_once __DIR__ . '/../config.php'; // config.php ada di luar folder 'public'
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <title>Koleksi Saya & Daftar Teman</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styless.css" />
</head>
<body class="bg-[#E9EBEC] min-h-screen flex flex-col relative">

  <!-- Navbar -->
  <nav class="bg-[#0B1E4F] flex items-center justify-between px-4 md:px-8 py-4 border-b border-[#1A2E6E] relative z-30">
    <div class="flex items-center space-x-4">
      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <img alt="Icon of an open book" class="w-6 h-6" src="https://storage.googleapis.com/a1aa/image/cf704e49-7948-4f9c-cf4d-49a99f94ce81.jpg" />
      </div>
    </div>
    <div class="flex-1 flex justify-center space-x-8 text-white text-xs font-semibold tracking-widest">
      <a href="#" class="hover:underline nav-link" data-page="koleksi">BERANDA</a>
      <a href="#" class="hover:underline nav-link" data-page="artikel">ARTIKEL</a>
      <a href="#" class="hover:underline nav-link" data-page="tentang">TENTANG KAMI</a>
    </div>
    <div class="flex items-center space-x-6 ml-auto">
      <img alt="User profile" class="w-8 h-8 rounded-full object-cover hidden sm:block" src="https://storage.googleapis.com/a1aa/image/a0344b43-aba6-4fc2-e4a7-c8f861a01589.jpg" />
      <button aria-label="Menu" id="menuButton" class="text-white text-2xl focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>

  <!-- Sidebar -->
  <aside id="sidebar" class="fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform translate-x-full z-40 flex flex-col" aria-hidden="true">
    <div class="px-6 py-5 border-b border-gray-300 flex items-center space-x-4">
      <img src="https://storage.googleapis.com/a1aa/image/a0344b43-aba6-4fc2-e4a7-c8f861a01589.jpg" class="w-12 h-12 rounded-full object-cover" alt="User avatar" />
      <div>
        <p class="font-bold text-gray-900">Rafi Natanginrat</p>
        <p class="text-xs text-gray-500">rafi@example.com</p>
      </div>
    </div>
    <nav class="flex flex-col mt-4 space-y-1 px-4">
      <button class="menu-item" data-menu="simpanan">Simpanan</button>
      <button class="menu-item" id="menuTeman" data-menu="teman">Teman</button>
      <button class="menu-item" data-menu="koleksi">Koleksi</button>
      <button class="menu-item" data-menu="performaku">Performaku</button>
      <button class="menu-item" data-menu="keluar">Keluar</button>
    </nav>
  </aside>

  <!-- Overlay -->
  <div id="overlay" class="fixed inset-0 bg-black bg-opacity-30 opacity-0 pointer-events-none z-30 transition-opacity"></div>

  <!-- Main -->
  <main class="flex-grow relative z-10">

    <!-- Koleksi -->
    <section id="pageKoleksi" class="p-6 md:p-8 max-w-full" aria-label="Koleksi Saya Page">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0 max-w-full">
        <div class="flex items-center space-x-2 relative">
          <span class="font-bold text-xl text-[#1A1A1A]">Koleksi Saya</span>
          <button class="add-btn">+</button>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full" id="collectionsGrid">
        <!-- kamu bisa tampilkan koleksi dari database di sini juga nanti -->
      </div>
    </section>

    <!-- Teman -->
    <section id="pageTeman" class="p-6 md:p-8 max-w-full hidden" aria-label="Daftar Teman Page">
      <h1 class="text-3xl font-bold text-[#1A1A1A] mb-6">Daftar Teman</h1>
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <form class="flex-grow max-w-full md:max-w-lg relative">
          <label class="sr-only" for="friendSearch">Cari Nama/Email</label>
          <input id="friendSearch" type="search" placeholder="Cari Nama/Email" class="search-input" />
        </form>
        <div class="flex items-center space-x-4">
          <button class="friend-add-btn">+</button>
          <div class="friend-dropdown-btn" id="friendCountDropdownBtn" tabindex="0" aria-haspopup="true" aria-expanded="false">
            <span id="friendCount">0</span>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <div id="friendCountDropdown" class="dropdown hidden" role="menu">
            <p class="dropdown-text">Jumlah Teman Anda: <span id="friendCountDropdownNumber">0</span></p>
          </div>
        </div>
      </div>

      <!-- ✅ Daftar teman dari database -->
      <ul id="friendList" class="friend-list">
        <?php
        $result = $conn->query("SELECT * FROM friends");
        while ($row = $result->fetch_assoc()) {
          echo "<li class='flex items-center space-x-4 p-3 hover:bg-gray-100'>
            <img src='{$row['avatar']}' alt='Avatar of {$row['name']}' class='w-10 h-10 rounded-full object-cover'>
            <div class='flex flex-col flex-grow min-w-0'>
              <span class='font-semibold text-gray-900 truncate'>{$row['name']}</span>
              <span class='text-xs text-gray-500 truncate'>{$row['email']}</span>
            </div>
          </li>";
        }
        ?>
      </ul>

      <footer class="mt-10 bg-[#0B1E4F] text-white text-center py-8 rounded-lg max-w-full">
        <p class="text-lg font-semibold mb-2">Siapkah Anda Untuk Membaca Lebih Banyak</p>
        <p class="italic max-w-md mx-auto">Rasakan sensasi membaca dalam semesta kata...<br />Membaca adalah seni diam yang penuh warna.</p>
      </footer>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
