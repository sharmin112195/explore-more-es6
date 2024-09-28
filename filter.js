// filter selects elements based on a condition and return an array with the elements that fulfilled the condition.

const players = [75, 65, 67, 72, 55, 59, 84, 98, 52];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);

// const selected = players.filter(p => p % 2 === 1);
const selected = players.filter(p => p % 2 === 0)
//  console.log(selected)

const friends = ['Tom', 'John', 'Micheal', 'Oliver']
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);