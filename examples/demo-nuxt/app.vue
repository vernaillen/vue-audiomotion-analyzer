<template>
    <NuxtExampleLayout example="demo-nuxt" key="test" repo="vernaillen/vue-audiomotion-analyzer">
        <template #nav>
            <nav class="flex align-center gap-4 p-4">
                <NuxtLink to="https://vue-audiomotion-analyzer.dev/" target="_blank">
                    Documentation
                </NuxtLink>
            </nav>
        </template>
        <template #default>
            <DemoAnalyzer/>
        </template>
    </NuxtExampleLayout>
</template>
