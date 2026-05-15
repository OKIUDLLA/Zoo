// =============== Footer year ===============
document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// =============== Image fallback ===============
// If an Unsplash image fails, mark its wrapper so the CSS gradient + emoji shows.
document.querySelectorAll('.img img').forEach(img => {
    if (!img.complete) {
        img.addEventListener('error', () => img.parentElement?.classList.add('failed'));
        img.addEventListener('load', () => img.parentElement?.classList.remove('failed'));
    } else if (img.naturalWidth === 0) {
        img.parentElement?.classList.add('failed');
    }
});

// =============== Mobile nav ===============
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => {
        if (e.target.tagName === 'A') nav.classList.remove('open');
    });
}

// =============== Open status pill ===============
// Po–Pá 9–11 a 13–17, So 8–17, Ne dle dohody
function openStatus(now = new Date()) {
    const day = now.getDay(); // 0 Sun .. 6 Sat
    const minutes = now.getHours() * 60 + now.getMinutes();
    const ranges = {
        1: [[9*60, 11*60], [13*60, 17*60]],
        2: [[9*60, 11*60], [13*60, 17*60]],
        3: [[9*60, 11*60], [13*60, 17*60]],
        4: [[9*60, 11*60], [13*60, 17*60]],
        5: [[9*60, 11*60], [13*60, 17*60]],
        6: [[8*60, 17*60]],
    };
    const today = ranges[day];
    if (!today) return { open: false, label: 'Zavřeno · neděle po dohodě' };
    for (const [from, to] of today) {
        if (minutes >= from && minutes < to) {
            const h = Math.floor(to / 60), m = String(to % 60).padStart(2, '0');
            return { open: true, label: `Otevřeno · do ${h}:${m}` };
        }
    }
    // Find next opening today or next day
    for (const [from] of today) {
        if (minutes < from) {
            const h = Math.floor(from / 60), m = String(from % 60).padStart(2, '0');
            return { open: false, label: `Zavřeno · otevírá v ${h}:${m}` };
        }
    }
    return { open: false, label: 'Dnes zavřeno' };
}
document.querySelectorAll('[data-open-status]').forEach(el => {
    const { open, label } = openStatus();
    el.classList.toggle('closed', !open);
    el.querySelector('.status-label').textContent = label;
});

// =============== Highlight today in hours table ===============
const todayIdx = new Date().getDay(); // 0..6
const dayMap = { 1: 'po', 2: 'ut', 3: 'st', 4: 'ct', 5: 'pa', 6: 'so', 0: 'ne' };
document.querySelectorAll(`.hours tr[data-day="${dayMap[todayIdx]}"]`).forEach(tr => {
    tr.classList.add('today');
});

// =============== Reveal on scroll ===============
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// =============== Back to top ===============
const toTop = document.querySelector('.to-top');
if (toTop) {
    const onScroll = () => toTop.classList.toggle('visible', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// =============== Lightbox with prev/next ===============
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const items = Array.from(document.querySelectorAll('.g-item'));
    let idx = 0;

    function show(i) {
        idx = (i + items.length) % items.length;
        const src = items[idx].getAttribute('data-img');
        const alt = items[idx].getAttribute('data-alt') || '';
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        if (lightboxCounter) lightboxCounter.textContent = `${idx + 1} / ${items.length}`;
    }
    function open(i) {
        show(i);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }
    items.forEach((item, i) => {
        item.addEventListener('click', e => { e.preventDefault(); open(i); });
    });
    lightboxClose?.addEventListener('click', close);
    lightboxPrev?.addEventListener('click', () => show(idx - 1));
    lightboxNext?.addEventListener('click', () => show(idx + 1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(idx - 1);
        if (e.key === 'ArrowRight') show(idx + 1);
    });
}
