const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("returns ok status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe('GET /health', () => {
  it('should return status 200 and healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should include uptime as a number', async () => {
    const res = await request(app).get('/health');
    expect(res.body.uptime).toBeDefined();
    expect(typeof res.body.uptime).toBe('number');
  });
});