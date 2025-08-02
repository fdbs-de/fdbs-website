export default defineNuxtPlugin({
    async setup()
    {
        await useAuthStore().load()
    }
})