import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import ContentStyles from '../components/styles/ContentStyles';
import GradientBar from '../components/GradientBar';
import Divider from '../components/styles/Divider';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = post.excerpt;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`${post.frontmatter.title} | ${siteTitle}`}
                />
                <ContentStyles>
                    <h2 className="title">{post.frontmatter.title}</h2>
                    <p className="date">{post.frontmatter.date}</p>
                    <GradientBar reverse />
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </ContentStyles>
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        padding: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
                <Divider />
                <Bio />
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
