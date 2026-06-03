CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`content` longtext,
	`date` timestamp NOT NULL DEFAULT (now()),
	`category` varchar(100),
	`published` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`filename` varchar(255) NOT NULL,
	`fileKey` varchar(255) NOT NULL,
	`url` varchar(512) NOT NULL,
	`mimeType` varchar(100),
	`fileSize` int,
	`fileType` varchar(50) NOT NULL,
	`uploadedBy` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `files_id` PRIMARY KEY(`id`),
	CONSTRAINT `files_fileKey_unique` UNIQUE(`fileKey`)
);
