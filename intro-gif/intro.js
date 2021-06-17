const app1 = document.getElementById("app1");
const app2 = document.getElementById("app2");
const typewriter1 = new Typewriter(app1, {
  loop: true,
  delay: 35,
  autostart: true,
});
const typewriter2 = new Typewriter(app2, {
  loop: true,
  delay: 35,
  autostart: true,
});

typewriter1
  .pauseFor(1000)
  .typeString("👋 Hi There ! I'm Chedly Zouche.")
  .pauseFor(1000)
  .deleteChars(18)
  .pauseFor(2000)
  .typeString("I'm a Computer Engineering Student")
  .pauseFor(2000)
  .deleteChars(48)
  .typeString("Get to know me through this page")
  .pauseFor(1500)
  .deleteChars(48)
  .typeString("Feel free to reach out")
  .pauseFor(3000)
  .deleteChars(48)
  .start();

typewriter2
  .pauseFor(1000)
  .typeString("Welcome to my Github Profile")
  .pauseFor(500)
  .deleteChars(28)
  .pauseFor(1000)
  .typeString("At the National Engineering School of Carthage, Tunisia")
  .pauseFor(250)
  .deleteChars(56)
  .pauseFor(9600)
  .typeString("chedly.zouche@pm.me")
  .pauseFor(3000)
  .deleteChars(48)
  .start();
