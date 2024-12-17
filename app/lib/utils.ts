import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({ prefix: "tw-" });

// NOTE: To use this `cn` function instead of the generated one,
// import with the `~/` prefix instead of `@/`.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
