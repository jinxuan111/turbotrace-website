// TurboTrace Website - No Subscription Version
// Features: Model showcase, QR simulation, waitlist form

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const simulateScan = document.getElementById('simulateScanBtn');
    const qrFeedback = document.getElementById('qrFeedback');
    const demoQrBtn = document.getElementById('demoQrBtn');
    const exploreModelsBtn = document.getElementById('exploreModelsBtn');
    const waitlistForm = document.getElementById('waitlistForm');
    const formMsg = document.getElementById('formMsg');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const reserveNavBtn = document.getElementById('reserveNavBtn');
    const preorderBtns = document.querySelectorAll('.preorder-btn');

    // ========== SCROLL TO MODELS ==========
    if (exploreModelsBtn) {
        exploreModelsBtn.addEventListener('click', () => {
            const modelsSection = document.getElementById('models');
            if (modelsSection) {
                modelsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ========== RESERVE NAV BUTTON - Scroll to contact ==========
    if (reserveNavBtn) {
        reserveNavBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ========== PRE-ORDER BUTTONS ==========
    preorderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modelName = btn.getAttribute('data-model');
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                if (formMsg) {
                    formMsg.innerHTML = `✨ Interested in ${modelName}! Fill in your email to reserve.`;
                    formMsg.style.color = '#e11d48';
                    formMsg.style.fontWeight = '500';
                    setTimeout(() => {
                        if (formMsg && formMsg.innerHTML.includes('Interested')) {
                            formMsg.innerHTML = '';
                        }
                    }, 3000);
                }
            }
        });
    });

    // ========== QR SIMULATION ==========
    function simulateQRScan() {
        if (qrFeedback) {
            qrFeedback.style.display = 'block';
            qrFeedback.innerHTML = '✓ Model Ferrari SF-23 successfully bound! Dashboard unlocked: live lap times (1:14.165) + P3 finish at Monaco GP. Full race history now available.';
            
            // Auto-hide after 6 seconds
            setTimeout(() => {
                if (qrFeedback) qrFeedback.style.opacity = '0';
                setTimeout(() => {
                    if (qrFeedback) qrFeedback.style.display = 'none';
                    if (qrFeedback) qrFeedback.style.opacity = '1';
                }, 500);
            }, 6000);
        }
    }
    
    if (simulateScan) {
        simulateScan.addEventListener('click', simulateQRScan);
    }
    
    if (demoQrBtn) {
        demoQrBtn.addEventListener('click', () => {
            const dashboardSection = document.getElementById('dashboard');
            if (dashboardSection) {
                dashboardSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(simulateQRScan, 600);
            }
        });
    }

    // ========== WAITLIST FORM ==========
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('waitlistEmail').value;
            
            if (email && email.includes('@')) {
                if (formMsg) {
                    formMsg.innerHTML = '✓ Reserved successfully! We\'ll notify you at launch with exclusive pricing.';
                    formMsg.style.color = '#10b981';
                    formMsg.style.fontWeight = '500';
                    waitlistForm.reset();
                }
                console.log('Waitlist email saved:', email);
            } else {
                if (formMsg) {
                    formMsg.innerHTML = 'Please enter a valid email address.';
                    formMsg.style.color = '#e11d48';
                }
            }
        });
    }

    // ========== MOBILE MENU TOGGLE ==========
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.padding = '24px';
                navLinks.style.gap = '20px';
                navLinks.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // Reset mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 800 && navLinks) {
            navLinks.style.display = '';
            navLinks.style.flexDirection = '';
            navLinks.style.position = '';
            navLinks.style.background = '';
            navLinks.style.padding = '';
            navLinks.style.gap = '';
            navLinks.style.boxShadow = '';
        }
    });
});