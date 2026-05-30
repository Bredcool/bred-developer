<template>
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
        <!-- Background blur -->
        <div class="navbar-glow"></div>

        <div class="container position-relative">

            <!-- Logo / Brand -->
            <router-link class="navbar-brand brand-logo d-flex align-items-center gap-2" to="/">
                <div class="logo-3d">
                    <div class="cube">
                        <div class="face front"></div>
                        <div class="face back"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                        <div class="face top"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div>
                    <div class="brand-title">Bred Developer</div>
                    <small class="brand-subtitle">Fullstack Developer</small>
                </div>
            </router-link>

            <!-- Toggle -->
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menu -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">

                    <li class="nav-item">
                        <router-link class="nav-link custom-link" to="/">
                            Home
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link custom-link" to="/projects">
                            Projects
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link custom-link" to="/about">
                            About
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link custom-link" to="/contact">
                            Contact
                        </router-link>
                    </li>

                    <!-- CTA -->
                    <li class="nav-item ms-lg-2 mt-3 mt-lg-0">
                        <a href="https://github.com/Bredcool" target="_blank" class="hire-btn">
                            <i class="bi bi-github me-2"></i>
                            GitHub
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* =========================
   NAVBAR
========================= */
.custom-navbar {
    position: sticky;
    top: 0;
    z-index: 999;
    backdrop-filter: blur(18px);
    background: rgba(10, 15, 25, 0.75);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
}

/* Glow background */
.navbar-glow {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at left,
            rgba(0, 255, 140, 0.12),
            transparent 40%),
        radial-gradient(circle at right,
            rgba(0, 140, 255, 0.12),
            transparent 40%);
    pointer-events: none;
}

/* =========================
   BRAND
========================= */
.brand-logo {
    text-decoration: none;
}

.brand-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.5px;
}

.brand-subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.72rem;
    letter-spacing: 1px;
}

/* =========================
   3D CUBE
========================= */
.logo-3d {
    width: 38px;
    height: 38px;
    perspective: 800px;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCube 7s linear infinite;
}

.face {
    position: absolute;
    width: 38px;
    height: 38px;
    border: 1px solid rgba(0, 255, 140, 0.4);
    background: rgba(0, 255, 140, 0.08);
    box-shadow:
        inset 0 0 12px rgba(0, 255, 140, 0.25),
        0 0 12px rgba(0, 255, 140, 0.15);
}

.front {
    transform: translateZ(19px);
}

.back {
    transform: rotateY(180deg) translateZ(19px);
}

.left {
    transform: rotateY(-90deg) translateZ(19px);
}

.right {
    transform: rotateY(90deg) translateZ(19px);
}

.top {
    transform: rotateX(90deg) translateZ(19px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(19px);
}

@keyframes rotateCube {
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }

    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

/* =========================
   LINKS
========================= */
.custom-link {
    position: relative;
    color: rgba(255, 255, 255, 0.72);
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 10px 14px !important;
}

.custom-link:hover {
    color: #00ff9d;
    transform: translateY(-1px);
}

/* underline animation */
.custom-link::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 14px;
    width: 0%;
    height: 2px;
    background: linear-gradient(to right, #00ff9d, #00c3ff);
    transition: width 0.3s ease;
    border-radius: 20px;
}

.custom-link:hover::after {
    width: calc(100% - 28px);
}

/* active route */
.router-link-active.custom-link {
    color: #00ff9d;
}

.router-link-active.custom-link::after {
    width: calc(100% - 28px);
}

/* =========================
   BUTTON
========================= */
.hire-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border-radius: 14px;
    text-decoration: none;
    color: white;
    font-weight: 600;

    background:
        linear-gradient(135deg,
            rgba(0, 255, 157, 0.2),
            rgba(0, 195, 255, 0.2));

    border: 1px solid rgba(255, 255, 255, 0.08);

    transition: all 0.3s ease;

    box-shadow:
        0 0 20px rgba(0, 255, 157, 0.08);
}

.hire-btn:hover {
    transform: translateY(-3px);
    color: white;

    box-shadow:
        0 0 25px rgba(0, 255, 157, 0.25);
}

/* =========================
   MOBILE
========================= */
@media (max-width: 991px) {

    .navbar-collapse {
        margin-top: 18px;
        padding: 20px;
        border-radius: 20px;

        background: rgba(15, 20, 30, 0.92);

        border: 1px solid rgba(255, 255, 255, 0.05);

        backdrop-filter: blur(18px);
    }

    .custom-link {
        padding: 12px 10px !important;
    }

    .hire-btn {
        width: 100%;
    }
}
</style>