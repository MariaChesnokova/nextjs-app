import { useQuery } from "react-query";

type Story = {
  title: string;
  abstract: string;
  url: string;
};

type TopStoriesData = {
  results: Story[];
};

type Sections =
  | "home"
  | "books"
  | "business"
  | "movies"
  | "science"
  | "sports"
  | "sundayreview"
  | "technology";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchTopStories = async (section: Sections): Promise<TopStoriesData> => {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Parse response body as JSON
};

export const useGetTopStoriesQuery = (section: Sections) => {
  return useQuery<TopStoriesData>(["TopStories", section], () =>
    fetchTopStories(section)
  );
};
