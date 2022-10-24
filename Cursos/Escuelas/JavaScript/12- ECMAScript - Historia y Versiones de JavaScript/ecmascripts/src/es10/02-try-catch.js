// con parámetro en el catch
try {
  hello();
} catch (error) {
  console.error(`error message: ${error.message}\n`);
  console.error(`stack trace: ${error.stack}`);
  writeFile(error);
}

// sin parámetro en el catch
try {
  onotherFn();
} catch {
  console.log("esto es un error")
}