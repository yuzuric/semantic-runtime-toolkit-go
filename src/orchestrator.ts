/**
 * Core orchestrator module.
 */
import { MiMoClient } from "./client";

export interface OrchestratorResult {
    output: string;
    tokensUsed: number;
    durationMs: number;
}

export class Orchestrator {
    constructor(private client: MiMoClient) {}

    async run(inputs: Record<string, unknown>): Promise<OrchestratorResult> {
        const start = Date.now();
        const prompt = JSON.stringify(inputs);
        const response = await this.client.chat(prompt, { maxTokens: 512 });

        return {
            output: response.content,
            tokensUsed: response.usage?.totalTokens ?? 0,
            durationMs: Date.now() - start,
        };
    }
}
