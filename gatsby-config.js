module.exports = {
    siteMetadata: {
        title: '[object Object]',
        author: 'Mehdi Vasigh',
        description: 'A blog about JavaScript, Web Development, and life.',
        siteUrl: 'https://mvasigh.netlify.com/'
    },
    pathPrefix: '/gatsby-starter-blog',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            showLineNumbers: true,
                            noInlineHighlight: true
                        }
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            }
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `[object Object]`,
                short_name: `[object Object]`,
                start_url: `/`,
                background_color: `#fafafa`,
                theme_color: `#009276`,
                display: `minimal-ui`
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`
    ]
};
