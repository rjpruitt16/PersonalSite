import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Interest from '~/containers/Interest';

const InterestTemplate = props => (
  <Layout {...props}>
    <Interest {...props} />
  </Layout>
);

export default InterestTemplate;

export const pageQuery = graphql`
  query InterestQuery ($path: String!) {
    markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
