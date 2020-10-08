
import { APIGatewayEvent } from 'aws-lambda'

export async function handler(event: APIGatewayEvent) {
  
  return new Promise((resolve, reject) => {
    
    const entryTime = new Date()
    console.log(`Handler called by website ${event.headers.host} ${entryTime}`)
    console.log(event)
    
    const exitTime = new Date()
    const runTime = new Date(exitTime.valueOf() - entryTime.valueOf())
    resolve(
      {
        statusCode: 200,
        body: `function-test.ts completed in ${runTime.getSeconds()} seconds`,
      }
      
      )
  })   
}
  