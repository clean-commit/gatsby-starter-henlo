import { useStaticQuery, graphql } from 'gatsby';
export const useForms = () => {
  const {
    allMarkdownRemark: { edges: forms },
  } = useStaticQuery(
    graphql`
      query FormsQuery {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "form" } } }) {
          edges {
            node {
              id
              frontmatter {
                id
                title
                settings {
                  resolver
                  success_msg
                  event_id
                }
                rows {
                  position
                  fields {
                    type
                    input_type
                    name
                    value
                    autocomplete
                    label
                    required
                    content
                    button {
                      content
                      url
                      variant
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  return forms;
};
