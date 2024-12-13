# Smart Shopping Assistant - Architecture & Routing Plan

**Date:** 12/12/2024

**Author:** Alan Gunning

---

### Overview

The vision is to build a versatile, agentic AI-driven platform that assists users in making informed, personalized shopping decisions across various product categories and countries. The platform will initially focus on consumer electronics (e.g., TVs, washing machines) and can later expand to fully furnish a living space with furniture selections (e.g., from IKEA), all guided by expert agents collaborating seamlessly.

The user experience will revolve around a simple chat interface where users describe their needs, preferences, and constraints. Expert agents in different domains (TVs, washing machines, furniture, etc.) will collaboratively select products and promotions, eventually helping the user compile a custom shopping basket tailored to their preferences. In the long term, these agents may even assist with completing purchases on the user’s behalf, as well as directly contacting stores to confirm details or request callbacks.

---

### Key Features

- **Expert Agents Per Category:**
    - Multiple specialized agents (e.g., TV expert, Washing Machine expert, Furniture expert) will:
        - Fetch product listings from vetted retailers.
        - Retrieve manufacturer details, specifications, and promotions.
        - Normalize and store data for quick querying.
        - Collaborate via an agentic AI layer to form holistic shopping recommendations.
- **Agentic AI Collaboration:**
    - Agents communicate with each other and the user’s query through a conversational interface.
    - They combine their domain expertise to recommend comprehensive solutions (e.g., furnishing an entire room, selecting a set of appliances, etc.).
- **User Experience:**
    - A chat-driven interface where users describe their needs.
    - Smart filtering, comparisons, and personalization.
    - Ability to evolve from single-product recommendations to entire “room packages” or “shopping baskets.”
    - Potential future capability to initiate and complete purchases directly within the platform.
- **Monetization:**
    - Integrate affiliate links into product listings to earn commissions.
    - Consider premium features or subscription models as the platform evolves.

---

### Technical Stack & Infrastructure

- **Front-End:**
    - **Framework:** Next.js 13 (App Router) for SSR, SSG, and ISR.
    - **Hosting:** Deployed on AWS using AWS CDK for infrastructure as code.
    - **Routing:** Country codes as path segments (`/ie`, `/uk`, etc.) and product categories as subsequent paths (`/ie/tv`, `/ie/washing-machine`, etc.).
    - **SEO & Performance:**
        - Server-side rendered pages for better indexing.
        - Structured data for improved search engine visibility.
        - Incremental Static Regeneration for dynamic content updates.
- **Backend & Agents:**
    - **Supabase Integration:**
        - Use Supabase for the underlying PostgreSQL database, authentication, and real-time features.
        - Store product listings, promotions, user sessions, and agent state.
    - **Agent Logic:**
        - Agents run as serverless functions (AWS Lambda) or scheduled tasks.
        - Pull data from retailers, manufacturers, and promotions.
        - Collaborate and negotiate product selections via an LLM-based coordinator.
    - **API & Websockets:**
        - Supabase APIs and websockets for real-time interactions and updates.
- **Infrastructure & Deployment:**
    - **AWS CDK:**
        - Infrastructure as code for defining and managing Lambda, API Gateway, CloudFront, etc.
    - **Next.js on AWS:**
        - Deploy with AWS services or a combination of Vercel and AWS for global scalability.
    - **Caching & CDN:**
        - Utilize CloudFront, Redis, or other caching solutions to speed data retrieval.
- **Security & Best Practices:**
    - Follow AWS best practices for IAM roles, least privilege access, and secure API endpoints.
    - Ensure all communications are HTTPS encrypted.
    - Use validation and sanitization on all external data sources.

---

### Routing Structure

**Country-based Path Segments:**

- Global homepage: `www.myshopdomain.com/`
- Country home: `www.myshopdomain.com/ie/`
- Product categories:
    - `www.myshopdomain.com/ie/tv`
    - `www.myshopdomain.com/ie/washing-machine`
- Product detail pages:
    - `www.myshopdomain.com/ie/tv/lg-55oledC1`
- Comparison pages:
    - `www.myshopdomain.com/ie/compare?products=lg-55oledC1,sony-55x90j`

**Next.js App Directory Example:**

```csharp
csharp
Copy code
app/
  [country]/
    page.tsx               // Country homepage
    tv/
      page.tsx             // Listing TVs
      [productSlug]/
        page.tsx           // TV product detail page
    washing-machine/
      page.tsx             // Listing washing machines
      [productSlug]/
        page.tsx           // Washing machine detail page
    compare/
      page.tsx             // Product comparison page

```

**Future-Ready Subdomains:**

- `admin.myshopdomain.com` for administrative panels.
- `partners.myshopdomain.com` for partner integrations.

---

### Long-Term Vision & Advanced Goals

- **Expanded Categories & Domains:**
    
    Go beyond electronics to include complete room solutions (furniture, décor, appliances).
    
- **Automated Purchases:**
    
    Allow the platform to facilitate direct checkout flows and payment integrations, reducing friction for users.
    
- **Collaborative Agent Ecosystem:**
    
    Agents share data and recommendations, working together to fulfill complex user requests (e.g., furnishing an entire room from multiple retailers).
    
- **Automated Store Contact (Stretch Goal):**
    
    Enable an agent with store-specific contact details and integration capabilities:
    
    - The user can click a button within the platform to request store confirmation or arrange a sales callback.
    - The agent automatically sends a pre-configured email or triggers a phone call (via a telephony API like Twilio) to the store’s sales team.
    - This feature removes hassle for the user and provides end-to-end assistance, from product discovery to store engagement.
- **Tourism**
    - Expand into helping tourists plan their trip with everything Ireland has to offer and help them pick tickets and times etc. that best suits their needs and eventually allow them to book and buy the tickets. Possibly provide a unique customer email at my domain that will do all the purchases and then just simply forward it to them with the details they need such as virtual tickets. Focus on Ireland and those with online sales first.
    
- **PRODUCT Register / Support / Warranty for their saved product models**
    - Allow them to easily take a photo of the model or book or warranty card to identify the model
    - When users have found their products, allow them to easily save them to their purchased lists so the chat has the context and can quickly provide them
    with correct user guides, video guides and expert troubleshooting help. Also store their warranties etc. which i always wanted to do the warranty app.

---

### Repository Name

- choosr

---

**Next Steps:**

1. Set up AWS CDK project to define Lambda functions, API Gateway, CloudFront distributions, and other necessary infrastructure.
2. Initialize Next.js 13 project and integrate with Supabase (database, authentication, real-time APIs).
3. Implement basic agents and data fetching logic for a single product category.
4. Add chat interface and agent collaboration workflow.
5. Incrementally expand product categories and countries, refine agent intelligence, and gradually introduce automated store contact capabilities.