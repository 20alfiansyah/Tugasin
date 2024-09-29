const TaskPage: React.FC<{ isDekstop: boolean }> = ({ isDekstop }) => {
  return isDekstop ? (
    <></>
  ) : (
    <>
      <div></div>
    </>
  );
};

export default TaskPage;
