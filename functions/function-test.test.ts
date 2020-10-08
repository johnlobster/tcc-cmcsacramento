import aws from 'aws-lambda'

import {handler} from './function-test'

// export interface APIGatewayProxyEventBase<TAuthorizerContext> {
//   body: string | null;
//   headers: { [name: string]: string };
//   multiValueHeaders: { [name: string]: string[] };
//   httpMethod: string;
//   isBase64Encoded: boolean;
//   path: string;
//   pathParameters: { [name: string]: string } | null;
//   queryStringParameters: { [name: string]: string } | null;
//   multiValueQueryStringParameters: { [name: string]: string[] } | null;
//   stageVariables: { [name: string]: string } | null;
//   requestContext: APIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext>;
//   resource: string;
// }

// const event1: aws.APIGatewayProxyEvent = {
//   body: "A cool, meaningful message",
//   headers: {
//     host: "localhost:9000"
//   },
//   multiValueHeaders: null,
//   httpMethod: "POST",
//   isBase64Encoded: false,
//   path: "localhost:9000",
//   pathParameters: null,
//   queryStringParameters: null,
//   multiValueQueryStringParameters: null,
//   stageVariables: null,
//   resource: ""
// }
const event1  = {
  body: "A cool, meaningful message",
  headers: {
    host: "localhost:9000"
  },
  httpMethod: "POST",
  path: "localhost:9000",
}

test("mail simple message", async (done)=> {
  const res: any = await handler(event1 as any);
  expect(res.statusCode).toEqual(200);
  console.log(res)

  expect(res).not.toBe({});
  done()
}); 


export default event1

