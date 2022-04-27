let myname = {
  firstName: "sarfaraaz",
  lastName: "khan",
  printfullname: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
myname.printfullname();

let brotherName = {
  firstName: "Sameer",
  lastName: "khan",
};

myname.printfullname.call(brotherName);
