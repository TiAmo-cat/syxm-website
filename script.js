// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 关闭移动端菜单当点击链接时
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
const animateElements = document.querySelectorAll('.about-content, .product-card, .team-card, .contact-item, .contact-form, .gallery-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 简单的表单验证
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // 这里可以添加实际的表单提交逻辑
        alert('感谢您的留言！我们会尽快与您联系。');
        contactForm.reset();
    } else {
        alert('请填写完整的表单信息。');
    }
});

// 添加鼠标跟随效果
const heroSection = document.querySelector('.hero');
const heroAnimation = document.querySelector('.hero-animation');

heroSection.addEventListener('mousemove', (e) => {
    if (heroAnimation) {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;
        
        heroAnimation.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// 页面加载完成后的动画
window.addEventListener('load', () => {
    // 隐藏加载指示器（如果有的话）
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            window.scrollTo({
                top: offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});