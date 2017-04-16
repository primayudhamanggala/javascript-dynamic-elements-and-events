const fs = require("fs")

let idGenerator = () => {
  return Math.floor(Math.random()*100)
}

let readFile = () => {
  let data = fs.readFileSync("/home/primayudha/Documents/portofolio/javascript-dynamic-elements-and-events/models/todo.json", "utf-8");
  return data;
}


module.exports = {
  create: (req, res) => {
    let newActivity = {
      id: idGenerator(),
      activity: req.body.todo,
      completion: false,
      create_date: new Date()
    }
    let data = readFile();
    let parseData = JSON.parse(data);
    parseData.todo.push(newTodo);
    fs.writeFile("/home/primayudha/Documents/portofolio/javascript-dynamic-elements-and-events/models/todo.json", JSON.stringify(parseData), function(err) {
        if(err) {
          res.send(err);
        }else {
          res.send(readFile());
        }
    });
  },
  getData: (req, res) => {
    res.send(readFile())
  },
  update: (req, res) => {
    let data = JSON.parse(readFile());
    data.todo.forEach((todoData) => {
      if (todoData.id == req.params.id) {
        todoData.completion = true;
        todoData.update_date = new Date();
      }
    })
    fs.writeFile("/home/primayudha/Documents/portofolio/javascript-dynamic-elements-and-events/models/todo.json", JSON.stringify(data), function(err) {
        if(err) {
          res.send(err);
        }else {
          res.send(readFile());
        }
    });
  },
  delete: (req, res) => {
    let data = JSON.parse(readFile());
    data.todo.forEach((todoData, index) => {
      if (todoData.id == req.params.id) {
        data.todo.splice(index, 1);
      }
    })
    fs.writeFile("/home/primayudha/Documents/portofolio/javascript-dynamic-elements-and-events/models/todo.json", JSON.stringify(data), function(err) {
        if(err) {
          res.send(err);
        }else {
          res.send(readFile());
        }
    });
  }
}
