import React from "react";

type Story = {
  title: string;
  abstract: string;
  url: string;
};

type NewsItemProps = {
  data?: {
    results: Story[]; // Accepting a single story object as props
  };
};

const NewsItem: React.FC<NewsItemProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="container mx-auto text-center mt-4">
        No data available
      </div>
    );
  }
  const story = data.results[0];
  return (
    <div className="p-4 border rounded bg-white">
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
  );
};

export default NewsItem;
