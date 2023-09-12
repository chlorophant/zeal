CREATE TABLE `todos` (
	`id` text PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`completed` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `todos_id_unique` ON `todos` (`id`);