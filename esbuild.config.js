require('esbuild').build({
    entryPoints: ['src/hello.js', "src/world.ts", "src/styles.css"],
    bundle: true,
    //outfile: 'esBuildOutput/bundle.js',
    outdir: 'esBuildOutput',
    minify: true,
    sourcemap: true,
    target: 'es2015',
    loader: {
        '.js': 'jsx',
        '.ts': 'ts',
        '.css': 'css'
    },
    define: {
        'process.env.NODE_ENV': '"development"'
    },
    watch: false, // watch for changes to the filesystem and rebundle automatically
    keepNames: false, // retains function names.
}).catch(() => process.exit(1))