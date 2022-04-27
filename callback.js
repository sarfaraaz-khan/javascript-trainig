let numb = [1, 2, 3, 4, 5, 6];

function editArray(array, callback) {
  array.push(20);
  callback();
}

editArray(numb, function () {
  console.log("numbers", numb);
});
