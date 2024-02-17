import { getHomepage } from '$lib/services';

export const load = async () => {
	try {
		const content = await getHomepage();
		return {
			content
		};
	} catch (error) {
		console.error('Error occurred while loading homepage:', error);
		throw error; // Re-throw the error to be caught elsewhere if needed
	}
};
