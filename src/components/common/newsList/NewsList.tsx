import React from 'react';
import NewsItem from './components/NewsItem'; 
import Story from './components/NewsItem'; 

type Story = {
  title: string;
  abstract: string;
  url: string;
  image: string;
  time: string;
}

type NewsListProps = {
  data?: {
    results: Story[];
  };
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  if (!data || !data.results) {
    return <div className="container mx-auto text-center mt-4">No data available</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-8">
        {data.results.map((story) => (
          <NewsItem key={story.url} story={story} /> 
        ))}
      </div>
    </div>
  );
};

export default NewsList;