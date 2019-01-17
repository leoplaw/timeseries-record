module.exports = {
    src: [
        './src/timeseries-record.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc/typedoc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'doc/readme.md',
    name: 'timeseries-record',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
