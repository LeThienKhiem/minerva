import { createClient } from "@supabase/supabase-js";
import type { Project } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables.");
}

const createServerSupabaseClient = () =>
  createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: (input, init = {}) =>
        fetch(input, {
          ...init,
          cache: "no-store",
          next: { revalidate: 0 },
        }),
    },
  });

export const getProjects = async (): Promise<Project[]> => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Failed to fetch projects:", error.message);
    return [];
  }

  return data ?? [];
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  const supabase = createServerSupabaseClient();
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    return null;
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", numericId)
    .single();

  if (error) {
    console.error("Failed to fetch project:", error.message);
    return null;
  }

  return data ?? null;
};
