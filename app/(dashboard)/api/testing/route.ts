// app/(dashboard)/api/dashboardRoute.ts
import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({ message: 'hello from hello' }); // Return the JSON response
}
