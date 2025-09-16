/**
 * Safely converts a value to a string for use in React components.
 *
 * - Returns `fallback` if the value is `null` or `undefined`.
 * - Calls `.toString()` on other values.
 * - Catches errors from unusual `.toString()` implementations.
 *
 * @param value - The value to convert.
 * @param fallback - The string to return if conversion fails (default: "").
 * @returns A safe string guaranteed to be renderable by React.
 *
 * @example
 * safeString("hello"); // "hello"
 * safeString(42); // "42"
 * safeString(null, "[missing]"); // "[missing]"
 */
export function safeString(
  value: string | null | undefined,
  fallback?: string
): string;
export function safeString(value: number | boolean, fallback?: string): string;
export function safeString(value: unknown, fallback?: string): string;

export function safeString(value: unknown, fallback = ""): string {
  if (value == null) return fallback; // handles null/undefined
  try {
    return value.toString();
  } catch {
    return fallback;
  }
}
