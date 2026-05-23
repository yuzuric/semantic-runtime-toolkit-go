import { describe, it, expect } from "vitest";
import { Orchestrator } from "../src/orchestrator";
import { MiMoClient } from "../src/client";

describe("Orchestrator", () => {
    it("constructs without throwing", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        const engine = new Orchestrator(client);
        expect(engine).toBeDefined();
    });

    it("client has correct model", () => {
        const client = new MiMoClient({ model: "mimo-7b", apiKey: "test" });
        expect(client.model).toBe("mimo-7b");
    });
});
