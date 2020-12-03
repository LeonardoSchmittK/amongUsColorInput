const sentences = [
  "Today was awesome",
  "I love my life",
  "Thanks, life",
  "I'm grateful ",
  "Please let me sleep happy",
  "Make tomorrow even more badass",
  "GOOD BYEE!!",
  "And, of course",
  "IM GOING TO BE A SOFTWARE DEVELOPER!!!!!!!!!",
];

i = -1;
count = 0;
(function f() {
  i = (i + 1) % sentences.length;
  console.log(sentences[i]);
  setTimeout(f, 1000);
  count++
  if(count===sentences.length){
   process.exit()
  }
})

();

// let num = new Number(23);
// // let x = Object.prototype.toString.call(c).replace("[object ", "").split("");
// // x.pop();
// // let r = x.join('')
// let numTypeTransformed = Object.prototype.toString
//   .call(num)
//   .replace(/\[|\]|object/gi, "")
//   .trim();
// console.log(numTypeTransformed);

// let steveJobs = {
//   mission: " Change the world".trim(),
//   describe() {
//     return this.mission;
//   },
// };

// let steveWoz = {
//   mission: "Do great engineering",
// };

// const x = steveJobs.describe.call(steveWoz)

// console.log(x);

