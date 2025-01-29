'use client';
import { GET_NOVELS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { INovel } from '../_lib/typing';

export default function Novels() {
	const { data } = useQuery(GET_NOVELS);
	const novels: INovel[] = data?.novels;
	console.log(novels);
	return <div>Novels</div>;
}
