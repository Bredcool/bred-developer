import { createRouter, createWebHistory } from 'vue-router'
import * as bootstrap from 'bootstrap'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
// import Pricelist from '../pages/Pricelist.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Home | Bred Developer',
            description:
                'Modern Fullstack Developer Portfolio with Vue JS, Golang, PostgreSQL, and interactive 3D experiences.',
        },
    },
    {
        path: '/projects',
        component: Projects,
        meta: {
            title: 'Projects | Bred Developer',
            description:
                'Explore modern web applications, dashboard systems, AI apps, and 3D websites built by Bred Developer.',
        },
    },
    // {
    //     path: '/price-list',
    //     component: Pricelist,
    // },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About | Bred Developer',
            description:
                'Learn more about Bred Developer, a Fullstack Developer focused on scalable and modern web applications.',
        },
    },
    {
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact | Bred Developer',
            description:
                'Contact Bred Developer for freelance projects, collaboration, or custom web application development.',
        },
    },

    // 🔥 Professional 404 Page
    // {
    //     path: '/:pathMatch(.*)*',
    //     component: () => import('../pages/NotFound.vue'),
    //     meta: {
    //         title: '404 | Page Not Found',
    //     },
    // },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,

    // ✨ Smooth scroll
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            top: 0,
            behavior: 'smooth',
        }
    },
})

// ✨ Global Page Transition Effect
router.beforeEach((to, _from, next) => {
    document.body.classList.add('page-transition')

    // SEO Dynamic Title
    document.title = to.meta.title as string

    // SEO Dynamic Description
    const description =
        document.querySelector('meta[name="description"]')

    if (description && to.meta.description) {
        description.setAttribute(
            'content',
            to.meta.description as string
        )
    }

    next()
})

router.afterEach(() => {
    // 🔥 Remove transition
    setTimeout(() => {
        document.body.classList.remove('page-transition')
    }, 400)

    // ✅ Auto close navbar burger menu
    const navbar = document.getElementById('navbarNav')

    if (navbar && navbar.classList.contains('show')) {
        const bsCollapse =
            bootstrap.Collapse.getInstance(navbar) ||
            new bootstrap.Collapse(navbar, {
                toggle: false,
            })

        bsCollapse.hide()
    }
})

export default router