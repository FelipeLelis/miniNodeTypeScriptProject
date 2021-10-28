import request from "supertest"

import createServer from "src/server"

const app = createServer();

describe("Posts test", function () {
    it('POST /api/post respond 200, create post', function (done) {
        request(app).post("/api/post")
            .set('Accept', 'application/json')
            .send({
                "post": [
                    {
                        "title": "teste",
                        "body": "teste",
                        "tags": "['tag1', 'tag2']"
                    }
                ]
            })
            .expect(200, done)
    });

    it('GET /api/posts respond 200, list posts', function (done) {
        request(app).get("/api/posts").expect(200, done)
    });

    it('GET /api/post respond 200, list one post', function (done) {
        request(app).get("/api/post")
            .set('Accept', 'application/json')
            .query({id: "165615a0-0b28-4757-8ce3-ef5cabbf5b65"})
            .expect(200, done)
    });

    it('PUT /api/post/edit respond 200, Edit a post', function (done) {
        request(app).put("/api/post/edit")
            .set('Accept', 'application/json')
            .send({
                "post": [
                    {
                        "id": "165615a0-0b28-4757-8ce3-ef5cabbf5b65",
                        "title": "teste",
                        "body": "teste",
                        "tags": "['tag1', 'tag2']"
                    }
                ]
            })
            .expect(200, done)
    });

    it('DELETE /api/post/delete respond 200,delete a post', function (done) {
        request(app).delete("/api/post/delete")
            .set('Accept', 'application/json')
            .query({id: "165615a0-0b28-4757-8ce3-ef5cabbf5b65"})
            .expect(200, done)
    });

})