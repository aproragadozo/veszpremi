module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            App: 'app/components/App.jsx',
            Main: 'app/components/Main.jsx',
            Header: 'app/components/Header.jsx',
            Footer: 'app/components/Footer.jsx',
            Home: 'app/components/Home.jsx',
            Collections: 'app/components/Collections.jsx',
            Videos: 'app/components/Videos.jsx',
            Nav: 'app/components/Nav.jsx',
            CollectionDetails: 'app/components/CollectionDetails.jsx',
            MobileCollections: 'app/components/MobileCollections.jsx',
            About: 'app/components/About.jsx'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
};