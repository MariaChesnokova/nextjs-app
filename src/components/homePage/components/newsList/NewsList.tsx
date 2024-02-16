import React from 'react';

type Story = {
  title: string;
  abstract: string;
  url: string;
}

type NewsListProps = {
  data?: {
    results: Story[];
  };
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  if (!data) {
    return <div className="container mx-auto text-center mt-4">No data available</div>;
  }
  return (
    <div className="container mx-auto">

      <div className="flex flex-col gap-8">
      <div className="w-full h-1/2">
            <img src="/next.jpg" alt="Story" className="w-full h-full object-cover" />
        </div>
        {data.results.map((story) => (
          <div key={story.url} className="p-4 border rounded bg-white">
          <div className="w-full">
            <div className="p-4 border rounded bg-white">
            <h2 className="text-xl font-bold mb-2">{story.title}</h2>
            <p className="text-gray-600">{story.abstract}</p>
            <a
              href={story.url}
              className="text-teal-600 hover:underline font-bold mt-2 block"
            >
              Read more
            </a>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
