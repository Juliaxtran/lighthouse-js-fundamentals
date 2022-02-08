codeville.js

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// good stations have at least 20 capacity
// Stations can have schools Or community centers 

 function chooseStations (stations) {
  for ( const station of stations) {
    const capacity = station[1]
    
    if (capacity >= 20) {
      console.log(station[0])

      const type = station[2]
      if (type === "school" || type === "community center")
    
     }
    }
   }

 }
 console.log(chooseStations(stations))
