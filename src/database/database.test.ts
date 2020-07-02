import * as db from "./database";

const emptyDB: db.DbType = {};
const dbTest1: db.DbType = {
  page1: { 
    item1: "Hello",
    sillyItem: "Monty Python" 
  },
  page2: {
    item1: "Goodbye",
    item2: "Fetched item 2",
    item3: "Fetched item 3"
  }
}
// console.log("dbTest1")
// console.log(dbTest1.page1.item1)
// console.log(dbTest1["page1"]["item1"])
// console.log(dbTest1.page2.item1)
// console.log("End dbTest1")

const test1DB = db.DatabaseType.create(dbTest1) 

// hack to divide test reporting into sections
it("\n\n*** Checks isDbType() method", function(done) {
  done()
})
it("Checks valid and empty", function (done) {
  let y: boolean = test1DB.isDbType(dbTest1);
  expect(y).toEqual(true)
  // empty table is valid
  y = test1DB.isDbType({ fred: {}})
  const x: boolean = test1DB.isDbType(emptyDB);
  expect(x).toEqual(true)
  done()
})


// Hard to check bad inputs types with typescript. cast to any

it("Checks strings, numbers, booleans", function(done) {
  expect(test1DB.isDbType( "Hello" as any)).toEqual(false)
  expect(test1DB.isDbType( 42 as any)).toEqual(false)
  expect(test1DB.isDbType(false as any)).toEqual(false)
  done()
})

it("Checks for properties with incorrect types", function(done) {
  // running all the examples below
  [
    { fred: 0 },
    { fred: "Hello" },
    { fred: true },
    { fred: ["a", "b"] },
    { fred: { fred: 0 } },
    { fred: { fred: { fred: "Anything" } } },
    { fred: { fred: true } },
    { fred: ["a", "b"] },
    { fred: { fred: "valid", george: 0 } },
    { fred: { fred: "valid", george: { fred: "Anything" } } },
    { fred: { fred: "valid", george: false } },
    { fred: { fred: "valid", george: ["a", "b"] } },
    { fred: { fred: "valid", george: [] } },
    
  ].forEach( (value) => {
    expect(test1DB.isDbType(value as any)).toEqual(false)
    
  })
  
  done()
})

// hack to divide test reporting into sections
it("\n*** Checks constructor and create() method", function (done) {
  done()
})

it("Empty", function (done) {
  const localDB: db.DatabaseType = db.DatabaseType.create(emptyDB);
  expect(typeof(localDB)).toEqual("object");
  const outDb: db.DbType = localDB.save();
  expect(typeof (outDb)).toEqual("object");
  // expect(outDb).to.deep.equal({});
  done();
});
it("With data", function(done) {
  const localDB: db.DatabaseType = db.DatabaseType.create(dbTest1);
  expect(typeof (localDB)).toEqual("object");
  const outDb: db.DbType = localDB.save();
  expect(typeof (outDb)).toEqual("object");
  const val: string = localDB.getData("page2", "item3");
  expect(val).toEqual("Fetched item 3");
  done();
    // expect(outDb).to.deep.equal({});

})
it("Using constructor with no data", function (done) {
  const localDB: db.DatabaseType = db.DatabaseType.create(emptyDB);
  // console.log("result");
  // console.log(testDb1);
  expect(typeof (localDB)).toEqual("object");
  const val: string = localDB.getData("page2", "item3");
  expect(val).toEqual("");
  const outDb: db.DbType = localDB.save();
  expect(typeof (outDb)).toEqual("object");
  // expect(outDb).to.deep.equal({});
  done();
});
it("Using constructor with data", function (done) {
  const localDB: db.DatabaseType = new db.DatabaseType(dbTest1);
  expect(typeof (localDB)).toEqual("object");
  const outDb: db.DbType = localDB.save();
  expect(typeof (outDb)).toEqual("object");
  const val: string = localDB.getData("page2", "item3");
  expect(val).toEqual("Fetched item 3");
  // expect(outDb).to.deep.equal(dbTest1);

  done();
})

test.todo("Load data");
test.todo("Save");

test.todo("getData");
test.todo("saveData");
test.todo("saveData invalid data");
test.todo("saveData empty data");
test.todo("saveData data type");




export default emptyDB;
