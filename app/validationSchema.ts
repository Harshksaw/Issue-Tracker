import { z } from 'zod';

export const IssuesSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1, 'Description is required').max(65300)
});
//title , description
// assigned to USerId
//status

export const PatchIssueSchema = z.object({
    title: z.string().min(1).max(100).optional(),
    description: z.string().min(1, 'Description is required').max(65300).optional(),
    assignedToUserId: z.string().min(1, 'Assigned to is required').max(255).optional().nullable(),

});
