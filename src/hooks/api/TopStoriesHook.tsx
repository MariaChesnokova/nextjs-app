import { useQuery } from 'react-query';

type Story = {
  title: string;
  abstract: string;
  url: string;
}

type TopStoriesData = {
  results: Story[];
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const SECTION = "Technology";

const fetchTekNews = async (): Promise<TopStoriesData> => {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${SECTION}.json?api-key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useGetTopStoriesQuery = () => {
  return useQuery<TopStoriesData>("TekNews", fetchTekNews);
};
