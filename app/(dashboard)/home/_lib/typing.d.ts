import { Novel, Author } from '@prisma/client';

interface INovel extends Novel {
	authors: Author[];
}
