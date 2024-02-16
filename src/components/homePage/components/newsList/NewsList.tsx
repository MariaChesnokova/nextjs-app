import React from 'react';

type Story = {
  title: string;
  abstract: string;
  url: string;
}

type NewsListProps = {
  data: {
    results: Story[];
  };
}
const SECTION = "Technology";
const NewsList: React.FC<NewsListProps> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-4 text-center text-blue-950">Top Stories - {SECTION}</h1>
      <div className="flex flex-col gap-4">
        {data.results.map((story) => (
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

export default NewsList;
