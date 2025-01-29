// dine ilalagay mo yung pang fetch queries lang from apollo
// graphql naka indicate na yon sa localhost:3000/api/graphql queries yung select mo

import { gql } from '@apollo/client';

export const GET_NOVELS = gql`
	query Novels {
		novels {
			id
			title
			image
			createdAt
			updatedAt
			authors {
				id
				name
				novelID
			}
		}
	}
`;
