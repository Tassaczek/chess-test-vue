// The ASCII value of the lowercase letter 'a' is 97, 'b' is 98, etc.
// Subtracting 96 from these values results in 'a' being 1, 'b' being 2, and so forth,
// effectively mapping each letter to its alphabetical index.

const charToNumber = (char: string): number => {
	return char.toLowerCase().charCodeAt(0) - 96;
};

export default charToNumber;
