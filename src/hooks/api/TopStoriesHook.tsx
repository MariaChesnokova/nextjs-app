import { useQuery } from 'react-query';

type Story = {
  title: string;
  abstract: string;
  url: string;
  image: string;
  time: string; 
}

type TopStoriesData = {
  results: Story[];
}

type Sections = "TopStories" | "Technology";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchTopStories = async (section: Sections): Promise<TopStoriesData> => {
  try {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: TopStoriesData = await response.json(); // Parse response body as JSON
  return data;
}
  catch (error) {
    // Handle the error here, you can log it or throw a custom error
    console.error("Error fetching top stories:", error);
    throw new Error("Failed to fetch top stories");
  }
};

export const useGetTopStoriesQuery = (section: Sections) => {
  return useQuery<TopStoriesData>(["TopStories", section], () => fetchTopStories(section));
};
