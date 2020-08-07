export const Keys = {
    NOTIFICATIONS: 'notifications',
    USER: 'user',
    PUTME: 'putme',
    USER_PROFILE: 'user-profile',
    EXPIRY_DATE: 'expiry_date',
    CHALLENGE: 'challenge',
    SOUND_OFF: 'sound-off',
    PLAY_AUDIO: 'play_audio',
    SUBSCRIPTION: 'subscription',
    SUBSCRIBED: 'subscribed',
    SUBSCRIPTION_PLANS: 'SUBSCRIPTION_PLANS',
    USER_SUBSCRIBED: 'user_subscribed',
    CLASS_ID: 'class_id',
    COMPLETED_TEST_COUNT: 'completed_test_count',
    LAST_UPDATED_TIME: 'last_updated_time',
    REFERRER: 'referrer',
    DATABASE_COPIED: 'db_copied',
    FIRST_LAUNCH: 'first_launch',
    FIRST_OPEN: 'first_open',
    FIRST_DATE: 'first_date',
    WHATSAPP_LINKS: 'WHATSAPP_LINKS',
    VIDEO_COLUMN_ADDED: 'video_column_added',
    TOPICS_TABLE_UPDATED: 'topics_table_updated',
    DISPLAY_FLASHCARD_GUIDES: 'display_flashcard_guides',
    COMBAT_SUBJECTS: 'combat-subjects'
}

export const AppEvents = {
    PLAY_AUDIO: 'play_audio',
    PLAY_BG_AUDIO: 'play_bg_audio',
    BROWSER_CLOSED: 'browser_closed',
    USER_SUBSCRIBED: 'user_subscribed',
    UPDATE_THEME: 'update_theme',
    DB_SETUP: 'db_setup',
    DB_HAS_COPIED: 'db_hascopied',
    REDUCE_VOLUME: 'reduce_volume',
    PAYMENT_INITIATED: 'payment_initiated',
    PAYMENT_CANCELLED: 'payment_cancelled',
    DISABLE_BACK_BUTTON: 'disable_back',
    ENABLE_BACK_BUTTON: 'disable_back',
    USER_AUTH: 'user_auth',
    PROFILE_UPDATED: 'profile_updated',
    UPDATE_DATABASE_TABLE: 'update_database_table',
    TOPICS_TABLE_UPDATED: 'topics_table_updated'
    
}

export enum QuestionType {
    practice = 'practice',
    exam = 'exam',
    test = 'test',
    reading = 'reading',
    normal = 'normal'
}

export enum SubscriptionPlan {
    termly = 'termly',
    yearly = 'yearly'
}