// export a request handler function instead of a React Component
export default function handle(req, res) {
  // 返回非 json 数据
  // res.end('Hello World')

  // 返回 json 数据
  res.json({
    code: 0,
    msg: "Success",
    data: {
      name: "adler",
      sex: "male",
      msg: "this is api01",
    },
  });
}

// localhost: 3000 / project01 / index;
// localhost: 3000 / project02 / index;
