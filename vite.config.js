import glsl from 'vite-plugin-glsl';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        // rollupOptions: {
        //     external: [ './src/particles.js-master/particles.min.js' ]
        // },
    },
    plugins:
        [
            glsl()
        ]
};