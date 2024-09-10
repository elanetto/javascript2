import { defineConfig } from 'vite'
import path from 'path'
import { profile } from 'console';

export default defineConfig({

    appType: 'mpa',
    base: "",
    build: {
        target: "esnext",
        outDir: "dist",
        assetsDir: "assets",
        manifest: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "/index.html"),
                about: path.resolve(__dirname, "/about.html"),
                profile: path.resolve(__dirname, "/profile.html"),
            },
        },
    },
});



