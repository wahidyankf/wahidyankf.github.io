/**
 * The application's validated environment. This site reads no required
 * server variables today, so there is nothing to validate yet: this module
 * exists as the single place that validation will live when the first
 * variable arrives, and as the composition-root import that proves the tier
 * file was loaded before any other config ran.
 */
export const env = {};
