import {z} from 'zod';

export const contentFormSchema = z.object({
    title: z.string({required_error: "Title Harus diisi"}),
    excerpt: z.string({required_error: "Kutipan Harus diisi"}),
    description: z.string({required_error: "Deskripsi Harus diisi"}),
    categoryId: z.string({required_error: "Category Harus diisi"}),
})