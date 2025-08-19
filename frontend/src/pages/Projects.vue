<template>
    <div class="text-white min-vh-100 py-5">
        <div class="container py-5">
            <h2 class="text-center mb-4 fw-bold">Project Portfolio</h2>
            <p class="text-center mb-5">
                The following are several projects that I have created or am currently creating using the Vue 3, Golang,
                and
                PostgreSQL stack.
            </p>

            <section>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                        <div class="card h-100 shadow-sm border-0">
                            <img :src="project.image" class="card-img-top object-fit-cover" style="height: 300px" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title fw-semibold">{{ project.name }}</h5>
                                <p class="card-text flex-grow-1">{{ project.description }}</p>
                                <div>
                                    <a v-if="project.demo" :href="project.demo" class="btn btn-primary btn-sm me-2 mb-2"
                                        target="_blank">
                                        Live Demo
                                    </a>
                                    <a v-if="project.github" :href="project.github"
                                        class="btn btn-outline-primary btn-sm mb-2" target="_blank">
                                        GitHub
                                    </a>
                                    <span v-if="!project.demo && !project.github" class="small fst-italic">
                                        No links available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = [
    {
        id: 1,
        name: 'Cireng RR',
        description: 'A modern landing page website that highlights one main product or service, ideal for online promotions or sales with a clean and attractive design.',
        image: '/assets/cireng_rr.jpg',
        demo: 'https://cireng-rr.pages.dev/',
        github: 'https://github.com/Bredcool/cireng-rr',
    },
    {
        id: 2,
        name: 'Karang Taruna RW.02',
        description: 'A professional company profile website, suitable for organizations, local businesses, clinics, workshops, schools, and freelancers who want to introduce their services online.',
        image: '/assets/karang_taruna_rw02.jpg',
        demo: 'https://karang-taruna-rw02.pages.dev/',
        github: 'https://github.com/Bredcool/karang-taruna-rw02',
    },
    {
        id: 3,
        name: 'Mini 3D',
        description: 'Modern 3D website and advanced visualization.',
        image: '/assets/3d.jpg',
        demo: 'https://3d.pages.dev/',
        github: 'https://github.com/bredcool/3d',
    },
    {
        id: 4,
        name: 'Mini Weather',
        description: 'A real-time weather website that displays accurate temperature and weather condition predictions, equipped with a responsive and user-friendly interface.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://weather-app.pages.dev/',
        github: 'https://github.com/bredcool/mini-weather',
    },
    {
        id: 5,
        name: 'Mini AI',
        description: 'A mini AI assistant that resembles ChatGPT, capable of helping users answer questions, provide advice, and interact naturally with advanced AI technology.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://mini-ai.pages.dev/',
        github: 'https://github.com/bredcool/mini-ai',
    },
    {
        id: 6,
        name: 'Dashboard Admin / CMS Custom',
        description: 'Custom dashboard and CMS system for enterprises, making it easy to manage data, transactions, users and reports with an intuitive interface.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://dashboard-admin.pages.dev/',
        github: 'https://github.com/bredcool/dashboard-admin',
    },
    {
        id: 7,
        name: 'Not Found Merch',
        description: 'An online store website for a merchandise brand, featuring products with an attractive design and easy navigation for an optimal user shopping experience.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://not-found-merch.pages.dev/',
        github: 'https://github.com/Bredcool/not-found-merch',
    },
]
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}

section {
    animation: fadeInDown 1s ease-in-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
