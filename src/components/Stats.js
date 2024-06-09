export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing lisy 🚀</em>
      </p>
    );

  const numLength = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? 'You got everything! Ready to go ✈' :
          `💼 You have ${numLength} items on your list, and you already packed
        ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}
