import type { Topic } from './Accordion';

type TopicProps = {
  topic: Topic;
  isOpen: boolean;
  onCustomClickProps: (topicId: number) => void;
};

export function TopicCard({ topic, isOpen, onCustomClickProps }: TopicProps) {
  return (
    <div className="topic">
      <div
        className="topic-title"
        onClick={() => onCustomClickProps(topic.id)}
        style={{
          backgroundColor: 'lightgray',
          border: '3px solid black',
          padding: '8px',
          margin: '4px 0',
          borderRadius: '4px',
        }}>
        <h3>{topic.title}</h3>
      </div>
      {/* pass another prop to this topic , if isOpen is true, */}
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
