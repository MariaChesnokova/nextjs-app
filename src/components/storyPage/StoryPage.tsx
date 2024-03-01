import React from "react";
import { Story } from '@/hooks/api/TopStoriesHook';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

type StoryPageProps = {
  story: Story;
};

const fetchStoryById = async (storyId: string) => {
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${storyId}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const StoryPage: React.FC<StoryPageProps> = ({ story }) => {
  const router = useRouter();
  const { storyId } = router.query as { storyId: string };
  const { isLoading, isError } = useQuery<Story>(['Story', storyId], () =>
    fetchStoryById(storyId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  
  return (
    <div className="container mx-auto text-center mt-4">
      <h2 className="text-xl font-bold mb-2">{story.title}</h2>
      <p className="text-gray-600">{story.abstract}</p>
      <p className="text-gray-600">{story.section}</p>
      <p className="text-gray-600">{story.subsection}</p>
      <p className="text-gray-600">{story.byline}</p>
    </div>
  );
};

export default StoryPage;
