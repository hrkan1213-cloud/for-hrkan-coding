// ========================================
// 전역 변수 및 초기화
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar();
    initializeAnimations();
    initializeStats();
    initializeLoginForm();
    initializeAccordion();
    initializeFilters();
    initializeScrollEffects();
});

// ========================================
// 네비게이션 바
// ========================================

function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // 스크롤 시 네비게이션 스타일 변경
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 햄버거 메뉴 토글
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // 햄버거 아이콘 애니메이션
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ?
                'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ?
                'rotate(-45deg) translate(7px, -6px)' : 'none';
        });
    }

    // 메뉴 링크 클릭 시 모바일 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    });
}

// ========================================
// 애니메이션 효과
// ========================================

function initializeAnimations() {
    // AOS (Animate On Scroll) 효과
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 모든 feature-card 요소에 observer 적용
    const featureCards = document.querySelectorAll('.feature-card[data-aos]');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // fade-in 효과
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// 통계 카운터 애니메이션
// ========================================

function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2초
    const step = target / (duration / 16); // 60fps 기준
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// 로그인 폼
// ========================================

function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // 비밀번호 표시/숨기기
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // 아이콘 변경
            const eyeIcon = this.querySelector('.eye-icon');
            eyeIcon.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
    }

    // 로그인 폼 제출
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const userId = document.getElementById('userId').value;
            const password = document.getElementById('password').value;
            const userType = document.querySelector('input[name="userType"]:checked').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            // 로딩 애니메이션
            const btnLogin = this.querySelector('.btn-login');
            const btnText = btnLogin.querySelector('.btn-text');
            const btnLoader = btnLogin.querySelector('.btn-loader');

            btnText.textContent = '로그인 중...';
            btnLogin.disabled = true;

            // 시뮬레이션: 2초 후 로그인 성공
            setTimeout(() => {
                btnText.textContent = '로그인';
                btnLogin.disabled = false;

                // 성공 알림 표시
                showNotification('로그인 성공!');

                // 실제로는 서버에 요청을 보내고 응답에 따라 처리
                console.log({
                    userId,
                    userType,
                    rememberMe
                });

                // 메인 페이지로 리다이렉트 (시뮬레이션)
                setTimeout(() => {
                    // window.location.href = 'index.html';
                }, 1500);
            }, 2000);
        });
    }

    // 소셜 로그인 버튼
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Naver';
            showNotification(`${platform} 로그인 준비 중...`);
        });
    });
}

// 알림 표시
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;

    const messageElement = notification.querySelector('.notification-message');
    messageElement.textContent = message;

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ========================================
// 아코디언 (학습계획 페이지)
// ========================================

function initializeAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // 모든 아코디언 닫기
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const content = otherItem.querySelector('.accordion-content');
                content.style.maxHeight = null;
            });

            // 클릭한 아코디언만 열기
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // 첫 번째 아코디언 자동 열기
    if (accordionItems.length > 0) {
        const firstItem = accordionItems[0];
        firstItem.classList.add('active');
        const content = firstItem.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// ========================================
// 과목 필터 (학습계획 페이지)
// ========================================

function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (filterTabs.length === 0) return;

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // 활성 탭 변경
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 아코디언 필터링
            accordionItems.forEach(item => {
                const itemCategories = item.getAttribute('data-category');

                if (category === 'all' || itemCategories.includes(category)) {
                    item.classList.remove('hidden');
                    // 애니메이션 효과
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });

            // 모든 아코디언 닫기
            accordionItems.forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = null;
                }
            });
        });
    });
}

// ========================================
// 스크롤 효과
// ========================================

function initializeScrollEffects() {
    // 타임라인 아이템 애니메이션
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

    // 부드러운 스크롤
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // 네비게이션 높이 고려
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 유틸리티 함수
// ========================================

// 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 쓰로틀 함수
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 추가 인터랙티브 효과
// ========================================

// 마우스 이동에 따른 카드 기울기 효과
function initializeCardTilt() {
    const cards = document.querySelectorAll('.feature-card, .award-card, .vision-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// 페이지 로드 시 카드 기울기 효과 초기화
window.addEventListener('load', function() {
    initializeCardTilt();
});

// ========================================
// 폼 유효성 검사
// ========================================

function validateForm(formData) {
    const { userId, password } = formData;
    const errors = [];

    if (!userId || userId.length < 3) {
        errors.push('아이디는 3자 이상이어야 합니다.');
    }

    if (!password || password.length < 6) {
        errors.push('비밀번호는 6자 이상이어야 합니다.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

// ========================================
// 인풋 포커스 효과
// ========================================

const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// ========================================
// 스크롤 진행 표시기 (선택사항)
// ========================================

function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    }, 100));
}

// 스크롤 진행 표시기 초기화 (원하면 활성화)
// createScrollProgressBar();

// ========================================
// 페이지 전환 애니메이션
// ========================================

document.querySelectorAll('a:not([href^="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // 외부 링크는 제외
        if (href.startsWith('http') || href.startsWith('mailto')) {
            return;
        }

        // 현재 페이지와 같은 페이지로의 이동은 제외
        const currentPage = window.location.pathname.split('/').pop();
        if (href === currentPage) {
            return;
        }

        e.preventDefault();

        // 페이드 아웃 효과
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// 페이지 로드 시 페이드 인
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// ========================================
// 콘솔 메시지
// ========================================

console.log('%c임시대안학교 웹사이트', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c인터랙티브 효과가 적용되었습니다!', 'color: #8b5cf6; font-size: 14px;');
