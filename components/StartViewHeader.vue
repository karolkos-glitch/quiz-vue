<template>
    <header class="px-4 sm:hidden">
        <Typography as="h1" class="text-3xl text-center">
            Quiz about 
        </Typography>
        <figure>
            <NuxtImg src="/the-office-logo.jpeg" alt="Logo the office" width="200" />
        </figure>
    </header>
    <header class="px-4 hidden sm:flex flex-col">
        <Typography as="h1" class="text-7xl">
            Quiz
        </Typography>
        <div class="flex items-center gap-x-4">
            <Typography variant="secondary" class="text-4xl font-light">
                How good do you know
            </Typography>
            <figure>
                <NuxtImg src="/the-office-logo.jpeg" alt="Logo the office" width="400" />
            </figure>
        </div>
    </header>
</template>