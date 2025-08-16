--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: SCHEMA; Type: SCHEMA; Schema: -; Owner: ernest
--

CREATE SCHEMA "SCHEMA";


ALTER SCHEMA "SCHEMA" OWNER TO ernest;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Account; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"."Account" (
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE "SCHEMA"."Account" OWNER TO ernest;

--
-- Name: Post; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"."Post" (
    id integer NOT NULL,
    title text NOT NULL,
    published boolean DEFAULT false NOT NULL,
    "authorId" text NOT NULL,
    description text NOT NULL,
    content text NOT NULL,
    category text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "imageUrl" text
);


ALTER TABLE "SCHEMA"."Post" OWNER TO ernest;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: SCHEMA; Owner: ernest
--

CREATE SEQUENCE "SCHEMA"."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE "SCHEMA"."Post_id_seq" OWNER TO ernest;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: SCHEMA; Owner: ernest
--

ALTER SEQUENCE "SCHEMA"."Post_id_seq" OWNED BY "SCHEMA"."Post".id;


--
-- Name: Session; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"."Session" (
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE "SCHEMA"."Session" OWNER TO ernest;

--
-- Name: User; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"."User" (
    id text NOT NULL,
    name text,
    email text NOT NULL,
    "emailVerified" timestamp(3) without time zone,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE "SCHEMA"."User" OWNER TO ernest;

--
-- Name: VerificationToken; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"."VerificationToken" (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE "SCHEMA"."VerificationToken" OWNER TO ernest;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: SCHEMA; Owner: ernest
--

CREATE TABLE "SCHEMA"._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE "SCHEMA"._prisma_migrations OWNER TO ernest;

--
-- Name: Post id; Type: DEFAULT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Post" ALTER COLUMN id SET DEFAULT nextval('"SCHEMA"."Post_id_seq"'::regclass);


--
-- Data for Name: Account; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"."Post" (id, title, published, "authorId", description, content, category, "createdAt", "imageUrl") FROM stdin;
\.


--
-- Data for Name: Session; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"."Session" ("sessionToken", "userId", expires, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"."User" (id, name, email, "emailVerified", image, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: VerificationToken; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"."VerificationToken" (identifier, token, expires) FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: SCHEMA; Owner: ernest
--

COPY "SCHEMA"._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
68940212-6b62-4e78-8824-4fd34b3e76a4	74ec65e1525f2bff256d1f0a9733ecd25460bed17ef4d49becfee48ae79a0d96	2025-08-14 22:20:48.186409+02	20250807125252_init	\N	\N	2025-08-14 22:20:48.10487+02	1
46577c75-0795-4e66-ad38-c6a865b5d2e8	97791afd1c04db8cf88df65970b435ef2687d8944c8db6de5a7c6d19aba1c3b6	2025-08-14 22:20:48.199434+02	20250807210152_add_image_url	\N	\N	2025-08-14 22:20:48.189678+02	1
2bfcc68a-5d50-439b-94c6-7cfa3ef68e79	3d5294d88081ad607009810298020fa32988b41c682e65e2be03bf93a2472b02	2025-08-14 22:20:48.213335+02	20250810191920_new_post_model	\N	\N	2025-08-14 22:20:48.202771+02	1
37974d29-1c95-4eba-9e8b-175ff8557573	4ef541be51008eb68d401b722303ce16396f27906619c7d72fcb0a0855e9e49e	2025-08-14 22:20:48.226834+02	20250810202142_init	\N	\N	2025-08-14 22:20:48.216633+02	1
aafc2448-2bc5-4910-a889-222fccf533df	eef04ac6d082bf99adbd13a064758d717ac52fb2c74ad767c7fbac2c38ebda49	2025-08-14 22:20:48.256352+02	20250811114940_post_content_to_string	\N	\N	2025-08-14 22:20:48.230069+02	1
4eabb80e-ee3b-4a53-82d3-ca17285cbaa0	f6dc215dd9ad87a3f25eb89d64ed6c2f1550dbd97aad38b3a279beba870dc543	2025-08-14 22:20:48.269879+02	20250811201425_add_image_url	\N	\N	2025-08-14 22:20:48.259431+02	1
2488d848-c4d9-42ef-81bb-d5ff9aea5266	081b6ab07a8bcf0c3ba315f53b98302e66bd22547e613ba6cd0e99a66039c0ee	2025-08-14 22:20:48.283163+02	20250811202628_add_image_url	\N	\N	2025-08-14 22:20:48.273218+02	1
\.


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: SCHEMA; Owner: ernest
--

SELECT pg_catalog.setval('"SCHEMA"."Post_id_seq"', 1, false);


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (provider, "providerAccountId");


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: VerificationToken VerificationToken_pkey; Type: CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."VerificationToken"
    ADD CONSTRAINT "VerificationToken_pkey" PRIMARY KEY (identifier, token);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Session_sessionToken_key; Type: INDEX; Schema: SCHEMA; Owner: ernest
--

CREATE UNIQUE INDEX "Session_sessionToken_key" ON "SCHEMA"."Session" USING btree ("sessionToken");


--
-- Name: User_email_key; Type: INDEX; Schema: SCHEMA; Owner: ernest
--

CREATE UNIQUE INDEX "User_email_key" ON "SCHEMA"."User" USING btree (email);


--
-- Name: Account Account_userId_fkey; Type: FK CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Account"
    ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "SCHEMA"."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "SCHEMA"."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Session Session_userId_fkey; Type: FK CONSTRAINT; Schema: SCHEMA; Owner: ernest
--

ALTER TABLE ONLY "SCHEMA"."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "SCHEMA"."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

