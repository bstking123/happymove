// 네비게이션바 공통 JavaScript

// 네비게이션 스크롤 효과
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 25px rgba(59, 130, 246, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.2)';
        }
    }
});

// 부드러운 스크롤
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 로고 특수 효과
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1) rotate(0deg)';
            logo.style.textShadow = '3px 3px 0px #bfdbfe, 0 0 10px rgba(96, 165, 250, 0.5)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(-2deg)';
            logo.style.textShadow = '2px 2px 0px #bfdbfe';
        });
    }
});

// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // 햄버거 아이콘 변경
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // 모바일 메뉴 링크 클릭 시 메뉴 닫기
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // 모바일 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});

// 모바일 사용자 드롭다운 토글
document.addEventListener('DOMContentLoaded', function() {
    const mobileUserInfo = document.querySelector('.mobile-auth-section .user-info');
    const mobileUserDropdown = document.querySelector('.mobile-user-dropdown');

    if (mobileUserInfo && mobileUserDropdown) {
        mobileUserInfo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileUserDropdown.classList.toggle('active');
        });

        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', function(e) {
            if (!mobileUserInfo.contains(e.target) && !mobileUserDropdown.contains(e.target)) {
                mobileUserDropdown.classList.remove('active');
            }
        });
    }
});

// 네비게이션바 HTML 생성 함수 (index.html과 정확히 동일)
function createNavbar() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <i class="fas fa-bolt"></i>
                    DOMAWARP
                </div>
                <ul class="nav-links">
                    <li><a href="#home">홈</a></li>
                    <li><a href="#services">서비스</a></li>
                    <li><a href="customer_20250305.html">워프신청</a></li>
                    <li><a href="warpzone.html">워프존찾기</a></li>
                    <li><a href="#partners">파트너</a></li>
                    <li><a href="http://pf.kakao.com/_mPNxhn" target="_blank">고객센터</a></li>
                    <li id="authNavItem">
                        <a href="#" id="loginBtn">
                            <i class="fas fa-sign-in-alt"></i> 로그인
                        </a>
                    </li>
                </ul>
                <div class="mobile-auth-section" id="mobileAuthSection">
                    <a href="#" id="mobileLoginBtn">
                        <i class="fas fa-sign-in-alt"></i> 로그인
                    </a>
                </div>
                <button class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="mobile-menu">
                    <a href="#home">홈</a>
                    <a href="#services">서비스</a>
                    <a href="customer_20250305.html">워프신청</a>
                    <a href="warpzone.html">워프존찾기</a>
                    <a href="#partners">파트너</a>
                    <a href="http://pf.kakao.com/_mPNxhn" target="_blank">고객센터</a>
                </div>
            </div>
        </nav>
    `;
}

// 네비게이션바 자동 삽입 (body 시작 부분에)
document.addEventListener('DOMContentLoaded', function() {
    // 이미 네비게이션바가 있는지 확인
    if (!document.querySelector('.navbar')) {
        const navbar = createNavbar();
        document.body.insertAdjacentHTML('afterbegin', navbar);
    }
}); 
