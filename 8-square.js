const size = parseInt(process.argv[2], 10);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += "X";
  }
  for (let j = 0; j < size; j++) {
    console.log(line);
  }
}
