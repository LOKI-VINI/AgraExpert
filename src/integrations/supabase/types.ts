export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          post_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          post_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          post_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment_rentals: {
        Row: {
          available: boolean | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string
          name: string
          owner_id: string
          price_per_day: number
          updated_at: string | null
        }
        Insert: {
          available?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          name: string
          owner_id: string
          price_per_day: number
          updated_at?: string | null
        }
        Update: {
          available?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          name?: string
          owner_id?: string
          price_per_day?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          category: string
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      soil_reports: {
        Row: {
          created_at: string | null
          id: string
          location: string
          nitrogen_level: number | null
          organic_matter: number | null
          ph_level: number | null
          phosphorus_level: number | null
          potassium_level: number | null
          recommendations: string | null
          soil_type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          location: string
          nitrogen_level?: number | null
          organic_matter?: number | null
          ph_level?: number | null
          phosphorus_level?: number | null
          potassium_level?: number | null
          recommendations?: string | null
          soil_type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          location?: string
          nitrogen_level?: number | null
          organic_matter?: number | null
          ph_level?: number | null
          phosphorus_level?: number | null
          potassium_level?: number | null
          recommendations?: string | null
          soil_type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      training_videos: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          duration: string
          featured: boolean | null
          id: string
          thumbnail: string
          title: string
          updated_at: string | null
          video_url: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          duration: string
          featured?: boolean | null
          id?: string
          thumbnail: string
          title: string
          updated_at?: string | null
          video_url: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          duration?: string
          featured?: boolean | null
          id?: string
          thumbnail?: string
          title?: string
          updated_at?: string | null
          video_url?: string
        }
        Relationships: []
      }
      weather_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          description: string
          id: string
          is_active: boolean | null
          location: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          description: string
          id?: string
          is_active?: boolean | null
          location: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          description?: string
          id?: string
          is_active?: boolean | null
          location?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      yield_prices: {
        Row: {
          available_quantity: number | null
          created_at: string | null
          crop_type: string
          id: string
          location: string
          price_per_unit: number
          unit: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          available_quantity?: number | null
          created_at?: string | null
          crop_type: string
          id?: string
          location: string
          price_per_unit: number
          unit: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          available_quantity?: number | null
          created_at?: string | null
          crop_type?: string
          id?: string
          location?: string
          price_per_unit?: number
          unit?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
