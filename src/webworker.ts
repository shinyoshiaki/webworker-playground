export default function WebWorker(worker: any) {
  const code = worker.toString();
  console.log({ code });
  const blob = new Blob(["(" + code + ")()"]);
  return new Worker(URL.createObjectURL(blob));
}
