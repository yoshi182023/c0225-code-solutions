import { useState } from 'react';
import { TopicCard } from './TopicCard';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  myProp: Topic[];
};

export function Accordion({ myProp }: Props) {
  const [openTopic, setOpenTopic] = useState(null);

  function handleClick(topicId: number) {
    if (openTopic === topicId) {
      setOpenTopic(null);
    } else {
      setOpenTopic(topicId);
    }
  }

  return (
    <div>
      {myProp.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopic === topic.id}
          onCustomClickProps={handleClick}
        />
      ))}
    </div>
  );
}
