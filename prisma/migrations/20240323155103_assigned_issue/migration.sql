-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `assignmedToUserId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignmedToUserId_fkey` FOREIGN KEY (`assignmedToUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
