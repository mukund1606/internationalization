import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'de', 'fr', 'hi'],

	// Used when no locale matches
	defaultLocale: 'fr',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(de|en|fr|hi)/:path*'],
};
