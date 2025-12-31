// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 在这里可以设置你的实际邮箱
    const emailPlaceholder = document.getElementById('email-placeholder');
    if (emailPlaceholder) {
        // 请替换为你的实际邮箱
        emailPlaceholder.innerHTML = '<a href="mailto:planck@example.com" style="color: #4a86e8;">planck@example.com</a>';
    }
    
    // 可选：动态设置头像
    const profilePic = document.getElementById('profilePic');
    if (profilePic) {
        // 你可以替换为实际的头像图片URL
        // profilePic.src = 'path/to/your/actual/image.jpg';
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 考虑导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏高亮当前部分
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // 为导航链接添加悬停效果
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#4a86e8';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});

// 添加一些额外的工具函数
const PlanckUtils = {
    // 用于格式化邮箱以防止垃圾邮件机器人的简单方法
    encodeEmail: function(email) {
        return email.replace(/@/g, '[at]').replace(/\./g, '[dot]');
    },
    
    // 复制邮箱到剪贴板
    copyEmailToClipboard: function(email) {
        navigator.clipboard.writeText(email).then(function() {
            alert('Email address copied to clipboard!');
        }).catch(function(err) {
            console.error('Failed to copy email: ', err);
        });
    }
};