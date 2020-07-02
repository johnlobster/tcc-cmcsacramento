// abstract database implementation

// types
export type entryType = string;
export interface TableType {
  [entryName: string]: entryType;
}
export interface DbType {
  [tableName: string]: TableType;
}

export class DatabaseType {
  // All the data in the database
  private theData: DbType;

  constructor(initData: DbType) {
    // check types
    this.theData = Object.assign({}, initData);

  }

  // The data can acquired from an API in JSON format, so need to check
  // for a valid database before creating, even using typescript
  isDbType = (testMe: DbType): boolean => {
    let matches = true;
    if (typeof(testMe) !== "object") {
      matches=false;
    } else {
      for( const key of Object.keys(testMe)) {
        // careful to distinguish between an array and object
        if( (typeof(testMe[key])!== "object") || (testMe[key].length) ){
          matches=false;
        } else  {
          for( const subKey of Object.keys(testMe[key])) {
            if (typeof (testMe[key][subKey]) !== "string") {
              matches = false;
            }
          }
        }
      }
    }
    return matches;
  }

  static create = (initData: DbType): DatabaseType => {
    // check incoming data
    return (new DatabaseType(initData));
  }

  
  // load new data into the database
  load = (newData: DbType): void =>  {
    // could check for valid data
    this.theData = Object.assign({}, newData);
  }

  // get data from the database, returns object
  save = (): DbType => {
    return this.theData;
  }

  getData = (tableName: string, id: string): string => {
    // check for valid entry exists
    // return `${tableName} ${id}`;
    let data = ""
    try {
      data = this.theData[tableName][id];
    }
    catch {
      // unable to access the value, but don't throw exception
      // throw new Error(`database: getData(${tableName},${id}) doesn't exist in database`);
    }
    return data;
  }
    

  storeData = (tableName: string, id: string, data: string): void => {
    // overwrites existing or creates new
    this.theData[tableName][id] = data;
  }
}
