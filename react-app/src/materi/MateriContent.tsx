interface MateriContentProps {
  content: string;
}

const MateriContent = ({ content }: MateriContentProps) => {
  return (
    <div
      className="materi-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MateriContent;
