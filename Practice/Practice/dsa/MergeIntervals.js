const MergeIntervals = () => {
  let intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const lastInterval = result[result.length - 1];
    const [lastStart, lastEnd] = lastInterval;

    if (currStart <= lastEnd) {
      lastInterval[1] = Math.max(lastEnd, currEnd);
    } else {
      result.push([currStart, currEnd]);
    }
  }
};
export default MergeIntervals;
