// components/PostList.tsx
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
	query GetPosts {
		posts {
			id
			title
			content
		}
	}
`;

const PostList: React.FC = () => {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			{data.posts.map(
				(post: { id: string; title: string; content: string }) => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				)
			)}
		</div>
	);
};

export default PostList;
