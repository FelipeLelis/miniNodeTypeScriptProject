import request from "supertest"
import  expect  from "chai"
import createServer from "src/server"
const app = createServer()
describe("Server checks", function (){
    it('Server created', function (done) {
        request(app).get("/api/posts").expect(200, done)
    });
})