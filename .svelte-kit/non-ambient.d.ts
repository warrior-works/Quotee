
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/parse-quote" | "/api/track";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/api": Record<string, never>;
			"/api/parse-quote": Record<string, never>;
			"/api/track": Record<string, never>
		};
		Pathname(): "/" | "/api/parse-quote" | "/api/track";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/DevDisplay.png" | "/Discord.png" | "/Facebook.png" | "/Instagram.png" | "/LinkedinLogoMark.png" | "/LinkedinWordMark.png" | "/Pinterest.png" | "/Quotee.png" | "/ShareChat.png" | "/Snapchat.png" | "/Substack.png" | "/Telegram.png" | "/Threads.png" | "/TikTok.png" | "/WhatsApp.png" | "/aashuu.png" | "/apple-touch-icon.png" | "/favicon-96x96.png" | "/favicon.ico" | "/fonts/.DS_Store" | "/fonts/instrument-serif/InstrumentSerif-Italic.woff2" | "/fonts/instrument-serif/InstrumentSerif-Regular.woff2" | "/fonts/open-runde/OpenRunde-Bold.woff" | "/fonts/open-runde/OpenRunde-Bold.woff2" | "/fonts/open-runde/OpenRunde-Medium.woff" | "/fonts/open-runde/OpenRunde-Medium.woff2" | "/fonts/open-runde/OpenRunde-Regular.woff" | "/fonts/open-runde/OpenRunde-Regular.woff2" | "/fonts/open-runde/OpenRunde-Semibold.woff" | "/fonts/open-runde/OpenRunde-Semibold.woff2" | "/og-image.jpg" | "/paper-texture-bg.jpg" | "/site.webmanifest" | "/vercel-dark-bg.jpg" | "/vercel-light-bg.jpg" | "/web-app-manifest-192x192.png" | "/web-app-manifest-512x512.png" | string & {};
	}
}