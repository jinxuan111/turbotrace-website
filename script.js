// TurboTrace Website - Interactive Features
// Matches Marketing & R&D sections from Business Plan

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const modal = document.getElementById('subscribeModal');
    const openBtns = document.querySelectorAll('#openSubscribeBtn, #heroSubscribeBtn, .subscribe-now');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelModalBtn = document.getElementById('cancelModal');
    const confirmSubBtn = document.getElementById('confirmSubscribe');
    const simulateScan = document.getElementById('simulateScanBtn');
    const qrFeedback = document.getElementById('qrFeedback');
    const demoQrBtn = document.getElementById('demoQrBtn');
    const waitlistForm = document.getElementById('waitlistForm');
    const formMsg = document.getElementById('formMsg');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const contactSales = document.getElementById('contactSales');

    // ========== SUBSCRIPTION MODAL ==========
    function openModal() {
        if (modal) modal.style.display = 'flex';
    }
    
    function closeModal() {
        if (modal) modal.style.display = 'none';
    }
    
    openBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (modal && e.target === modal) closeModal();
    });
    
    if (confirmSubBtn) {
        confirmSubBtn.addEventListener('click', () => {
            alert('✓ Premium subscription activated! RM 15/month. First 100 buyers get 3 months free.');
            closeModal();
        });
    }

    // ========== QR SIMULATION (Matches R&D Section) ==========
    function simulateQRScan() {
        if (qrFeedback) {
            qrFeedback.style.display = 'block';
            qrFeedback.innerHTML = '✓ Model SF-23 (Ferrari) successfully bound! Dashboard unlocked: live lap times + P3 finish. <a href="#" id="upgradeHint" style="color:#f97316; text-decoration:underline;">Upgrade to Premium for full history →</a>';
            
            const upgradeHint = document.getElementById('upgradeHint');
            if (upgradeHint) {
                upgradeHint.addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal();
                });
            }
            
            // Auto-hide after 8 seconds
            setTimeout(() => {
                if (qrFeedback) qrFeedback.style.opacity = '0';
                setTimeout(() => {
                    if (qrFeedback) qrFeedback.style.display = 'none';
                }, 500);
            }, 8000);
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

    // ========== WAITLIST FORM (Matches Marketing Promotion) ==========
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('waitlistEmail').value;
            
            if (email && email.includes('@')) {
                if (formMsg) {
                    formMsg.innerHTML = '✓ Reserved successfully! We\'ll notify you at launch with an exclusive promo code.';
                    formMsg.style.color = '#10b981';
                    formMsg.style.fontWeight = '500';
                    waitlistForm.reset();
                }
                // In production, send to Google Sheets, Mailchimp, or your backend
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

    // ========== CONTACT SALES BUTTON ==========
    if (contactSales) {
        contactSales.addEventListener('click', () => {
            alert('📧 Email us at partners@turbotrace.my or call +6012-345 6789 (Attn: Yee Chao Tong, Operations)');
        });
    }
});