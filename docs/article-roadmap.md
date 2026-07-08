# Article roadmap

Fecha de plan inicial: 2026-07-06

## Prioridad 1: Nuku

### 1. Nuku: building a local-first health tracker for families

- Idioma sugerido: English or Spanish. Spanish is stronger if the target reader is family/caregiver oriented; English is stronger if the goal is open-source reach.
- Tesis: Family health tracking needs privacy, low-friction input and self-hosting more than yet another cloud dashboard.
- Audiencia: developers building local-first apps, caregivers with technical background, health-tech builders.
- Outline:
  1. The real workflow: multiple family members caring for multiple patients
  2. Why local-first and self-hosted matters for health data
  3. Modeling blood pressure, glucose and insulin as daily records
  4. Web app, PostgreSQL, Prisma and Docker Compose architecture
  5. Optional Telegram bot for quick phone input
  6. Export, charts and caregiver review workflows
  7. What still needs improvement
- Evidence to collect:
  - README feature list
  - database schema
  - screenshots with demo data
  - Telegram command flow
  - Docker Compose setup
- Privacy notes: use seed/demo data only.
- Readiness: needs screenshots and schema review.

### 2. Designing multi-patient health records without sending data to the cloud

- Idioma sugerido: English.
- Tesis: A simple health app becomes more useful when its data model reflects family-care responsibilities instead of one-user tracking.
- Audiencia: product engineers, local-first developers.
- Outline:
  1. Why single-user health trackers miss the caregiver workflow
  2. Patients, records, measurements and daily summaries
  3. Validation boundaries with shared packages
  4. Exporting records without leaking private data
  5. Deployment model: self-hosting over SaaS
- Evidence to collect:
  - Prisma schema
  - shared validators
  - export implementation
  - demo records
- Privacy notes: anonymize all examples.
- Readiness: needs repo inspection.

## Prioridad 2: Dream Home

### 3. Dream Home: turning Chilean home buying math into a product

- Idioma sugerido: Spanish.
- Tesis: Home buying decisions in Chile are scattered across UF values, mortgage assumptions, spreadsheets and property portals; Dream Home turns that into a workflow.
- Audiencia: Chilean builders, product engineers, first-time home buyers with technical interest.
- Outline:
  1. The problem: affordability is not just property price
  2. Modeling income, down payment, credit capacity and UF
  3. Comparing properties as a decision workflow
  4. Maps, geocoding and location context
  5. Quotations and exports for follow-up
  6. What the app deliberately does not decide for the user
- Evidence to collect:
  - calculator components
  - UF service
  - property storage and export flows
  - map screenshots
- Risk notes: avoid financial advice; present as planning software.
- Readiness: needs screenshots and feature verification.

### 4. From spreadsheet to real estate product: lessons from Dream Home

- Idioma sugerido: Spanish or English.
- Tesis: The interesting product work is not the calculator alone, but preserving the messy comparison workflow users already do in spreadsheets.
- Audiencia: product-minded engineers.
- Outline:
  1. Why spreadsheets are the prototype
  2. Identifying stable entities: property, quotation, simulation, location
  3. Progressive data entry instead of a giant form
  4. Exporting instead of locking users in
  5. What to measure next
- Evidence to collect:
  - property components
  - export schemas
  - quotation manager
  - screenshots from property list and details
- Risk notes: keep examples generic.
- Readiness: needs repo inspection.

## Prioridad 3: AI tooling

### 5. AI Memory Vault: making coding-agent history portable

- Idioma sugerido: English.
- Tesis: AI coding sessions contain engineering context that should survive tool switches, machine changes and terminal UI churn.
- Audiencia: developers using Claude Code, Codex CLI or other coding agents.
- Outline:
  1. Why agent history matters
  2. Extractors for different local storage formats
  3. Normalizing sessions into a portable model
  4. Search, Markdown export and git backup
  5. Restore workflows and future agent support
- Evidence to collect:
  - CLI commands
  - extractor architecture
  - domain models
  - backup/restore examples
- Readiness: ready after source review.

## Publicacion sugerida

1. Nuku local-first overview
2. Dream Home Chilean home buying workflow
3. AI Memory Vault portable agent history
4. Dream Home spreadsheet-to-product lessons
5. Nuku multi-patient data modeling
