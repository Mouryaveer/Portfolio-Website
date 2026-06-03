import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getBlogPosts, getBlogPostBySlug, getFileByType, createFile } from "./db";
import { storagePut } from "./storage";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Blog posts router
  blog: router({
    list: publicProcedure.query(async () => {
      return await getBlogPosts();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogPostBySlug(input.slug);
      }),
  }),

  // Files router for resume/CV uploads
  files: router({
    getResume: publicProcedure.query(async () => {
      return await getFileByType('resume');
    }),
    getCV: publicProcedure.query(async () => {
      return await getFileByType('cv');
    }),
    uploadFile: protectedProcedure
      .input(z.object({
        filename: z.string(),
        fileBuffer: z.instanceof(Buffer),
        fileType: z.enum(['resume', 'cv', 'blog_image']),
        mimeType: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        try {
          const fileKey = `${ctx.user.id}/${input.fileType}/${input.filename}`;
          const { url, key } = await storagePut(
            fileKey,
            input.fileBuffer,
            input.mimeType || 'application/octet-stream'
          );

          // Save file metadata to database
          await createFile({
            filename: input.filename,
            fileKey: key,
            url: url,
            mimeType: input.mimeType,
            fileSize: input.fileBuffer.length,
            fileType: input.fileType,
            uploadedBy: ctx.user.id,
          });

          return { success: true, url, key };
        } catch (error) {
          console.error('File upload error:', error);
          throw new Error('Failed to upload file');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
