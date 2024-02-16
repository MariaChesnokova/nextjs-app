import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetTopStoriesQuery } from './hooks/api/TopStoriesHook';
import NewsList from './components/homePage/components/newsList/NewsList';


const queryClient = new QueryClient();

const WrappedTekNews: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TekNews />
    </QueryClientProvider>
  );
};

const TekNews: React.FC = () => {
  const { data, isLoading, isError } = useGetTopStoriesQuery();

  if (isLoading) return <div className="container mx-auto text-center mt-4">Loading...</div>;
  if (isError) return <div className="container mx-auto text-center mt-4">Error fetching data</div>;

  return <NewsList data={data} />;
};

export default WrappedTekNews;
