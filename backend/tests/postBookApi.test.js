/* const request = require("supertest");
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
}); */

import request from "supertest";
import app from "../app.js";
import { API } from "./config/api.js";

let res;

beforeAll(async () => {
  res = await request(app).post(API.addBook).send({
    title: "test",
    description: "test",
    price: 100,
  });
});

describe("POST /api/add-book", () => {

  test("should create book", () => {
    expect(res.status).toBe(201);
    expect(res.body.book).toBeDefined();
  });

  test("should return numeric id", () => {
    expect(res.body.book.id).toEqual(expect.any(Number));
  });

  test("should return text title", () => {
    expect(typeof res.body.book.title).toBe("string");
  });

  test("should return text description", () => {
    expect(typeof res.body.book.description).toBe("string");
  });

  test("should return numeric price", () => {
    expect(typeof res.body.book.price).toBe("number");
  });

});