export function GET() {
	return Response.json({ message: 'GET /api/test', data: { name: 'test' } });
}
