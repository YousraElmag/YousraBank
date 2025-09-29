import request from "supertest";
import express from "express";
import { Register } from "../controle/register";
import { Login } from "../controle/login";
import { supabase } from "../lib/supabase";

jest.mock("../lib/supabase", () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
    },
    from: jest.fn(() => ({
      insert: jest.fn().mockResolvedValue({ error: null }),
    })),
  },
}));

const app = express();
app.use(express.json());
app.post("/api/register", Register);
app.post("/api/login", Login);

describe("Auth Tests with Mock", () => {

  // Register Success
  it("Register Success", async () => {
    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: { user: { id: "1", email: "mock@example.com" } },
      error: null,
    });

    const response = await request(app)
      .post("/api/register")
      .send({
        email: "mock@example.com",
        password: "Password123",
        firstname: "Test",
        lastname: "User",
      });

    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe("mock@example.com");
    expect(response.body).toHaveProperty("bank_account");
  });

  // Register Failure
  it("Register Failure", async () => {
    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: null,
      error: { message: "Email already exists" },
    });

    const response = await request(app)
      .post("/api/register")
      .send({
        email: "mock@example.com",
        password: "Password123",
        firstname: "Test",
        lastname: "User",
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Email already exists");
  });

  // Login Success
  it("Login Success", async () => {
    (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
      data: { user: { id: "1", email: "mock@example.com" } },
      error: null,
    });

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "mock@example.com",
        password: "Password123",
      });

    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe("mock@example.com");
  });

  // Login Failure
  it("Login Failure", async () => {
    (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
      data: null,
      error: { message: "Invalid credentials" },
    });

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "mock@example.com",
        password: "WrongPassword",
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid credentials");
  });

});
