import glsl from 'vite-plugin-glsl';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        // rollupOptions: {
        //     external: [
        //         'src/particles.js-master/particles.min.js',
        //         'src/purePajinate-master/purePajinate.min.js',
        //     ]
        // },
    },
    plugins:
        [
            glsl()
        ]
};