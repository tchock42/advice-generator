import {z} from 'zod';

// The advice schema is used to validate the data we receive from the API
export const AdviceSchema = z.object({
    slip: z.object({       // a slip object is a simple piace of advice
        id: z.number(),
        advice: z.string(),
    })
});