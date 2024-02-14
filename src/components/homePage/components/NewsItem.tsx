import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const API_KEY = "x3IXlMwcMl7J2GT0kZZlEnzmNnbhfjqR";
const SECTION = "Technology";

const fetchTekNews = async () => {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${SECTION}.json?api-key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const TekNews: React.FC = () => {
  const { data, isLoading, isError } = useQuery("TekNews", fetchTekNews);

  if (isLoading) return <div className="container mx-auto text-center mt-4">Loading...</div>;
  if (isError) return <div className="container mx-auto text-center mt-4">Error fetching data</div>;

  return (
    <div className="container mx-auto">
    <h1 className="text-4xl font-serif font-bold mb-4 text-center text-blue-950">Top Stories - {SECTION}</h1>
    <div className="flex flex-col gap-4">
      {data.results.map((story: any) => (
        <div key={story.url} className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">{story.title}</h2>
          <p className="text-gray-600">{story.abstract}</p>
          <a
            href={story.url}
            className="text-blue-600 hover:underline mt-2 block"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

const WrappedTekNews: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TekNews />
    </QueryClientProvider>
  );
};

export default WrappedTekNews;
