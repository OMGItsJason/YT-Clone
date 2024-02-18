import { getHomepage } from '$lib/services';

export const load = async () => {
	try {
		const contents = await getHomepage();
		return {
			contents
		};
	} catch (error) {
		console.error('Error occurred while loading homepage:', error);
		throw error; // Re-throw the error to be caught elsewhere if needed
	}
};
