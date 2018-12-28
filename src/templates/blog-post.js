import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import ContentStyles from '../components/styles/ContentStyles';
import GradientBar from '../components/GradientBar';
import Divider from '../components/styles/Divider';
import BottomNav from '../components/BottomNav';

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
                <BottomNav previous={previous} next={next} />
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
