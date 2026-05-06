export const splashLines = [
  "code go brrr",
  "now with extra bugs",
  "building on vibes",
  "one more refactor",
  "slightly less broken than yesterday",
  "ships at 3am",
  "dangerously optimized",
  "blazingly fast",
  "please do not touch",
  "works on my pc",
  "caffeinated pixels",
  "prod is a mindset",
  "anything but actually coding",
  "it compiled with pedantic rust",
  "ship first apologize later",
  "powered by questionable choices",
  "cache invalidation fan club",
  "works until observed",
  "git blame says hello",
  "dependency update survivor",
  "typed with unreasonable confidence",
  "404 motivation not found",
  "merge conflict philosopher",
] as const;

export function getSplashLine(index: number) {
  return splashLines[index % splashLines.length];
}
