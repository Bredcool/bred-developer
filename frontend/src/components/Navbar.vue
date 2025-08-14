<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/">Bred Developer</router-link>

            <!-- Tombol toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menu collapsible -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <router-link class="nav-link d-inline px-2" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link d-inline px-2" to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link d-inline px-2" to="/price-list">Price List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link d-inline px-2" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link d-inline px-2" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
