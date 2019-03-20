function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  // (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
  const results = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    results.push(
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance
    );
  }
  return results;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
