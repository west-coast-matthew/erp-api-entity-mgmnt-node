/**
 * Utility method used to update an objects basic attributes (primative, non-collection or 
 * timestamp related fields) based on another.
 * 
 */
export function updateModelBasicAttributes<T extends object, U extends object>(
  source: T,
  target: U,
): U {

  const propertyBlacklist  = ['id','updated_at','created_at','archivedAt'];

  // Convert the blacklist array to a Set for efficient lookups
  const blacklistSet = new Set(propertyBlacklist);

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];

      // Check if the field is blacklisted (using the Set)
      // and if it's not an array or a non-null object
      if (
        !blacklistSet.has(key) && // Not blacklisted
        !Array.isArray(value) && // Not an array
        (typeof value !== 'object' || value === null) // Not a non-null object
      ) {
        // We use 'as any' here because TypeScript cannot guarantee that 'key'
        // will exist on the 'target' object without knowing the specific types U
        (target as any)[key] = value;
      }
    }
  }
  return target;
}
