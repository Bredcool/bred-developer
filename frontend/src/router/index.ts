import { createRouter, createWebHistory } from 'vue-router'
import * as bootstrap from 'bootstrap';
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Pricelist from '../pages/Pricelist.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/price-list', component: Pricelist},
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0, behavior: 'smooth' }; // ⬅ scroll otomatis ke atas
    }
})

// ✅ Auto close navbar burger menu setelah pindah halaman
router.afterEach(() => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbar)
            || new bootstrap.Collapse(navbar, { toggle: false });
        bsCollapse.hide();
    }
});

export default router;
