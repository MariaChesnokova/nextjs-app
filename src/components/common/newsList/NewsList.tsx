import React from 'react';
import NewsItem from './components/NewsItem'; 
import { useGetTopStoriesQuery } from '@/hooks/api/TopStoriesHook';


const NewsList: React.FC = () => {
  const { data, isLoading, isError } = useGetTopStoriesQuery("technology");

  if (isLoading) return <div className="container mx-auto text-center mt-4">Loading...</div>;
  if (isError) return <div className="container mx-auto text-center mt-4">Error fetching data</div>;

  return (
    <div>
      {data && data.results.map((story, index) => (
        <NewsItem key={index} data={{ results: [story] }} />
      ))}
    </div>
  );
};

export default NewsList;
