# Semantic Runtime Toolkit Go

> Distributed agent coordination platform using Xiaomi MiMo for intelligent task decomposition and result aggregation.

`ai-agents` `llm-orchestration` `mimo` `workflow-automation`

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Built with MiMo](https://img.shields.io/badge/Built%20with-Xiaomi%20MiMo-orange.svg)](https://platform.xiaomimimo.com)

## Overview

`semantic-runtime-toolkit-go` is built on top of [Xiaomi MiMo](https://platform.xiaomimimo.com), the open-source large language model series from Xiaomi. The project demonstrates how to integrate MiMo into production systems using its OpenAI-compatible API.

## Use Cases

- **Cooperative agent workflows** — coordinate planner, researcher, and executor agents
- **Long-running task automation** — durable workflows with state recovery
- **A/B agent comparison** — run multiple agent strategies in parallel and aggregate results
- **Tool-augmented reasoning** — chain MiMo calls with external tool invocations

## Quick Start

### Install

```bash
npm install
npm run build
```

### Run

```bash
export MIMO_API_KEY=your_key_here
npm start
```

### Programmatic Use

```typescript
import { MiMoClient } from "./src/client";

const client = new MiMoClient({ model: "mimo-7b", apiKey: process.env.MIMO_API_KEY! });
const response = await client.chat("Hello, MiMo!");
console.log(response.content);
```

## Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Application │───▶│  semantic-runti │───▶│  Xiaomi MiMo    │
│              │     │  (this repo) │     │  (LLM API)      │
└─────────────┘     └──────────────┘     └─────────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │  Local State │
                    │  / Cache     │
                    └──────────────┘
```

The library wraps the MiMo HTTP API and exposes a high-level interface tuned for the agent orchestration use case. Configuration is YAML-first with environment variable overrides for secrets.

## Configuration

`config.yaml`:

```yaml
model: ${MIMO_MODEL:-mimo-7b}
api_key: ${MIMO_API_KEY}
max_parallel: 4
```

Environment variables override file values. See `config.yaml` in the repo root for the full schema.

## Development

```bash
# Run tests
npm test

# Lint
npm run lint
```

CI runs on every push and PR via GitHub Actions (`.github/workflows/ci.yml`).

## Project Structure

```
semantic-runtime-toolkit-go/
├── README.md
├── LICENSE
├── package.json
├── config.yaml
├── src/index.ts
├── src/
│   ├── orchestrator.ts
│   ├── client.ts
│   └── config.ts
├── tests/
│   └── test_orchestrator.ts
└── .github/
    └── workflows/
        └── ci.yml
```

## Why MiMo?

Xiaomi MiMo is a strong open-weight LLM with competitive reasoning performance and an OpenAI-compatible API. Choosing MiMo as the backend gives this project:

- **Cost-effective inference** — significantly cheaper than proprietary frontier models for comparable quality
- **Open licensing** — weights and code are available under permissive terms
- **Strong reasoning** — competitive performance on math, code, and multi-step planning benchmarks
- **Production-ready API** — drop-in replacement for OpenAI client libraries

## Contributing

Contributions welcome. Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Add tests for new behavior
4. Open a PR with a clear description

See `.github/workflows/ci.yml` for the checks that must pass.

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

Built with [Xiaomi MiMo](https://platform.xiaomimimo.com). This project is part of the MiMo 100T Token Plan ecosystem submission.
