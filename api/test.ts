export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  new Response("Hello world!", {
    headers: {
      "Content-Type": "multipart/x-mixed-replace",
      "Transfer-Encoding": "chunked",
    },
  });
