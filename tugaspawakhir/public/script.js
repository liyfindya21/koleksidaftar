// Data for collections
const collections = [
  { title: "Teknologi Terkini", author: "James Rudy Wardono", count: 3, bgColor: "#6B8AC9", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "J" },
  { title: "Random", author: "Rafi Aditya Nataningrat", count: 2, bgColor: "#8DA9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/1f485405-0d4a-4463-fc06-51fb01658c61.jpg", imgAlt: "Illustration of a man holding a megaphone and newspaper on blue background", authorInitial: "R" },
  { title: "Kesehatan Gigi", author: "Alexandra Falenghyun", count: 5, bgColor: "#A9C9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/87485ac6-f454-4d26-78e1-00c64776ca16.jpg", imgAlt: "Illustration of a smiling tooth holding a toothbrush and toothpaste on light blue background", authorInitial: "A" },
  { title: "Inspirasi Hidup", author: "Fajar Mahesa Adyoutomo", count: 7, bgColor: "#C9DFFB", imgSrc: "https://storage.googleapis.com/a1aa/image/d18088fa-2c4c-441f-9396-f026ec287471.jpg", imgAlt: "Illustration of a woman holding a shopping bag with hearts floating around on light blue background", authorInitial: "F" },
  { title: "Keuangan", author: "Aulia Nanda Pratama", count: 4, bgColor: "#6B8AC9", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "A" },
  { title: "Pengembangan Diri", author: "Bima Rizky Saputra", count: 4, bgColor: "#8DA9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "B" },
  { title: "Seni", author: "Dimas Aditya Nugroho", count: 2, bgColor: "#C9DFFB", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "D" },
  { title: "Kesehatan Jantung", author: "Farhan Ardiansyah Malik", count: 9, bgColor: "#C9DFFB", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "F" },
  { title: "Bahasa", author: "Gina Safira Ramadhani", count: 6, bgColor: "#6B8AC9", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "G" },
  { title: "Tokoh Bersejarah", author: "Hafiz Reza Alfarizi", count: 2, bgColor: "#6B8AC9", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "H" },
  { title: "Psikologi", author: "Intan Salsabila Zahra", count: 10, bgColor: "#A9C9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "I" },
  { title: "Sains", author: "Jovan Fajar Rahman", count: 4, bgColor: "#C9DFFB", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "J" },
  { title: "Wirausaha", author: "Karina Ayu Lestari", count: 1, bgColor: "#6B8AC9", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "K" },
  { title: "Hukum", author: "Leo Bagas Mahendra", count: 5, bgColor: "#8DA9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/c0d3f7f2-a12a-42ee-82af-6acf915968cf.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on blue background", authorInitial: "L" },
  { title: "Toleransi", author: "Maya Dwi Larasati", count: 7, bgColor: "#A9C9E0", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "M" },
  { title: "Relasi", author: "Naufal Ihsan Prakoso", count: 2, bgColor: "#C9DFFB", imgSrc: "https://storage.googleapis.com/a1aa/image/062059d5-d1cd-4c98-bad0-665cc11f0bd5.jpg", imgAlt: "Illustration of a brown box with social media icons and a key on light blue background", authorInitial: "N" }
];

let friends = [
  { id: 1, name: "Rafi Aditya Nataningrat", email: "rafi.nataningrat@example.com", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Alexandra Falenghyun", email: "alexandra.falenghyun@example.com", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Bima Rizky Saputra", email: "bima.saputra@example.com", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
  { id: 4, name: "Fajar Mahesa Adyoutomo", email: "fajar.adyoutomo@example.com", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 5, name: "Maya Dwi Larasati", email: "maya.larasati@example.com", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }
];

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menuButton");
const menuTeman = document.getElementById("menuTeman");
const pageKoleksi = document.getElementById("pageKoleksi");
const pageTeman = document.getElementById("pageTeman");
const collectionsGrid = document.getElementById("collectionsGrid");
const friendList = document.getElementById("friendList");
const friendCount = document.getElementById("friendCount");
const friendCountDropdown = document.getElementById("friendCountDropdown");
const friendCountDropdownBtn = document.getElementById("friendCountDropdownBtn");
const friendCountDropdownNumber = document.getElementById("friendCountDropdownNumber");

function createCollectionCard({ title, author, count, bgColor, imgSrc, imgAlt, authorInitial }) {
  const card = document.createElement("div");
  card.className = "flex border border-[#B7B7B7] rounded-lg overflow-hidden bg-white";

  const leftDiv = document.createElement("div");
  leftDiv.className = "flex-shrink-0 w-24 flex items-center justify-center p-2";
  leftDiv.style.backgroundColor = bgColor;

  const img = document.createElement("img");
  img.className = "w-16 h-16 object-contain";
  img.src = imgSrc;
  img.alt = imgAlt;

  leftDiv.appendChild(img);

  const rightDiv = document.createElement("div");
  rightDiv.className = "p-4 flex flex-col justify-center space-y-2 flex-grow";

  const h3 = document.createElement("h3");
  h3.className = "text-sm font-bold text-[#1A1A1A] leading-tight";
  h3.textContent = title;

  const authorDiv = document.createElement("div");
  authorDiv.className = "flex items-center space-x-2 text-xs text-[#8B8B8B] font-semibold tracking-widest";
  const authorCircle = document.createElement("span");
  authorCircle.className = "w-5 h-5 rounded-full bg-[#B7B7B7] flex items-center justify-center text-[#6B6B6B] font-bold";
  authorCircle.textContent = authorInitial;
  const authorName = document.createElement("span");
  authorName.textContent = author.toUpperCase();
  authorDiv.append(authorCircle, authorName);

  const articleDiv = document.createElement("div");
  articleDiv.className = "flex items-center space-x-2 text-xs text-[#8B8B8B] font-semibold tracking-widest";
  const bookIcon = document.createElement("i");
  bookIcon.className = "fas fa-book-open text-[#6B6B6B] text-[10px]";
  const articleCount = document.createElement("span");
  articleCount.textContent = `${count} ARTIKEL`;
  articleDiv.append(bookIcon, articleCount);

  rightDiv.append(h3, authorDiv, articleDiv);
  card.append(leftDiv, rightDiv);
  return card;
}

function renderCollections() {
  collectionsGrid.innerHTML = "";
  collections.forEach(col => collectionsGrid.appendChild(createCollectionCard(col)));
}

function createFriendItem(friend) {
  const li = document.createElement("li");
  li.className = "flex items-center space-x-4 p-3 hover:bg-gray-100 relative";

  const avatar = document.createElement("img");
  avatar.src = friend.avatar;
  avatar.alt = `Avatar of ${friend.name}`;
  avatar.className = "w-10 h-10 rounded-full object-cover flex-shrink-0";

  const infoDiv = document.createElement("div");
  infoDiv.className = "flex flex-col flex-grow min-w-0";
  const nameSpan = document.createElement("span");
  nameSpan.className = "font-semibold text-gray-900 truncate";
  nameSpan.textContent = friend.name;
  const emailSpan = document.createElement("span");
  emailSpan.className = "text-xs text-gray-500 truncate";
  emailSpan.textContent = friend.email;
  infoDiv.append(nameSpan, emailSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-gray-400 hover:text-red-600 focus:outline-none";
  deleteBtn.setAttribute("aria-label", `Hapus teman ${friend.name}`);
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    friends = friends.filter(f => f.id !== friend.id);
    renderFriends();
  });

  li.append(avatar, infoDiv, deleteBtn);
  return li;
}

function renderFriends() {
  friendList.innerHTML = "";
  friends.forEach(friend => friendList.appendChild(createFriendItem(friend)));
  friendCount.textContent = friends.length;
  friendCountDropdownNumber.textContent = friends.length;
}

function openSidebar() {
  sidebar.classList.remove("translate-x-full");
  sidebar.setAttribute("aria-hidden", "false");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");
}

function closeSidebar() {
  sidebar.classList.add("translate-x-full");
  sidebar.setAttribute("aria-hidden", "true");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");
}

function showPage(pageId) {
  const pages = [pageKoleksi, pageTeman];
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.remove("hidden");
      page.classList.add("fade-enter-active");
      setTimeout(() => page.classList.remove("fade-enter-active"), 300);
    } else {
      page.classList.add("hidden");
    }
  });
}

menuButton.addEventListener("click", () => {
  sidebar.classList.contains("translate-x-full") ? openSidebar() : closeSidebar();
});

overlay.addEventListener("click", closeSidebar);

menuTeman.addEventListener("click", () => {
  closeSidebar();
  menuTeman.classList.add("bg-[#0B1E4F]", "text-white");
  setTimeout(() => menuTeman.classList.remove("bg-[#0B1E4F]", "text-white"), 200);
  showPage("pageTeman");
});

sidebar.querySelectorAll("button[data-menu]").forEach(btn => {
  if (btn.id !== "menuTeman") {
    btn.addEventListener("click", () => {
      closeSidebar();
      showPage("pageKoleksi");
    });
  }
});

friendCountDropdownBtn.addEventListener("click", () => {
  const isHidden = friendCountDropdown.classList.contains("hidden");
  friendCountDropdown.classList.toggle("hidden", !isHidden);
  friendCountDropdownBtn.setAttribute("aria-expanded", isHidden);
});

document.addEventListener("click", e => {
  if (!friendCountDropdown.contains(e.target) && !friendCountDropdownBtn.contains(e.target)) {
    friendCountDropdown.classList.add("hidden");
    friendCountDropdownBtn.setAttribute("aria-expanded", "false");
  }
});

renderCollections();
renderFriends();
showPage("pageKoleksi");
