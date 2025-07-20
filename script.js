// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initializeLoadingScreen();
    
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    // Initialize all features with mobile optimization
    setTimeout(() => {
        initializeAOS();
        
        // Initialize particles only on desktop for performance
        if (!isMobile) {
            initializeAdvancedParticles();
        }
        
        // Reduce neural network complexity on mobile
        if (!isSmallMobile) {
            initializeNeuralNetwork();
        }
        
        initializeThemeToggle();
        initializeNavigation();
        initializeCubeLogo();
        initializeNavigationProgress();
        initializeTypingEffect();
        initializeScrollAnimations();
        initializeContactForm();
        initializeProgressBars();
        initializeSmoothScroll();
        initializeCounters();
        initializeSkillsRadar();
        
        // Matrix background only on desktop
        if (!isMobile) {
            initializeMatrixBackground();
        }
        
        initializeEnhancedProjectCards();
        initializeFloatingNav();
        initializeSoundEffects();
        initializeAdvancedScrollProgress();
        initializeInteractiveElements();
        
        // Initialize mobile-specific optimizations
        if (isMobile) {
            initializeMobileOptimizations();
        }
    }, isMobile ? 1500 : 3000); // Faster loading on mobile
});

// Loading Screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 100);
}

// Matrix Background for Loading Screen
function initializeMatrixBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.getElementById('matrixBg');
    
    if (!matrixBg) return;
    
    matrixBg.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(15, 15, 35, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#667eea';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(drawMatrix, 35);
    
    setTimeout(() => {
        clearInterval(matrixInterval);
    }, 3000);
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 100
        });
    }
}

// Particle.js Configuration
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#667eea', '#764ba2', '#f093fb']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#667eea',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeButton = document.querySelector('.theme-button');
    
    if (!themeButton) return;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update button icon based on current theme
    updateThemeButtonIcon(currentTheme);
    
    themeButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Update button icon
        updateThemeButtonIcon(newTheme);
        
        // Update navigation styles for new theme
        updateNavigationTheme(newTheme);
    });
}

// Update theme button icon
function updateThemeButtonIcon(theme) {
    const buttonIcon = document.querySelector('.theme-button i');
    
    if (!buttonIcon) return;
    
    if (theme === 'dark') {
        buttonIcon.className = 'fas fa-sun';
    } else {
        buttonIcon.className = 'fas fa-moon';
    }
}

// ===== ADVANCED PARTICLE SYSTEM =====
function initializeAdvancedParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;

    const particles = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 30 : 80; // Reduce particles on mobile
    const connections = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.vx = (Math.random() - 0.5) * (isMobile ? 1 : 2); // Slower on mobile
            this.vy = (Math.random() - 0.5) * (isMobile ? 1 : 2);
            this.life = Math.random() * (isMobile ? 30 : 20) + 10; // Longer life on mobile
            this.maxLife = this.life;
            this.size = Math.random() * (isMobile ? 2 : 3) + 1; // Smaller on mobile
            this.element = this.createElement();
            container.appendChild(this.element);
        }
        
        createElement() {
            const el = document.createElement('div');
            el.style.position = 'absolute';
            el.style.width = this.size + 'px';
            el.style.height = this.size + 'px';
            el.style.background = `linear-gradient(45deg, 
                hsl(${Math.random() * 60 + 220}, 70%, 60%), 
                hsl(${Math.random() * 60 + 280}, 70%, 70%))`;
            el.style.borderRadius = '50%';
            el.style.pointerEvents = 'none';
            el.style.boxShadow = isMobile ? 'none' : '0 0 10px rgba(102, 126, 234, 0.5)';
            el.style.willChange = 'transform, opacity';
            return el;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;
            
            // Bounce off walls
            if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
            if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
            
            // Update position using transform for better performance
            this.element.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
            
            // Update opacity based on life
            const opacity = this.life / this.maxLife;
            this.element.style.opacity = opacity;
            
            return this.life > 0;
        }
        
        destroy() {
            if (container.contains(this.element)) {
                container.removeChild(this.element);
            }
        }
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        // Update particles
        for (let i = particles.length - 1; i >= 0; i--) {
            if (!particles[i].update()) {
                particles[i].destroy();
                particles.splice(i, 1);
            }
        }
        
        // Add new particles
        while (particles.length < particleCount) {
            particles.push(new Particle());
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        particles.forEach(particle => {
            if (particle.x > window.innerWidth) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = window.innerHeight;
        });
    });
}

// ===== NEURAL NETWORK CANVAS =====
function initializeNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const nodes = [];
    const connections = [];
    const isMobile = window.innerWidth <= 768;
    const nodeCount = isMobile ? 15 : 30; // Reduce nodes on mobile
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class NetworkNode {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5); // Slower on mobile
            this.vy = (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5);
            this.pulse = Math.random() * Math.PI * 2;
            this.connections = [];
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.pulse += isMobile ? 0.01 : 0.02; // Slower pulse on mobile
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep in bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            const size = 3 + Math.sin(this.pulse) * (isMobile ? 1 : 2);
            const opacity = 0.6 + Math.sin(this.pulse) * 0.4;
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
            
            // Dynamic color based on theme
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                ctx.fillStyle = `rgba(102, 126, 234, ${opacity})`;
            } else {
                ctx.fillStyle = `rgba(118, 75, 162, ${opacity})`;
            }
            
            ctx.fill();
            
            // Reduce glow effect on mobile
            if (!isMobile) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = ctx.fillStyle;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
    }
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new NetworkNode());
    }
    
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.3;
                    
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    
                    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                    if (isDark) {
                        ctx.strokeStyle = `rgba(240, 147, 251, ${opacity})`;
                    } else {
                        ctx.strokeStyle = `rgba(102, 126, 234, ${opacity})`;
                    }
                    
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections first
        drawConnections();
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Update navigation theme
function updateNavigationTheme(theme) {
    const navbar = document.querySelector('.modern-navbar');
    if (!navbar) return;
    
    const isDark = theme === 'dark';
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.background = isDark 
            ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 60, 0.9) 100%)' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)';
        navbar.style.borderBottom = isDark 
            ? '1px solid rgba(102, 126, 234, 0.4)'
            : '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = isDark 
            ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 60, 0.9) 100%)' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(248, 250, 252, 0.05) 100%)';
        navbar.style.borderBottom = isDark 
            ? '1px solid rgba(102, 126, 234, 0.3)'
            : '1px solid rgba(0, 0, 0, 0.05)';
    }
}

// Navigation Functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu-modern');
    const navLinks = document.querySelectorAll('.nav-item');
    const navbar = document.querySelector('.modern-navbar');
    const brandIcon = document.querySelector('.brand-icon');
    
    // Create scroll progress bar
    createScrollProgressBar();
    
    // Mobile menu toggle with enhanced animations
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Enhanced navbar scroll effect with theme awareness
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (navbar) {
            if (scrolled) {
                navbar.classList.add('scrolled');
                navbar.style.backdropFilter = 'blur(30px) saturate(200%)';
                navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.25), 0 2px 0 rgba(255, 255, 255, 0.1) inset';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.backdropFilter = 'blur(25px) saturate(180%)';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1) inset';
            }
        }
        
        // Update scroll progress
        updateScrollProgress();
    });
    
    // Enhanced active nav link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Enhanced interaction effects for nav links
    navLinks.forEach(link => {
        // Only add hover effects on non-touch devices
        if (!('ontouchstart' in window)) {
            link.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(-2px) scale(1.02)';
                }
            });
            
            link.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = '';
                }
            });
        }
        
        // Add click/tap feedback for all devices
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Brand logo simple interaction effects
    const brandLogo = document.querySelector('.brand-logo');
    if (brandLogo) {
        // Simple hover effect for desktop only
        if (!('ontouchstart' in window)) {
            brandLogo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            brandLogo.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
        
        // Simple click effect - scroll to top
        brandLogo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Simple scale feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
}

// Create scroll progress bar
function createScrollProgressBar() {
    if (!document.querySelector('.scroll-progress')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
}

// Update scroll progress
function updateScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }
}

// Typing Effect
function initializeTypingEffect() {
    const typingText = document.getElementById('typingText');
    const texts = [
        'AI & Machine Learning Engineer',
        'Data Science Specialist', 
        'Full-Stack Developer',
        'Cloud Computing Expert',
        'Automation Engineer',
        'Prompt Engineering Expert',
        'Agentic AI Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

// Initialize 3D Cube Logo Animation
function initializeCubeLogo() {
    const cube = document.querySelector('.cube-logo');
    if (!cube) return;
    
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;
    
    // Continuous rotation animation
    function rotateCube() {
        rotationY += 1;
        rotationX += 0.5;
        rotationZ += 0.3;
        
        cube.style.transform = `
            perspective(1000px) 
            rotateX(${rotationX}deg) 
            rotateY(${rotationY}deg) 
            rotateZ(${rotationZ}deg)
        `;
        
        requestAnimationFrame(rotateCube);
    }
    
    // Mouse interaction
    cube.addEventListener('mouseenter', function() {
        this.style.transform += ' scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    cube.addEventListener('mouseleave', function() {
        this.style.transition = 'none';
    });
    
    // Start rotation
    rotateCube();
}

// Enhanced Navigation Progress
function initializeNavigationProgress() {
    const navProgress = document.querySelector('.nav-progress-fill');
    if (!navProgress) return;
    
    function updateNavigationProgress() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        let currentSectionIndex = 0;
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop) {
                currentSectionIndex = index;
            }
        });
        
        const progress = ((currentSectionIndex + 1) / sections.length) * 100;
        navProgress.style.width = progress + '%';
    }
    
    window.addEventListener('scroll', updateNavigationProgress);
    updateNavigationProgress(); // Initial call
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 100;
                const duration = 2000;
                const stepTime = duration / target;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current);
                }, stepTime);
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== ENHANCED SKILLS RADAR =====
function initializeSkillsRadar() {
    const canvas = document.getElementById('skillsCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 180;
    
    const skills = [
        { name: 'AI/ML', value: 92, color: '#667eea' },
        { name: 'JavaScript', value: 85, color: '#764ba2' },
        { name: 'Python', value: 90, color: '#f093fb' },
        { name: 'React', value: 82, color: '#4facfe' },
        { name: 'Data Science', value: 88, color: '#43e97b' },
        { name: 'AWS', value: 82, color: '#fa709a' },
        { name: 'Automation', value: 90, color: '#fee140' },
        { name: 'Analytics', value: 85, color: '#a8edea' }
    ];
    
    let animationProgress = 0;
    let currentValues = skills.map(() => 0);
    
    function drawRadarChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background grid with glow
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
            ctx.strokeStyle = isDark ? 'rgba(102, 126, 234, 0.3)' : 'rgba(118, 75, 162, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Draw axes with glow effect
        ctx.lineWidth = 1;
        for (let i = 0; i < skills.length; i++) {
            const angle = (2 * Math.PI * i) / skills.length - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = isDark ? 'rgba(102, 126, 234, 0.4)' : 'rgba(118, 75, 162, 0.3)';
            ctx.stroke();
            
            // Draw skill labels with enhanced styling
            ctx.save();
            ctx.fillStyle = isDark ? '#e2e8f0' : '#2d3748';
            ctx.font = 'bold 14px Space Grotesk';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            const labelDistance = radius + 30;
            const labelX = centerX + Math.cos(angle) * labelDistance;
            const labelY = centerY + Math.sin(angle) * labelDistance;
            
            // Add text shadow effect
            ctx.shadowColor = skills[i].color;
            ctx.shadowBlur = 5;
            ctx.fillText(skills[i].name, labelX, labelY);
            ctx.restore();
        }
        
        // Draw skill polygon with gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.4)');
        gradient.addColorStop(1, 'rgba(240, 147, 251, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let i = 0; i < skills.length; i++) {
            const angle = (2 * Math.PI * i) / skills.length - Math.PI / 2;
            const value = (currentValues[i] / 100) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Draw animated skill points
        for (let i = 0; i < skills.length; i++) {
            const angle = (2 * Math.PI * i) / skills.length - Math.PI / 2;
            const value = (currentValues[i] / 100) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            // Outer glow
            ctx.save();
            ctx.shadowColor = skills[i].color;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.fillStyle = skills[i].color;
            ctx.fill();
            
            // Inner highlight
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
            ctx.restore();
            
            // Skill value text
            if (currentValues[i] > 10) {
                ctx.save();
                ctx.fillStyle = isDark ? '#ffffff' : '#000000';
                ctx.font = 'bold 12px Space Grotesk';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(Math.round(currentValues[i]) + '%', x, y - 25);
                ctx.restore();
            }
        }
    }
    
    // Enhanced animation
    function animateRadar() {
        if (animationProgress < 1) {
            animationProgress += 0.015;
            
            for (let i = 0; i < skills.length; i++) {
                const targetValue = skills[i].value;
                const easeProgress = 1 - Math.pow(1 - animationProgress, 3); // Cubic ease-out
                currentValues[i] = easeProgress * targetValue;
            }
            
            drawRadarChart();
            requestAnimationFrame(animateRadar);
        } else {
            // Add floating animation
            floatAnimation();
        }
    }
    
    let floatTime = 0;
    function floatAnimation() {
        floatTime += 0.02;
        
        for (let i = 0; i < skills.length; i++) {
            const baseValue = skills[i].value;
            const float = Math.sin(floatTime + i * 0.5) * 2;
            currentValues[i] = baseValue + float;
        }
        
        drawRadarChart();
        requestAnimationFrame(floatAnimation);
    }
    
    // Intersection observer for radar animation
    const radarObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateRadar();
                }, 500);
                radarObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    radarObserver.observe(canvas);
}

// ===== ENHANCED PROJECT CARDS =====
function initializeEnhancedProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add mouse move effect for 3D tilt
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                translateY(-20px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
        
        // Add click animation
        card.addEventListener('click', (e) => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            }, 150);
        });
        
        // Intersection observer for entrance animation
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
        cardObserver.observe(card);
    });
}

// Scroll Animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
        'section, .about-card, .timeline-card, .experience-card, .skill-item, .project-card, .certification-card, .contact-item'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Progress Bars Animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.grade-fill');
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s ease';
                    progressBar.style.width = targetWidth;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // Skill bars animation
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.style.getPropertyValue('--skill-percent');
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.width = targetWidth;
                }, Math.random() * 500 + 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth Scroll
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize cursor effect only on desktop
// if (window.innerWidth > 768) {
//     initializeCursorEffect();
// }

// Performance optimization: Throttle scroll events
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
    }
}

// Optimize scroll performance
window.addEventListener('scroll', throttle(function() {
    // Add any scroll-based functionality here
}, 16)); // 60fps

// Preload images and optimize performance
function preloadImages() {
    const imageUrls = [
        // Add any image URLs you want to preload
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

// Add loading state
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add any post-load animations or effects here
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            element.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        });
    }, 3500);
});

// Particle Button Effects
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.btn-3d');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const particles = this.querySelector('.btn-particles');
            if (!particles) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    width: 4px;
                    height: 4px;
                    background: white;
                    border-radius: 50%;
                    pointer-events: none;
                    animation: particleExplode 0.6s ease-out forwards;
                `;
                
                particles.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 600);
            }
        });
    });
}

// Initialize button effects
setTimeout(initializeButtonEffects, 3000);

// Advanced Scroll Effects
function initializeAdvancedScrollEffects() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                section.style.transform = `translateY(${scrolled * parallaxSpeed * 0.1}px)`;
            }
        });
    });
}

// Initialize advanced effects
setTimeout(initializeAdvancedScrollEffects, 3000);

// 3D Tilt Effects
function initialize3DTiltEffects() {
    const tiltElements = document.querySelectorAll('.project-card, .about-card, .certification-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Initialize 3D effects
setTimeout(initialize3DTiltEffects, 3000);

// Service Worker for better performance (Optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Add Easter Egg - Konami Code
(function() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                document.body.style.animation = 'rainbow 2s infinite';
                showNotification('🎉 Easter Egg Activated! You found the secret!', 'success');
                konamiIndex = 0;
                
                // Create floating emojis
                for (let i = 0; i < 50; i++) {
                    createFloatingEmoji();
                }
                
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
            }
        } else {
            konamiIndex = 0;
        }
    });
})();

function createFloatingEmoji() {
    const emojis = ['🚀', '💫', '⭐', '🌟', '✨', '🎉', '🎊', '🌈'];
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.cssText = `
        position: fixed;
        top: 100vh;
        left: ${Math.random() * 100}vw;
        font-size: 2rem;
        pointer-events: none;
        z-index: 10000;
        animation: floatUp 3s ease-out forwards;
    `;
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 3000);
}

// Add CSS animations for Easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes particleExplode {
        0% {
            transform: scale(1) translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: scale(0) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .btn-full {
        width: 100%;
        justify-content: center;
    }
`;
document.head.appendChild(style);

// ===== FLOATING NAVIGATION =====
function initializeFloatingNav() {
    console.log('Initializing floating navigation...');
    
    const floatingNav = document.getElementById('floatingNav');
    const floatToggle = document.getElementById('floatToggle');
    
    console.log('floatingNav element:', floatingNav);
    console.log('floatToggle element:', floatToggle);
    
    if (!floatingNav || !floatToggle) {
        console.error('Floating navigation elements not found!');
        return;
    }
    
    console.log('Adding click event listener to float toggle...');
    floatToggle.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Float toggle clicked!');
        floatingNav.classList.toggle('active');
        floatToggle.classList.toggle('active');
        console.log('Floating nav active:', floatingNav.classList.contains('active'));
    });
    
    // Close floating nav when clicking on menu items
    const floatItems = document.querySelectorAll('.float-item');
    console.log('Found float items:', floatItems.length);
    
    floatItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(`Float item ${index} clicked:`, item.getAttribute('href'));
            floatingNav.classList.remove('active');
            floatToggle.classList.remove('active');
        });
    });
    
    // Show floating nav initially
    floatingNav.style.transform = 'translateY(0)';
    floatingNav.style.opacity = '1';
    
    // Hide floating nav when scrolling up, show when scrolling down
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            floatingNav.style.transform = 'translateY(0)';
            floatingNav.style.opacity = '1';
        } else if (scrollTop < lastScrollTop || scrollTop < 100) {
            // Scrolling up or near top
            floatingNav.style.transform = 'translateY(0)';  // Keep visible
            floatingNav.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    console.log('Floating navigation initialized successfully!');
}

// ===== SOUND EFFECTS SYSTEM =====
function initializeSoundEffects() {
    const soundToggle = document.getElementById('soundToggle');
    let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    
    // Update sound toggle UI
    function updateSoundToggle() {
        if (soundEnabled) {
            soundToggle.classList.remove('muted');
            soundToggle.querySelector('i').className = 'fas fa-volume-up';
        } else {
            soundToggle.classList.add('muted');
            soundToggle.querySelector('i').className = 'fas fa-volume-mute';
        }
    }
    
    updateSoundToggle();
    
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        localStorage.setItem('soundEnabled', soundEnabled);
        updateSoundToggle();
        if (soundEnabled) playSound('toggle');
    });
    
    // Create audio context for web audio API
    let audioContext;
    
    function createAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioContext;
    }
    
    // Sound generation functions
    function playSound(type) {
        if (!soundEnabled) return;
        
        const ctx = createAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        const sounds = {
            click: { freq: 800, duration: 0.1 },
            hover: { freq: 600, duration: 0.05 },
            toggle: { freq: 1000, duration: 0.15 },
            notification: { freq: 440, duration: 0.3 }
        };
        
        const sound = sounds[type] || sounds.click;
        
        oscillator.frequency.setValueAtTime(sound.freq, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + sound.duration);
        
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + sound.duration);
    }
    
    // Add sound effects to interactive elements
    document.addEventListener('click', (e) => {
        if (e.target.matches('button, .btn, .nav-item, .float-item, .project-card, a')) {
            playSound('click');
        }
    });
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('button, .btn, .nav-item, .float-item, .project-card')) {
            playSound('hover');
        }
    });
}

// ===== ADVANCED SCROLL PROGRESS =====
function initializeAdvancedScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
}

// ===== CURSOR TRAIL =====
function initializeCursorTrail() {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    const canvas = document.getElementById('cursorTrail');
    if (!canvas) {
        console.warn('Cursor trail canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const trail = [];
    const maxTrailLength = 15;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        trail.push({
            x: mouseX,
            y: mouseY,
            life: 1.0
        });
        
        if (trail.length > maxTrailLength) {
            trail.shift();
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw trail
        for (let i = 0; i < trail.length; i++) {
            const point = trail[i];
            point.life -= 0.12; // Faster fade out
            
            if (point.life > 0) {
                const size = point.life * 10; // Slightly larger
                const opacity = point.life * 0.8; // More visible
                
                // Create gradient
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, size
                );
                gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(102, 126, 234, ${opacity * 0.5})`);
                gradient.addColorStop(1, `rgba(255, 0, 212, 0)`);
                
                ctx.beginPath();
                ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }
        
        // Remove dead points
        for (let i = trail.length - 1; i >= 0; i--) {
            if (trail[i].life <= 0) {
                trail.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    console.log('Cursor trail initialized successfully');
}

// ===== CURSOR FOLLOWERS =====
function initializeCursorFollowers() {
    const cursorFollower = document.getElementById('cursorFollower');
    const cursorDot = document.getElementById('cursorDot');
    
    if (!cursorFollower || !cursorDot) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateFollower() {
        // Much faster following animation
        followerX += (mouseX - followerX) * 0.25;
        followerY += (mouseY - followerY) * 0.25;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// ===== MOBILE OPTIMIZATIONS =====
function initializeMobileOptimizations() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Optimize scroll performance on mobile
    let ticking = false;
    
    function updateScrollEffects() {
        // Throttled scroll effects for mobile
        if (!ticking) {
            requestAnimationFrame(() => {
                // Only essential scroll effects on mobile
                updateScrollProgress();
                updateNavigationTheme(document.documentElement.getAttribute('data-theme'));
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateScrollEffects, { passive: true });
    
    // Optimize touch interactions
    const touchElements = document.querySelectorAll('button, .btn, .nav-item, .project-card');
    
    touchElements.forEach(element => {
        // Add touch feedback
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }, { passive: true });
    });
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
    }
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    console.log('Mobile optimizations initialized');
}

// ===== INTERACTIVE ELEMENTS =====
function initializeInteractiveElements() {
    // Add magnetic effect to buttons
    const magneticElements = document.querySelectorAll('.btn, .float-menu-toggle, .theme-button');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 50;
            
            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                const moveX = x * force * 0.3;
                const moveY = y * force * 0.3;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
    
    // Add ripple effect to clickable elements
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn, .nav-item, .float-item')) {
            createRipple(e);
        }
    });
    
    function createRipple(e) {
        const element = e.target;
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add CSS for ripple animation
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes rippleEffect {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Performance optimization: Throttle scroll events
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
    }
}

// Optimize scroll performance
window.addEventListener('scroll', throttle(function() {
    // Add any scroll-based functionality here
}, 16)); // 60fps
