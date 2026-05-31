/* import request from "supertest";
import app from "../app.js";

describe("POST /api/add-book", () => {
  test("should create book", async () => {
    const res = await request(app).post("/api/add-book").send({
      title: "test",
      description: "test",
      price: 100,
    });

    expect(res.status).toBe(201);
  });
});
 */

const request = require("supertest");
const app = require("../app");

describe("POST /api/add-book", () => {
  test("should create book", async () => {
    const res = await request(app).post("/api/add-book").send({
      title: "test",
      description: "test",
      price: 100,
    });

    expect(res.status).toBe(201);
    expect(res.body.book).toBeDefined();
  });
});
