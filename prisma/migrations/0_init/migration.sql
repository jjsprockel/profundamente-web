-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Publication" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relevanceScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dynamicScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolutionRating" (
    "id" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolutionRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchRating" (
    "id" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResearchRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationRating" (
    "id" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EducationRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsRating" (
    "id" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolutionRatingSummary" (
    "publicationId" TEXT NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalRatings" INTEGER NOT NULL DEFAULT 0,
    "weightedRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolutionRatingSummary_pkey" PRIMARY KEY ("publicationId")
);

-- CreateTable
CREATE TABLE "ResearchRatingSummary" (
    "publicationId" TEXT NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalRatings" INTEGER NOT NULL DEFAULT 0,
    "weightedRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchRatingSummary_pkey" PRIMARY KEY ("publicationId")
);

-- CreateTable
CREATE TABLE "EducationRatingSummary" (
    "publicationId" TEXT NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalRatings" INTEGER NOT NULL DEFAULT 0,
    "weightedRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EducationRatingSummary_pkey" PRIMARY KEY ("publicationId")
);

-- CreateTable
CREATE TABLE "NewsRatingSummary" (
    "publicationId" TEXT NOT NULL,
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalRatings" INTEGER NOT NULL DEFAULT 0,
    "weightedRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsRatingSummary_pkey" PRIMARY KEY ("publicationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Publication_slug_key" ON "Publication"("slug");

-- CreateIndex
CREATE INDEX "Publication_category_idx" ON "Publication"("category");

-- CreateIndex
CREATE INDEX "Publication_publishedAt_idx" ON "Publication"("publishedAt");

-- CreateIndex
CREATE INDEX "Publication_slug_idx" ON "Publication"("slug");

-- CreateIndex
CREATE INDEX "SolutionRating_publicationId_idx" ON "SolutionRating"("publicationId");

-- CreateIndex
CREATE INDEX "SolutionRating_createdAt_idx" ON "SolutionRating"("createdAt");

-- CreateIndex
CREATE INDEX "ResearchRating_publicationId_idx" ON "ResearchRating"("publicationId");

-- CreateIndex
CREATE INDEX "ResearchRating_createdAt_idx" ON "ResearchRating"("createdAt");

-- CreateIndex
CREATE INDEX "EducationRating_publicationId_idx" ON "EducationRating"("publicationId");

-- CreateIndex
CREATE INDEX "EducationRating_createdAt_idx" ON "EducationRating"("createdAt");

-- CreateIndex
CREATE INDEX "NewsRating_publicationId_idx" ON "NewsRating"("publicationId");

-- CreateIndex
CREATE INDEX "NewsRating_createdAt_idx" ON "NewsRating"("createdAt");

-- AddForeignKey
ALTER TABLE "SolutionRating" ADD CONSTRAINT "SolutionRating_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchRating" ADD CONSTRAINT "ResearchRating_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationRating" ADD CONSTRAINT "EducationRating_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsRating" ADD CONSTRAINT "NewsRating_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolutionRatingSummary" ADD CONSTRAINT "SolutionRatingSummary_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchRatingSummary" ADD CONSTRAINT "ResearchRatingSummary_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationRatingSummary" ADD CONSTRAINT "EducationRatingSummary_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsRatingSummary" ADD CONSTRAINT "NewsRatingSummary_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

