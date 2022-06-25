import './MyPaintingColor.css';

const MyPaintingColor = ({ search }) => {
  const background = {
    backgroundColor: `${search}`,
  };

  return (
    <div className="box" style={background}>
      {search || 'Empty Value'}
    </div>
  );
};

export default MyPaintingColor;
