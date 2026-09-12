// Link mappings - TODO: Replace placeholder links with actual URLs
const linkMappings = {
    'naver-store': '#', // TODO: 네이버 스토어 URL 입력
    'instagram': '#', // TODO: 인스타그램 URL 입력
    'youtube': '#', // TODO: 유튜브 URL 입력
    'tiktok': '#', // TODO: 틱톡 URL 입력
    'kakao': '#' // TODO: 카카오톡 채널/오픈채팅 URL 입력
};

// Link button names for user-friendly messages
const linkNames = {
    'naver-store': '네이버 스토어',
    'instagram': '인스타그램',
    'youtube': '유튜브',
    'tiktok': '틱톡',
    'kakao': '카카오 채널'
};

// Toast notification function
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show', 'slide-up');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Handle link button clicks
document.querySelectorAll('.link-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const linkKey = this.getAttribute('data-link');
        const url = linkMappings[linkKey];
        const linkName = linkNames[linkKey];

        // Add scale pop animation
        this.classList.add('scale-pop');
        setTimeout(() => {
            this.classList.remove('scale-pop');
        }, 300);

        // Check if URL is set (not placeholder)
        if (url === '#') {
            showToast(`${linkName} 링크 준비중이에요 🐣`);
        } else {
            // Open the actual link
            window.open(url, '_blank');
        }
    });
});

// SNS icon button clicks
document.querySelectorAll('.sns-icon-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const title = this.getAttribute('title');
        const href = this.getAttribute('href');

        if (href === '#') {
            showToast(`${title} 링크 준비중이에요 🐣`);
        } else {
            window.open(href, '_blank');
        }
    });
});

// Add touch feedback for mobile
document.querySelectorAll('.link-btn, .sns-icon-btn').forEach(button => {
    button.addEventListener('touchstart', function () {
        this.style.transform = 'scale(0.98)';
    });

    button.addEventListener('touchend', function () {
        this.style.transform = '';
    });
});

// Page load animation
window.addEventListener('load', function () {
    const card = document.querySelector('.max-w-\\[420px\\]');
    if (card) {
        card.classList.add('fade-in');
    }
});
