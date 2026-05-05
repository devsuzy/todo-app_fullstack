export default function TodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleDateString("en-US", { month: "long" }).slice(0, 3);
  const day = today.getDate();
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="flex-1 text-3xl font-bold text-gray-900 ">{day}</p>
        <div className="flex flex-col text-base items-center">
          <p className="flex-1 font-semibold text-gray-900">{month}</p>
          <p className="flex-1 text-gray-700">{year}</p>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-900">{dayOfWeek}</p>
    </div>
  );
}
