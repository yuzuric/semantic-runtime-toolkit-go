/**
 * semantic-runtime-toolkit-go - Distributed agent coordination platform using Xiaomi MiMo for intelligent task decomposition and result aggregation.
 */
import { MiMoClient } from "./client";
import { Orchestrator } from "./orchestrator";
import { loadConfig } from "./config";

async function main(): Promise<void> {
    const config = loadConfig("config.yaml");
    const client = new MiMoClient({
        model: config.model,
        apiKey: config.apiKey,
    });

    const engine = new Orchestrator(client);
    const result = await engine.run({ topic: "MiMo capabilities" });

    console.log("Completed:", JSON.stringify(result, null, 2));
}

main().catch((err) => {
    console.error("fatal:", err);
    process.exit(1);
});
