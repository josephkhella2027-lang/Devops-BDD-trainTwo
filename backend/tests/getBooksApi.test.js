/* import request from "supertest";
import app from "../app.js";

describe("GET /api/books", () => {
  test("should return 200", async () => {
    const res = await request(app).get("/api/books");
    expect(res.status).toBe(200);
  });
});
 */

const request = require("supertest");
const app = require("../app");

describe("GET /api/books", () => {
  test("should return 200", async () => {
    const res = await request(app).get("/api/books");

    expect(res.status).toBe(200);
    expect(res.body.books).toBeDefined();
  });
});
