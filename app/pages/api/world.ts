// app/(dashboard)/api/dashboardRoute.ts
import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({ message: 'hello from world' }); // Return the JSON response
}
