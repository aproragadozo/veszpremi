module.exports = {
    devtool: 'source-map',
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: './public/assets/js/bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
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
            Dropdown: 'app/components/Dropdown.jsx',
            About: 'app/components/About.jsx',
            DesktopCarousel: 'app/components/DesktopCarousel.jsx',
            MobileCarousel: 'app/components/MobileCarousel.jsx',
            DesktopVideos: 'app/components/DesktopVideos.jsx',
            MobileVideos: 'app/components/MobileVideos.jsx',
            ContactPage: 'app/components/ContactPage.jsx',
            Press: 'app/components/Press.jsx',
            Card: 'app/components/Card.jsx',
            DesktopCardGrid: 'app/components/DesktopCardGrid.jsx',
            Vid: 'app/components/Vid.jsx',
            DesktopVidGrid: 'app/components/DesktopVidGrid.jsx',
            Shop: 'app/components/Shop.jsx'
                // YouTube: 'app/components/YouTube.jsx'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '/assets/img',
                        outputPath: './public/assets/img'
                    }
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'public/assets/fonts/[name].[ext]'
                    }
                }],
                exclude: /node_modules/
            }
        ]
    }
};
