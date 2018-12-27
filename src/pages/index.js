import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Divider from '../components/styles/Divider';
import ContentStyles from '../components/styles/ContentStyles';

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const siteDescription = data.site.siteMetadata.description;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <ContentStyles>
                    {posts.map(({ node }) => {
                        const title =
                            node.frontmatter.title || node.fields.slug;
                        return (
                            <div key={node.fields.slug}>
                                <h2 className="title">
                                    <Link to={node.fields.slug}>{title}</Link>
                                </h2>
                                <p className="date">{node.frontmatter.date}</p>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: node.excerpt
                                    }}
                                />
                            </div>
                        );
                    })}
                </ContentStyles>
                <Divider />
                <Bio />
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
