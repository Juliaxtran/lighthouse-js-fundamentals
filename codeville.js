function chooseStations(stations) {
  const results = []
  for (let index = 0; index < stations.length; index++) {
    const station = stations[index];
    const name = station[0];
    const capacity = station[1];
    const venue = station[2];
    if (capacity >= 20 && (venue === "school" || venue === "community centre")) {
      results.push(name)
    }
  }
  return results;
}

// initial position 

function finalPosition(moves) {
  const initialPosition = [0, 0];

  for (let index = 0; index < moves.length; index++) {
    const direction = moves[index];
    if (direction === "north")
      initialPosition[1] = initialPosition[1] + 1;
    if (direction === "south")
      initialPosition[1] = initialPosition[1] - 1;
    if (direction === "west")
      initialPosition[0] = initialPosition[0] - 1;
    if (direction === "east")
      initialPosition[0] = initialPosition[0] + 1;
  }
  return initialPosition;
}

// 

function finalPosition(moves) {
  const initialPosition = [0, 0];
  for (let index = 0; index < moves.length; index++) {
    const direction = moves[index];
    switch (direction) {
      case "north":
        initialPosition[1] = initialPosition[1] + 1;
        break;
      case "south":
        initialPosition[1] = initialPosition[1] - 1;
        break;
      case "east":
        initialPosition[0] = initialPosition[0] + 1;
        // calculate area 

        function calculateRectangleArea(length, width) {
          if (length < 0 || width < 0)
            return undefined
          const area = length * width;
          return area;
        }

        function calculateTriangleArea(base, height) {
          if (base < 0 || height < 0)
            return undefined
          const area = (base * height) / 2;
          return area;
        }

        function calculateCircleArea(radius) {
          if (radius < 0)
            return undefined
          const area = Math.PI * (Math.pow(radius, 2));
          return area;
        }

        // range 
        function range(start, end, step) {
          const result = []
          for (let index = start; index <= end; index += step) {
            result.push(index)
          }
          return result;
        }

        // bubble array sort 

        function concat(array1, array2) {
          for (let index = 0; index < array2.length; index++) {
            const element = array2[index];
            array1.push(element);
          }
          return bubbleSort(array1)
        }

        function bubbleSort(array) {

        }
        console.log(concat([1, 4, 3], [1, 5, 6]));

        // smart Garbages

        function smartGarbage(trash, bins) {
          switch (trash) {
            case "waste":
              bins["waste"] = bins["waste"] + 1;
              break;
            case "recycling":
              bins["recycling"] = bins["recycling"] + 1;
              break;
            case "compost":
              bins["compost"] = bins["compost"] + 1;
              break;
          }
          return bins;
        }


        function smartGarbage(trash, bins) {
          switch (trash) {
            case "waste":
              bins.waste = bins.waste + 1;
              break;
            case "recycling":
              bins.recycling = bins.recycling + 1;
              break;
            case "compost":
              bins.compost = bins.compost + 1;
              break;
          }
          return bins;
        }
        // judge vegetables 

        function judgeVegetable(vegetables, metric) {
          let max = 0;
          let submitter;

          for (let index = 0; index < vegetables.length; index++) {
            const vegetable = vegetables[index];
            const value = vegetable[metric]
            if (value > max) {
              max = value;
              submitter = vegetable.submitter
            }
          }
          return submitter;
        }

        // driving 
        function carPassing(cars, speed) {
          const obj = {
            time: Date.now(),
            speed: speed
          }
          cars.push(obj)
          return cars;
        }
// merge
function lastIndexOf(array, value) {
  let result = -1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      result = index;
    }
  }
  return result;
}