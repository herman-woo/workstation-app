
export interface Game {
    game_name: string;
    game_platform: string;
    game_status: string;
    game_completion_percentage: number;
    hours_played: number;
    game_completed: boolean;
    game_image_path: string;
    created_time: Date;
    update_time: Date;
  }