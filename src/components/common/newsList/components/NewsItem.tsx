import React from 'react';

type Story = {
  title: string;
  abstract: string;
  url: string;
  image: string; 
  time: string; 
}

type NewsItemProps = {
  story: Story; // Accepting a single story object as props
}

const NewsItem: React.FC<NewsItemProps> = ({ story }) => {
  return (
    <div className="p-4 border rounded bg-white">
      <div className="w-full">
        <img src={story.image} alt={story.title} className="w-full" /> {/* Using image prop */}
      </div>
      <div className="p-4 border rounded bg-white">
        <h2 className="text-xl font-bold mb-2">{story.title}</h2>
        <p className="text-gray-600">{story.abstract}</p>
        <p className="text-gray-600">{story.time}</p> {/* Using time prop */}
        <a href={story.url} className="text-teal-600 hover:underline font-bold mt-2 block">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

