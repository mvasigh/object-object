import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Divider from '../components/styles/Divider';
import ContentStyles from '../components/styles/ContentStyles';
import TagList from '../components/TagList';

const FilterBarStyles = styled.div`
    display: flex;
    margin: 0.8rem 0;
    .clearAll {
        margin-left: 0.8rem;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.2rem 0.4rem;
        color: ${({ theme }) => theme.darkAccent};
        cursor: pointer;
    }
`;

class BlogIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: []
        };

        this.handleAddFilter = this.handleAddFilter.bind(this);
        this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
        this.handleClearAllFilters = this.handleClearAllFilters.bind(this);
    }

    componentDidMount() {
        // when tag is clicked on an individual post
        const { location } = this.props;
        if (location.state && location.state.tag) {
            this.handleAddFilter(location.state.tag);
        }
    }

    handleAddFilter(tag) {
        const { filters } = this.state;
        if (filters.includes(tag)) return;
        this.setState({
            filters: [...filters, tag]
        });
    }

    handleRemoveFilter(tag) {
        const { filters } = this.state;
        if (!filters.includes(tag)) return;
        filters.splice(filters.indexOf(tag), 1);
        this.setState({ filters });
    }

    handleClearAllFilters() {
        this.setState({ filters: [] });
    }

    renderFilterBar() {
        const { filters } = this.state;
        const hasFilters = filters.length > 0;
        return (
            hasFilters && (
                <FilterBarStyles>
                    <TagList
                        tags={filters}
                        onTagClick={this.handleRemoveFilter}
                    />
                    <span
                        className="clearAll"
                        role="link"
                        onClick={this.handleClearAllFilters}
                    >
                        clear all
                    </span>
                </FilterBarStyles>
            )
        );
    }

    renderPosts() {
        const { filters } = this.state;
        const posts = this.props.data.allMarkdownRemark.edges.filter(
            ({ node }) =>
                filters.every(tag => node.frontmatter.tags.includes(tag))
        );

        return posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
                <div key={node.fields.slug}>
                    <h2 className="title">
                        <Link to={node.fields.slug}>{title}</Link>
                    </h2>
                    <p className="date">{node.frontmatter.date}</p>
                    <TagList
                        tags={node.frontmatter.tags}
                        onTagClick={this.handleAddFilter}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: node.excerpt
                        }}
                    />
                </div>
            );
        });
    }

    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const siteDescription = data.site.siteMetadata.description;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                {this.renderFilterBar()}
                <ContentStyles>{this.renderPosts()}</ContentStyles>
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
                        tags
                    }
                }
            }
        }
    }
`;
