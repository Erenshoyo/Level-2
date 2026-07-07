-- Fix typo: rename 'PUSBLISHED' to 'PUBLISHED' in PostStatus enum
ALTER TYPE "PostStatus" RENAME VALUE 'PUSBLISHED' TO 'PUBLISHED';
