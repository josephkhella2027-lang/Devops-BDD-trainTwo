/* const request = require("supertest");
const app = require("../app");

describe("GET /api/books", () => {
  test("should return 200", async () => {
    const res = await request(app).get("/api/books");

    expect(res.status).toBe(200);
    expect(res.body.books).toBeDefined();
  });
});
 */

import request from "supertest";
import app from "../app.js";
import { API } from "./config/api.js";

let res;

beforeAll(async () => {
  res = await request(app).get(API.getBooks);
});

describe("GET /api/books", () => {
  test("should return 200", () => {
    expect(res.status).toBe(200);
    expect(res.body.books).toBeDefined();
  });
});
