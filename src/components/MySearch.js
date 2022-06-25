import './MySearch.css';

const MySearch = ({ setColor }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="search"
        placeholder="Write your color here"
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default MySearch;
