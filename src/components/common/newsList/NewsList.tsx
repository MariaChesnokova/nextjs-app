import React from 'react';
import { useRouter } from 'next/router';
import NewsItem from './components/NewsItem'; 
import { useGetTopStoriesQuery, Sections } from '@/hooks/api/TopStoriesHook';

interface NewsListProps {
  section: Sections; 
}
const NewsList: React.FC<NewsListProps> = ({section}) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetTopStoriesQuery(section);

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
