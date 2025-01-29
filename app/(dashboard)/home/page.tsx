import React from 'react';
import Novels from './_component/Novels';

export default function page() {
	return (
		<section className='p-2 bg-slate-300 min-h-screen'>
			<h1>HOME</h1>
			<Novels />
		</section>
	);
}
