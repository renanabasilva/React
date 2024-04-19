

const button = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
export default function SortNumbersAndDates() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sorting Articles</h1>
      <div className="flex flex-row justify-between items-center gap-5">
        <label className=""> Sort by: </label>
        <button className={button}>Most Upvoted</button>
        <button className={button}>Most Recent</button>
      </div>

    </div>
  );
}
