(async () => {
  const asyncFunc = async () => 1;

  const promise = new Promise((res, rej) => {
    console.log("promise");
    rej("");
  })
    .then(() => console.log("then"))
    .catch((err) => console.log(err))
    .finally(() => console.log("final final final"));

  console.log(promise);

  console.log("async body");

  queueMicrotask(() => {
    console.log("queueMicrotask");
  });

  const results = await Promise.all([asyncFunc(), promise]);

  console.log(results);

  return results;
})();

console.log("script");
