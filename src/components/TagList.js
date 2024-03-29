import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagListStyles = styled.ul`
    list-style: none;
    li {
        display: inline-block;
        margin-bottom: 0.8rem;
        :not(:last-child) {
            margin-right: 0.4rem;
        }
    }
`;

const TagList = ({ tags, onTagClick }) => {
    return (
        <TagListStyles>
            {tags.map((tag, i) => (
                <li key={i}>
                    <Tag role="link" onTagClick={onTagClick} text={tag} />
                </li>
            ))}
        </TagListStyles>
    );
};

export default TagList;
