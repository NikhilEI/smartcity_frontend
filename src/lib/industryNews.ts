export type IndustryNewsItem = {
  id: number;
  title: string;
  url: string;
  image: string;
};

type ConvergenceNowPost = {
  id: number;
  title: string;
  url: string;
  image: string;
};

type ConvergenceNowResponse = {
  posts?: ConvergenceNowPost[];
};

const API_URL =
  "https://convergence-now.com/wp-json/secure/v1/posts?category=startup,artificial-intelligence&limit=10";
const API_KEY = "conver26";

/**
 * Server-only module: this fetch always runs on the server (Server Component),
 * so the key never reaches the client bundle. Cached for 15 minutes (Next.js
 * fetch cache) since this feed doesn't need to be real-time.
 */
export async function getIndustryNews(): Promise<IndustryNewsItem[]> {
  const apiUrl = API_URL;
  const apiKey = API_KEY;

  try {
    const res = await fetch(apiUrl, {
      headers: { "x-api-key": apiKey },
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as ConvergenceNowResponse;

    return (data.posts ?? [])
      .filter((post) => post.title && post.url && post.image)
      .map((post) => ({
        id: post.id,
        title: post.title,
        url: post.url,
        image: post.image,
      }));
  } catch {
    return [];
  }
}
