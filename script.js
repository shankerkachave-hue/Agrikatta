// ===== HAMBURGER MENU =====
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// ===== MODAL FUNCTIONS =====
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ===== LOGIN HANDLER =====
function handleLogin() {
    alert('✅ लॉगिन सफल! स्वागत है Agrikatta मध्ये!');
    closeModal('loginModal');
}

// ===== MOCK TEST FUNCTIONS =====
function startMockTest(type = 'full') {
    alert('📝 मॉक टेस्ट शुरू हो रहा है...\n\n(डेमो संस्करण)');
}

function selectExam(exam) {
    alert(`✅ ${exam} परीक्षा का चयन किया गया\n\nमॉक टेस्ट शुरू हो रहा है...`);
}

function viewPYQ() {
    alert('📚 पिछले वर्षों के प्रश्न (2020-2025)\n\nसभी परीक्षाओं के लिए उपलब्ध');
}

function downloadPDF(name) {
    alert(`📥 ${name}.pdf डाउनलोड के लिए तैयार है!\n\n(डेमो - वास्तविक में PDF डाउनलोड होगा)`);
}

console.log('✅ Agrikatta Website Loaded Successfully!');
console.log('🚀 Ready to help with exam preparation!');
