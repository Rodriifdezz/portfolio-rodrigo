import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let gsapReady = false;
let lenisInstance: { scrollTo: (target: Element | string, options?: { offset?: number; duration?: number }) => void } | null = null;

export function initGsap(): void {
  if (gsapReady) return;
  gsap.registerPlugin(ScrollTrigger);
  gsapReady = true;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isFinePointer(): boolean {
  return window.matchMedia('(pointer: fine)').matches;
}

export function canAnimate(): boolean {
  return !prefersReducedMotion();
}

export function setLenis(
  lenis: { scrollTo: (target: Element | string, options?: { offset?: number; duration?: number }) => void },
): void {
  lenisInstance = lenis;
}

function getHeaderOffset(): number {
  const header = document.querySelector('.site-header');
  return header ? -header.getBoundingClientRect().height : -96;
}

function closeMobileNav(): void {
  const header = document.querySelector('.site-header');
  const mobileNav = document.getElementById('mobile-nav');
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');

  if (header?.getAttribute('data-nav-open') !== 'true') return;

  header.setAttribute('data-nav-open', 'false');
  mobileNav?.setAttribute('data-open', 'false');
  mobileNav?.setAttribute('aria-hidden', 'true');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menú');
  document.body.style.overflow = '';
}

export function scrollToHash(hash: string): boolean {
  const target = document.querySelector(hash);
  if (!target) return false;

  const offset = getHeaderOffset();

  if (lenisInstance && canAnimate()) {
    lenisInstance.scrollTo(target, { offset, duration: 1.15 });
    return true;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  return true;
}

export function bindAnchorScroll(selector: string): void {
  const isHomePage = () => ['/', '/index.html'].includes(window.location.pathname);

  document.querySelectorAll<HTMLAnchorElement>(selector).forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.origin);
      if (!url.hash) return;

      const linkOnHome = url.pathname === '/' || url.pathname === '';
      if (!isHomePage() || !linkOnHome) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      closeMobileNav();
      scrollToHash(url.hash);
      history.pushState(null, '', url.hash);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
  });
}

const NAV_SECTIONS = ['hero', 'about', 'projects', 'tech', 'contact'] as const;

function isHomePage(): boolean {
  return ['/', '/index.html'].includes(window.location.pathname);
}

function setActiveNav(hash: string): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-nav-hash]').forEach((link) => {
    const linkHash = link.getAttribute('data-nav-hash');
    if (linkHash === hash) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

let navSpyFrame = 0;

function updateActiveNavFromScroll(): void {
  if (!isHomePage()) return;

  const header = document.querySelector('.site-header');
  const offset = (header?.getBoundingClientRect().height ?? 96) + 48;
  const scrollPos = window.scrollY + offset;

  let activeHash = '#hero';

  for (const id of NAV_SECTIONS) {
    const section = document.getElementById(id);
    if (!section) continue;
    if (section.offsetTop <= scrollPos) activeHash = `#${id}`;
  }

  setActiveNav(activeHash);
}

export function tickNavScrollSpy(): void {
  if (navSpyFrame) return;
  navSpyFrame = requestAnimationFrame(() => {
    navSpyFrame = 0;
    updateActiveNavFromScroll();
  });
}

export function initNavScrollSpy(): void {
  if (!isHomePage()) return;

  const updateFromHash = () => {
    setActiveNav(window.location.hash || '#hero');
  };

  if (window.location.hash) updateFromHash();
  else updateActiveNavFromScroll();

  window.addEventListener('scroll', tickNavScrollSpy, { passive: true });
  window.addEventListener('hashchange', updateFromHash);
  window.addEventListener('resize', tickNavScrollSpy);
}

export function scrollReveal(
  selector: string,
  options: { trigger?: string; start?: string; y?: number; duration?: number } = {},
): void {
  if (!canAnimate()) return;
  initGsap();

  const { trigger, start = 'top 85%', y = 24, duration = 0.9 } = options;

  document.querySelectorAll(selector).forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: trigger ?? el, start },
      y,
      opacity: 0,
      duration,
      ease: 'power3.out',
    });
  });
}

export function heroEntrance(selector: string, delay = 0.15): void {
  if (!canAnimate()) return;
  initGsap();

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { y: 32, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out', delay },
  );
}

export function bindTilt3d(selector: string, maxDeg = 5): void {
  if (!isFinePointer() || !canAnimate()) return;
  initGsap();

  document.querySelectorAll(selector).forEach((element) => {
    let rafId: number | null = null;
    const el = element as HTMLElement;

    el.addEventListener('mouseenter', () => {
      el.style.willChange = 'transform';
    });

    el.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -maxDeg;
        const rotateY = ((x - centerX) / centerX) * maxDeg;

        gsap.to(el, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.35,
          ease: 'power1.out',
        });
        rafId = null;
      });
    });

    el.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      gsap.to(el, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.45,
        ease: 'power2.out',
      });
      el.style.willChange = 'auto';
    });
  });
}

export function bindMagnetic(selector: string): void {
  if (!isFinePointer() || !canAnimate()) return;
  initGsap();

  document.querySelectorAll(selector).forEach((button) => {
    const content = button.querySelector('.magnetic-content');
    let rafId: number | null = null;
    const el = button as HTMLElement;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });

    el.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      gsap.to(el, { scale: 1, x: 0, y: 0, duration: 0.45, ease: 'power2.out' });
      if (content) gsap.to(content, { x: 0, y: 0, duration: 0.45, ease: 'power2.out' });
    });

    el.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
        if (content) gsap.to(content, { x: x * 0.08, y: y * 0.08, duration: 0.3, ease: 'power2.out' });
        rafId = null;
      });
    });
  });
}
