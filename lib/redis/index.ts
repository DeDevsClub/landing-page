import { Redis } from "@upstash/redis";

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

export async function addToWaitlist(email: string, name: string): Promise<{ success: boolean; position?: number }> {
    try {
        const exists = await redis.sismember("waitlist", email);
        if (exists) {
            return { success: false };
        }

        // Add to waitlist set
        await redis.sadd("waitlist", email);

        // Store user data with timestamp
        const userData = {
            name,
            email,
            timestamp: new Date().toISOString(),
        };

        await redis.hset("waitlist:users", {
            [email]: JSON.stringify(userData),
        });

        // Add to ordered list for position tracking
        await redis.lpush("waitlist:order", email);

        // Get position (1-indexed)
        const position = await redis.llen("waitlist:order");

        return { success: true, position: position as number };
    } catch (error) {
        console.error("Error adding email to waitlist:", error);
        return { success: false };
    }
}

export async function getWaitlistCount(): Promise<number> {
    try {
        const count = await redis.scard("waitlist");
        return count as number;
    } catch (error) {
        console.error("Error getting waitlist count:", error);
        return 0;
    }
}

export async function getUserPosition(email: string): Promise<number | null> {
    try {
        const position = await redis.lpos("waitlist:order", email);
        if (position === null) return null;
        // Convert to 1-indexed position (Redis lpos returns 0-indexed)
        return (position as number) + 1;
    } catch (error) {
        console.error("Error getting user position:", error);
        return null;
    }
}

export async function getUserData(email: string): Promise<{ name: string; email: string; timestamp: string } | null> {
    try {
        const userData = await redis.hget("waitlist:users", email);
        if (!userData) return null;
        return JSON.parse(userData as string);
    } catch (error) {
        console.error("Error getting user data:", error);
        return null;
    }
}