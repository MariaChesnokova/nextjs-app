import React, { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetTopStoriesQuery } from '@/hooks/api/TopStoriesHook';
import NewsList from '@/components/common/newsList/NewsList'; 

const queryClient = new QueryClient();

interface QueryProviderProps {
  children?: ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
    const { data, isLoading, isError, refetch } = useGetTopStoriesQuery("TopStories");

    useEffect(() => {
      refetch(); // Fetch the data when the component mounts or the dependency changes
    }, []);
    
    if (isLoading) return <div className="container mx-auto text-center mt-4">Loading...</div>;
    if (isError) return <div className="container mx-auto text-center mt-4">Error fetching data</div>;

  return (
    
    <QueryClientProvider client={queryClient}>
      <NewsList data={data} />
    </QueryClientProvider>
  );
};


export default QueryProvider; 
