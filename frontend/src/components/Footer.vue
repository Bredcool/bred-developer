<template>
    <footer class="footer position-relative overflow-hidden">

        <!-- Background Effects -->
        <div class="footer-grid"></div>
        <div class="footer-glow footer-glow-1"></div>
        <div class="footer-glow footer-glow-2"></div>

        <div class="container position-relative z-1">

            <!-- Top Footer -->
            <div class="row align-items-center gy-5">

                <!-- Brand -->
                <div class="col-lg-5 text-center text-lg-start">

                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">

                        <!-- 3D Orb -->
                        <div class="orb-wrapper">
                            <div class="orb"></div>
                        </div>

                        <div>
                            <h4 class="footer-title mb-1">
                                Bred Developer
                            </h4>

                            <p class="footer-subtitle mb-0">
                                Fullstack Developer
                            </p>
                        </div>
                    </div>

                    <p class="footer-desc">
                        Building modern, scalable, and visually engaging web applications
                        using Vue JS, Golang, and PostgreSQL.
                    </p>

                </div>

                <!-- Navigation -->
                <div class="col-lg-3 text-center">
                    <h6 class="footer-heading">
                        Navigation
                    </h6>

                    <div class="footer-links d-flex flex-column gap-2">
                        <router-link to="/">
                            Home
                        </router-link>

                        <router-link to="/projects">
                            Projects
                        </router-link>

                        <router-link to="/about">
                            About
                        </router-link>

                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </div>
                </div>

                <!-- Social -->
                <div class="col-lg-4 text-center text-lg-end">

                    <h6 class="footer-heading">
                        Connect
                    </h6>

                    <div class="socials d-flex justify-content-center justify-content-lg-end gap-3 mt-3">

                        <a href="https://github.com/Bredcool" target="_blank" class="social-btn">
                            <i class="bi bi-github"></i>
                        </a>

                        <a href="https://linkedin.com" target="_blank" class="social-btn">
                            <i class="bi bi-linkedin"></i>
                        </a>

                        <a href="mailto:your@email.com" class="social-btn">
                            <i class="bi bi-envelope-fill"></i>
                        </a>

                    </div>

                </div>

            </div>

            <!-- Divider -->
            <div class="footer-divider"></div>

            <!-- Bottom -->
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pb-2">

                <small class="copyright">
                    © 2025 Bred Developer. All rights reserved.
                </small>

                <small class="built">
                    Designed & Developed with ☕ + insomnia
                </small>

            </div>

        </div>
    </footer>
</template>

<style scoped>
/* =========================
   FOOTER
========================= */
.footer {
    position: relative;
    padding: 90px 0 30px;
    background:
        linear-gradient(to bottom,
            #0b0f17,
            #090d14);

    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* =========================
   BACKGROUND EFFECTS
========================= */
.footer-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px);

    background-size: 40px 40px;

    mask-image: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.7),
            transparent);

    pointer-events: none;
}

.footer-glow {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.18;
}

.footer-glow-1 {
    top: -100px;
    left: -100px;
    background: #00ff9d;
}

.footer-glow-2 {
    bottom: -100px;
    right: -100px;
    background: #009dff;
}

/* =========================
   BRAND
========================= */
.footer-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.footer-subtitle {
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 1px;
}

.footer-desc {
    color: rgba(255, 255, 255, 0.68);
    line-height: 1.8;
    max-width: 420px;
}

/* =========================
   3D ORB
========================= */
.orb-wrapper {
    width: 60px;
    height: 60px;
    perspective: 800px;
}

.orb {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    background:
        radial-gradient(circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(0, 255, 157, 0.2),
            rgba(0, 195, 255, 0.1));

    box-shadow:
        inset -10px -10px 30px rgba(0, 0, 0, 0.4),
        inset 10px 10px 30px rgba(255, 255, 255, 0.05),
        0 0 25px rgba(0, 255, 157, 0.4);

    animation: orbFloat 6s ease-in-out infinite;
}

/* =========================
   HEADINGS
========================= */
.footer-heading {
    color: white;
    font-weight: 600;
    margin-bottom: 18px;
    letter-spacing: 0.5px;
}

/* =========================
   LINKS
========================= */
.footer-links a {
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    transition: all 0.3s ease;
}

.footer-links a:hover {
    color: #00ff9d;
    transform: translateX(4px);
}

/* =========================
   SOCIAL BUTTONS
========================= */
.social-btn {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    color: white;
    text-decoration: none;
    font-size: 1.1rem;

    background:
        linear-gradient(135deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.02));

    border: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(10px);

    transition: all 0.35s ease;
}

.social-btn:hover {
    transform:
        translateY(-6px) rotate(3deg);

    color: white;

    box-shadow:
        0 0 25px rgba(0, 255, 157, 0.25);

    border-color: rgba(0, 255, 157, 0.4);
}

/* =========================
   DIVIDER
========================= */
.footer-divider {
    height: 1px;
    margin: 45px 0 25px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent);
}

/* =========================
   TEXT
========================= */
.copyright,
.built {
    color: rgba(255, 255, 255, 0.45);
}

/* =========================
   ANIMATION
========================= */
@keyframes orbFloat {
    0% {
        transform:
            rotateY(0deg) translateY(0px);
    }

    50% {
        transform:
            rotateY(180deg) translateY(-8px);
    }

    100% {
        transform:
            rotateY(360deg) translateY(0px);
    }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 991px) {

    .footer {
        padding-top: 70px;
    }

    .footer-desc {
        margin-inline: auto;
    }

    .footer-links a:hover {
        transform: none;
    }

    .footer-title {
        margin-left: -70px;
    }
    .footer-subtitle {
        margin-left: -70px;
    }
}
</style>