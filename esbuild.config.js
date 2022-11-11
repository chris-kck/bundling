require('esbuild').build({
    entryPoints: ['src/hello.js', "src/world.ts"],
    bundle: true,
    //outfile: 'esBuildOutput/bundle.js',
    outdir: 'esBuildOutput',
    minify: true,
    sourcemap: true,
    target: 'es2015',
    loader: {
        '.js': 'jsx',
        '.ts': 'ts'
    },
    define: {
        'process.env.NODE_ENV': '"development"'
    },
    watch: true,
    keepNames: false,
}).catch(() => process.exit(1))